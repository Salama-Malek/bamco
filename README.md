# BAMCO — Medical Equipment Company Website

Marketing website for BAMCO (Beit Al-Tajheez Al-Tebbeya), a Saudi supplier of medical equipment, supplies, solutions, and devices.

## Overview

BAMCO's site presents the company to healthcare sector clients in Saudi Arabia: who they are, what they offer, and how to reach them. It is a fully Arabic, right-to-left, responsive single-page-app built with React and TypeScript, with content sourced from a static data file so copy and listings can be updated without touching component code.

## Features

- Home page with a hero banner and company statistics
- About page covering company background, vision, mission, values, and certifications
- Services page detailing equipment, supplies, solutions, devices, and after-sales support
- Contact page with an EmailJS-powered contact form and office/location details
- Floating WhatsApp button for quick contact
- Full right-to-left (RTL) Arabic layout
- Responsive design across desktop and mobile

## Tech stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- React Router DOM
- Lucide React (icons)
- EmailJS (contact form delivery)

## Getting started

### Requirements

- Node.js 18+
- npm

### Install and run

```bash
npm install       # install dependencies
npm run dev       # start the dev server
npm run build      # type-check and build for production
npm run preview    # preview the production build locally
npm run lint       # run ESLint
```

The contact form requires EmailJS credentials, provided via environment variables:

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Production output is written to `dist/` and can be deployed to any static host (Netlify, Vercel, GitHub Pages, or a standard Nginx/Apache server).

## Project structure

```
bamco/
├── public/                  # Static assets (logos, favicon)
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Navigation bar
│   │   ├── Footer.tsx
│   │   ├── WhatsAppButton.tsx
│   │   ├── PageLoader.tsx
│   │   └── ScrollToTop.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   └── Contact.tsx
│   ├── data/
│   │   └── staticData.ts    # Company info, locations, services, stats, values
│   ├── App.tsx               # Routes and layout
│   ├── main.tsx               # Entry point
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

## License

All rights reserved © 2024 BAMCO.
