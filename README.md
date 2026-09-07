# Chandoos Restaurant & Bakery — QR Menu

A mobile-friendly digital menu with a printable QR code.

## Files
- `index.html` — the customer-facing menu page (dark + orange theme, dotted leader lines).
- `menu-data.js` — all menu items and prices. **Edit this file to update the menu.**
- `qr.html` — QR code generator/printer page.

## Preview locally
Open `index.html` directly in a browser, or run a tiny local server:

```powershell
# from this folder
python -m http.server 8080
```
Then visit http://localhost:8080/index.html

## Go live (pick one — all free)
1. **Netlify Drop** — go to https://app.netlify.com/drop and drag this whole folder in. You get a public URL instantly.
2. **GitHub Pages** — push this folder to a GitHub repo, enable Pages in Settings.
3. **Vercel** — `vercel` CLI or drag-and-drop import.

## Make the QR code
1. After hosting, copy your live menu URL (e.g. `https://chandoos.netlify.app/index.html`).
2. Open `qr.html`, paste the URL in the box, click **Update QR**, then **Print**.
3. Place the printed QR on tables / at the counter.

## Cross-device sync (IMPORTANT)
By default, availability toggles and added items are saved in the browser's
localStorage — which is **per device**. To make the admin's changes show up on
**every customer's phone**, connect Firebase (free). Until you do, the site still
works but each device only sees its own local changes.

### Set up Firebase (~5 minutes, free)
1. Go to https://console.firebase.google.com → **Add project** (any name). You can
   skip Google Analytics.
2. In the project, click the **Web** icon (`</>`) to register a web app. Give it a
   nickname, click Register. Firebase shows a `firebaseConfig = { ... }` object.
3. Copy those values into **`firebase-config.js`** (replace the `PASTE_...` placeholders).
4. In the left menu: **Build → Firestore Database → Create database**.
   - Choose a location, then start in **Test mode** to try it quickly.
5. Re-deploy (upload the updated `firebase-config.js`). Done — toggles now sync live
   to all devices, no page refresh needed.

### Secure it before real use (recommended)
Test mode lets anyone read/write. For a live restaurant, lock writes down.
In Firestore → **Rules**, a simple starting point (public can read the menu state,
writes limited — pair with Firebase Auth for the admin page if you want full control):
```
rules_version = '2';
service cloud.firestore {
  match /databases/{db}/documents {
    match /chandoos/menu-state {
      allow read: if true;      // customers can read availability
      allow write: if true;     // TODO: tighten (e.g. require admin auth)
    }
  }
}
```
Note: the Firebase web config keys are safe to expose publicly (they identify the
project, not grant access) — access is controlled by the Firestore rules above.

## Update the menu later
Edit `menu-data.js` (change a price, add/remove an item), save, and re-deploy.
Each item looks like:
```js
{ name: "Chicken Dum Biryani", price: "220" }
```
For two prices (like plain/schezwan or cake sizes) use an array:
```js
{ name: "Veg Fried Rice", price: ["170", "180"] }
```
