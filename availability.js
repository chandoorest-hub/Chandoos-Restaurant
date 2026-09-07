/* Shared availability helpers for Chandoos QR menu.
   Availability is stored in localStorage as a map of itemId -> false (sold out).
   Items not present in the map are treated as AVAILABLE by default. */
(function (global) {
  const STORAGE_KEY = 'chandoos_availability_v1';
  const CUSTOM_KEY = 'chandoos_custom_items_v1';

  function slug(s) {
    return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  // Stable id from category title + item name (order-independent, rename-sensitive).
  function itemId(catTitle, itemName) {
    return slug(catTitle) + '__' + slug(itemName);
  }

  function loadMap() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function saveMap(map) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  }

  // true = available, false = sold out
  function isAvailable(map, id) {
    return map[id] !== false;
  }

  function setAvailable(map, id, available) {
    if (available) {
      delete map[id]; // default is available, keep storage small
    } else {
      map[id] = false;
    }
    return map;
  }

  function resetAll() {
    localStorage.removeItem(STORAGE_KEY);
  }

  /* ---------------- Custom items ----------------
     Stored as an array: [{ id, category, name, price }]
     - price is a string "180" or an array ["170","180"] for dual price.
     - id is a stable unique id so it can be deleted / tracked for availability. */
  function loadCustom() {
    try {
      const arr = JSON.parse(localStorage.getItem(CUSTOM_KEY));
      return Array.isArray(arr) ? arr : [];
    } catch (e) {
      return [];
    }
  }

  function saveCustom(arr) {
    localStorage.setItem(CUSTOM_KEY, JSON.stringify(arr));
  }

  function addCustomItem(category, name, price) {
    const arr = loadCustom();
    const id = 'custom-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
    arr.push({ id: id, category: category, name: name, price: price });
    saveCustom(arr);
    return id;
  }

  function removeCustomItem(id) {
    const arr = loadCustom().filter(function (it) { return it.id !== id; });
    saveCustom(arr);
  }

  /* Merge base MENU (from menu-data.js) with custom items into one array.
     Custom items are appended to matching categories, or create new ones. */
  function getMergedMenu(baseMenu) {
    // deep-ish clone so we never mutate the source MENU
    const merged = baseMenu.map(function (cat) {
      return {
        title: cat.title,
        note: cat.note,
        cols: cat.cols,
        items: cat.items.map(function (it) {
          return { name: it.name, price: it.price, desc: it.desc };
        })
      };
    });

    const byTitle = {};
    merged.forEach(function (cat) { byTitle[cat.title.toLowerCase()] = cat; });

    loadCustom().forEach(function (ci) {
      const item = { name: ci.name, price: ci.price, custom: true, customId: ci.id };
      const key = (ci.category || '').toLowerCase();
      let cat = byTitle[key];
      if (!cat) {
        cat = { title: ci.category, items: [] };
        byTitle[key] = cat;
        merged.push(cat);
      }
      cat.items.push(item);
    });

    return merged;
  }

  global.Availability = {
    STORAGE_KEY: STORAGE_KEY,
    CUSTOM_KEY: CUSTOM_KEY,
    itemId: itemId,
    slug: slug,
    loadMap: loadMap,
    saveMap: saveMap,
    isAvailable: isAvailable,
    setAvailable: setAvailable,
    resetAll: resetAll,
    loadCustom: loadCustom,
    saveCustom: saveCustom,
    addCustomItem: addCustomItem,
    removeCustomItem: removeCustomItem,
    getMergedMenu: getMergedMenu
  };
})(window);
