# Sugo Pasta and Pizza website

A modern restaurant site built with React, Vite, Tailwind CSS v4, Framer Motion and React Router.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

Requires Node 20.19 or newer.

## What's inside

- Pages: Home, Menu, About, Contact (React Router)
- Menu with category tabs and an order list that sends to WhatsApp
- Reservation form that sends a request to WhatsApp
- Night and light themes: a toggle in the navbar, remembered between visits, defaults to the device setting
- Interactive touches: animated letters, parallax hero, scrolling dish ticker, tilting dish cards, "pick a mood" dish finder, photo lightbox (arrow keys and Esc), order toast, scroll progress bar
- Reduced-motion support
- No backend. Add one later for reservations or a menu admin.

## Make it Sugo's

| To change | Edit |
| --- | --- |
| Phone, WhatsApp number, hours, address, social links | `src/data/site.js` |
| Dishes, descriptions, prices | `src/data/menu.js` |
| Photos | `src/data/images.js`. Replace any ID with a path like `"/images/pesto.jpg"` (files go in `public/images/`) |
| Gallery layout and captions | `src/components/Gallery.jsx` |
| Colors | CSS variables at the top of `src/index.css` |

The photos are free Unsplash stock images, not Sugo's own food. Replace them with real photos of Sugo before launch. If a photo fails to load, a colored placeholder shows instead. The menu and some copy are also placeholders. Confirm the WhatsApp number is a real WhatsApp account before sharing the site.

## Deploy

- Vercel: import the repo. `vercel.json` handles page routing.
- Netlify: build command `npm run build`, publish directory `dist`. `public/_redirects` handles page routing.

Get Sugo's permission and use their real branding and photos before publishing publicly.
