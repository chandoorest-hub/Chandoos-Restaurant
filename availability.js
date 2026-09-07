/* Shared state for Chandoos QR menu.
   - Availability: map of itemId -> false (sold out). Missing = available.
   - Custom items: array of { id, category, name, price }.

   Storage strategy:
   - CLOUD (Firebase Firestore): the single source of truth shared across ALL devices.
   - localStorage: offline cache + fallback if Firebase isn't configured yet.

   Both pages call Availability.init(onChange). onChange fires on first load and on
   every remote update, so the menu/admin re-render live on any device. */
(function (global) {
  const STORAGE_KEY = 'chandoos_availability_v1';
  const CUSTOM_KEY = 'chandoos_custom_items_v1';

  // ---- in-memory state (kept in sync with cloud + cache) ----
  let stateMap = {};      // availability map
  let stateCustom = [];   // custom items array
  let db = null;          // firestore instance (null => local-only mode)
  let docRef = null;
  let listeners = [];     // onChange callbacks
  let ready = false;

  function slug(s) {
    return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  // Stable id from category title + item name.
  function itemId(catTitle, itemName) {
    return slug(catTitle) + '__' + slug(itemName);
  }

  // ---------------- local cache ----------------
  function cacheRead() {
    try { stateMap = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch (e) { stateMap = {}; }
    try {
      const arr = JSON.parse(localStorage.getItem(CUSTOM_KEY));
      stateCustom = Array.isArray(arr) ? arr : [];
    } catch (e) { stateCustom = []; }
  }
  function cacheWrite() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stateMap));
    localStorage.setItem(CUSTOM_KEY, JSON.stringify(stateCustom));
  }

  function notify() { listeners.forEach(function (cb) { try { cb(); } catch (e) {} }); }

  // ---------------- cloud (Firestore) ----------------
  function firebaseConfigured() {
    return typeof FIREBASE_CONFIG !== 'undefined' &&
           FIREBASE_CONFIG.apiKey &&
           FIREBASE_CONFIG.apiKey.indexOf('PASTE_') !== 0;
  }

  function initCloud() {
    if (!firebaseConfigured() || typeof firebase === 'undefined') return false;
    try {
      if (!firebase.apps || !firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
      db = firebase.firestore();
      docRef = db.collection(FIREBASE_DOC_PATH.collection).doc(FIREBASE_DOC_PATH.docId);

      // Real-time subscription: fires immediately and on every remote change.
      docRef.onSnapshot(function (snap) {
        const data = snap.exists ? snap.data() : {};
        stateMap = data.availability || {};
        stateCustom = Array.isArray(data.custom) ? data.custom : [];
        cacheWrite();       // keep local cache fresh for offline
        ready = true;
        notify();
      }, function (err) {
        // On error, fall back to whatever is cached.
        console.warn('Firestore listen error, using local cache:', err);
        ready = true;
        notify();
      });
      return true;
    } catch (e) {
      console.warn('Firebase init failed, using local-only mode:', e);
      db = null;
      return false;
    }
  }

  // Persist current in-memory state to cloud (+cache).
  function persist() {
    cacheWrite();
    if (db && docRef) {
      docRef.set({ availability: stateMap, custom: stateCustom }, { merge: true })
        .catch(function (e) { console.warn('Firestore write failed:', e); });
    } else {
      // local-only mode: mirror to other tabs on same device
      notify();
    }
  }

  // ---------------- public: init ----------------
  function init(onChange) {
    if (typeof onChange === 'function') listeners.push(onChange);
    cacheRead();                 // show cached data instantly
    const usingCloud = initCloud();
    if (!usingCloud) {
      // Local-only fallback: still sync across tabs on the same device.
      ready = true;
      window.addEventListener('storage', function (e) {
        if (e.key === STORAGE_KEY || e.key === CUSTOM_KEY) { cacheRead(); notify(); }
      });
      // fire once so the page renders from cache
      setTimeout(notify, 0);
    }
    return { cloud: usingCloud };
  }

  function isCloud() { return !!db; }

  // ---------------- availability API ----------------
  function isAvailable(id) { return stateMap[id] !== false; }

  function setAvailable(id, available) {
    if (available) delete stateMap[id];
    else stateMap[id] = false;
    persist();
  }

  function setManyAvailable(ids, available) {
    ids.forEach(function (id) {
      if (available) delete stateMap[id];
      else stateMap[id] = false;
    });
    persist();
  }

  function resetAll() {
    stateMap = {};
    persist();
  }

  function getMap() { return stateMap; }

  // ---------------- custom items API ----------------
  function loadCustom() { return stateCustom.slice(); }

  function addCustomItem(category, name, price) {
    const id = 'custom-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
    stateCustom.push({ id: id, category: category, name: name, price: price });
    persist();
    return id;
  }

  function removeCustomItem(id) {
    stateCustom = stateCustom.filter(function (it) { return it.id !== id; });
    persist();
  }

  // ---------------- merged menu ----------------
  function getMergedMenu(baseMenu) {
    const merged = baseMenu.map(function (cat) {
      return {
        title: cat.title, note: cat.note, cols: cat.cols,
        items: cat.items.map(function (it) { return { name: it.name, price: it.price, desc: it.desc }; })
      };
    });

    const byTitle = {};
    merged.forEach(function (cat) { byTitle[cat.title.toLowerCase()] = cat; });

    stateCustom.forEach(function (ci) {
      const item = { name: ci.name, price: ci.price, custom: true, customId: ci.id };
      const key = (ci.category || '').toLowerCase();
      let cat = byTitle[key];
      if (!cat) { cat = { title: ci.category, items: [] }; byTitle[key] = cat; merged.push(cat); }
      cat.items.push(item);
    });

    return merged;
  }

  global.Availability = {
    STORAGE_KEY: STORAGE_KEY,
    CUSTOM_KEY: CUSTOM_KEY,
    init: init,
    isCloud: isCloud,
    itemId: itemId,
    slug: slug,
    isAvailable: isAvailable,
    setAvailable: setAvailable,
    setManyAvailable: setManyAvailable,
    resetAll: resetAll,
    getMap: getMap,
    loadCustom: loadCustom,
    addCustomItem: addCustomItem,
    removeCustomItem: removeCustomItem,
    getMergedMenu: getMergedMenu
  };
})(window);
