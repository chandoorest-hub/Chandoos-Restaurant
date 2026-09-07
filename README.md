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
