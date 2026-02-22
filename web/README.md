# Shah Jalal Fabricators — React Website

Light-themed, modern site built with **React**, **Vite**, **Tailwind CSS**, and shadcn-style UI. Colors are inspired by the PayPal logo (deep blue `#003087` + light blue `#009cde`).

## Stack

- **React 19** + **Vite 7**
- **Tailwind CSS 3**
- **shadcn-style components** (Button, Card, Input, Select) + **lucide-react** icons
- **Outfit** & **Cormorant Garamond** (Google Fonts)

## Commands

```bash
npm install   # if needed
npm run dev   # http://localhost:5173
npm run build
npm run preview  # preview production build
```

## Project structure

- `src/components/` — Header, Hero, Services, Gallery, About, Contact, Footer
- `src/components/ui/` — Button, Card, Input, Textarea, Label, Select
- `src/lib/utils.js` — `cn()` for class names
- `tailwind.config.js` — Primary/accent colors (PayPal blues), fonts

## Customize

- **Gallery:** Replace placeholder blocks with real images or link to a gallery.
- **Map:** In `Contact.jsx`, replace the iframe `src` with your Google Maps embed URL.
- **Theme:** Edit `primary` / `accent` in `tailwind.config.js` and `src/index.css`.
