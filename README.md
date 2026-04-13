# ZyuuBotz — WhatsApp Bot Linktree

A sleek, customizable **link-in-bio / linktree-style landing page** built for **ZyuuBotz**, a WhatsApp bot service. Features a live visual customizer, animated glassmorphism UI, and a looping video background — all powered by React + Vite.

![Preview](src/assets/hero.png)

---

## ✨ Features

- **Live Customizer Panel** — Tweak layout, typography, button styles, and accent color in real-time without touching code
- **Glassmorphism UI** — Frosted glass cards with backdrop blur and subtle borders
- **Animated Avatar Border** — Gradient pulse animation around the profile picture
- **Video Background** — Looping ambient video with a radial vignette overlay
- **Responsive Design** — Mobile-first layout, works across all screen sizes
- **Custom Scrollbar** — Styled scrollbar to match the dark aesthetic
- **Google Fonts** — Supports Inter, Poppins, and Sora with live font switching

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | ^19.2.4 | UI framework |
| [Vite](https://vite.dev/) | ^8.0.4 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | ^4.2.2 | Utility-first styling |
| [Lucide React](https://lucide.dev/) | ^1.7.0 | Icon library |

---

## 📁 Project Structure

```
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   └── hero.png
│   ├── components/
│   │   ├── Customizer.jsx   # Live customizer sidebar panel
│   │   └── Preview.jsx      # Main landing page preview
│   ├── App.jsx              # Root component, state management
│   ├── App.css              # Legacy/base styles
│   ├── index.css            # Global styles, Tailwind, custom utilities
│   └── main.jsx             # React entry point
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>=18`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/landing_pagezyuubotz.git
cd landing_pagezyuubotz

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder, ready to deploy to any static hosting (Vercel, Netlify, Cloudflare Pages, etc.).

### Preview Production Build

```bash
npm run preview
```

---

## ⚙️ Customizer Options

The floating **Settings** button (bottom-right) opens the live customizer panel. All changes are reflected instantly in the preview.

| Section | Controls |
|---|---|
| **Layout** | Padding top, max content width, gap between buttons |
| **Avatar** | Size, border radius |
| **Typography** | Font family (Inter / Poppins / Sora), name size, bio size |
| **Button Style** | Border radius, minimum height |
| **Accent Color** | Color picker for button background |

---

## 🔗 Link Configuration

Links are defined as a static array in `src/components/Preview.jsx`:

```js
const LINKS = [
  {
    id: 'grup',
    title: 'Group WhatsApp 2',
    description: 'Klik untuk menggunakan dengan free!',
    iconUrl: 'https://...',
    url: 'https://chat.whatsapp.com/...'
  },
  // add more links here
];
```

Each link renders as a glassmorphism card with a thumbnail, title, description, and chevron arrow.

---

## 🎨 Styling Notes

Custom Tailwind utilities are defined in `src/index.css`:

- `.glass` — Glassmorphism card style (backdrop blur + semi-transparent background)
- `.text-shadow-sm` — Subtle text shadow for readability over video backgrounds
- `.animate-gradient-border` — Animated gradient used on the avatar border ring

---

## 📄 License

This project is private and intended for personal/commercial use by **ZyuuDev**. All rights reserved.

---

<div align="center">
  <sub>Powered by <strong>ZyuuDev</strong></sub>
</div>
