# Sergio Cid - Portfolio 2025

A modern, minimalist portfolio built with Astro, Tailwind CSS, and TypeScript.

![Portfolio Preview](preview.png)

## ✨ Features

- **Dark/Light Mode** - Toggle between themes with preference persistence
- **Bilingual Support** - Full English and Spanish translations
- **Project Filters** - Filter projects by technology
- **Responsive Design** - Mobile-first approach
- **Performance Optimized** - Astro's static generation for fast loading
- **Accessible** - WCAG 2.1 AA compliant
- **SEO Ready** - Meta tags and Open Graph support

## 🎨 Design

- **Primary Color**: Black (#0a0a0a)
- **Secondary Color**: Wine (#722F37)
- **Typography**: Outfit (display), Sora (body), JetBrains Mono (code)
- **Style**: Minimalist, professional, elegant

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
/
├── public/
│   ├── favicon.svg
│   ├── projects/          # Project images
│   └── icons/             # Technology icons
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Experience.astro
│   │   ├── Projects.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── i18n/
│   │   ├── index.ts
│   │   ├── en.ts
│   │   └── es.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro    # English version
│   │   └── es/
│   │       └── index.astro # Spanish version
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

## 🛠 Tech Stack

- [Astro](https://astro.build) - Static site generator
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- [TypeScript](https://www.typescriptlang.org) - Type safety

## 📝 Customization

### Adding Projects

Edit the `projects` array in `src/components/Projects.astro`:

```typescript
const projects = [
  {
    title: 'Project Name',
    description: lang === 'es' ? 'Descripción' : 'Description',
    image: '/projects/image.webp',
    technologies: ['React', 'TypeScript'],
    github: 'https://github.com/...',
    live: 'https://...',
  },
];
```

### Adding Translations

Edit files in `src/i18n/`:
- `en.ts` for English
- `es.ts` for Spanish

### Changing Colors

Edit `tailwind.config.mjs` to customize the color palette.

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!

## 👤 Author

**Sergio Gabriel Cid Martinez**
- GitHub: [@SrCidm](https://github.com/SrCidm)
- LinkedIn: [sergio-cid](https://linkedin.com/in/sergio-cid)
- Email: Sergio.g.cid.m@gmail.com
