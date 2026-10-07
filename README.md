# K. Sasindu Sachintha Bandara - Personal Portfolio

> Personal portfolio website of K. Sasindu Sachintha Bandara, an undergraduate Software Engineering student from Sri Lanka.

## 🚀 Tech Stack

- **React** (Vite).
- **Tailwind CSS v4**.
- **Lucide React** icons.
- **Vanilla JS** animations (IntersectionObserver).

## 📦 Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Runs at [http://localhost:5173](http://localhost:5173)

### Build for production

```bash
npm run build
```

Output goes to `dist/`

### Preview production build

```bash
npm run preview
```

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Sticky navigation with mobile menu
│   ├── Hero.jsx          # Landing section with terminal card
│   ├── About.jsx         # About section with profile card
│   ├── Skills.jsx        # Grouped skills by category
│   ├── Projects.jsx      # Filterable project grid
│   ├── ProjectCard.jsx   # Individual project card
│   ├── Experience.jsx    # Development journey timeline
│   ├── Contact.jsx       # Contact form with mailto fallback
│   ├── Footer.jsx        # Footer with social links
│   ├── SectionHeading.jsx
│   ├── Button.jsx
│   └── icons.jsx         # Inline SVG icons (GitHub, LinkedIn)
├── data/
│   └── projects.js       # All project data
├── hooks/
│   └── useReveal.js      # Scroll-triggered animation hook
├── App.jsx
├── main.jsx
└── index.css             # Design tokens + global styles
```

## 🌐 Deploy to GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:

```json
"homepage": "https://sasindusachintha.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Then:

```bash
npm run deploy
```

## 🌐 Deploy to Netlify

1. Run `npm run build`.
2. Drag the `dist/` folder into [Netlify Drop](https://app.netlify.com/drop)

Or connect your GitHub repo in Netlify dashboard with:
- Build command: `npm run build`.
- Publish directory: `dist`

## 📝 Git Commands

```bash
git init
git add .
git commit -m "feat: initial portfolio website"
git branch -M main
git remote add origin https://github.com/sasindusachintha/portfolio.git
git push -u origin main
```

## ✅ Sections

- Home / Hero
- About
- Skills
- Projects (with filter: All / Full Stack / AI ML / Mobile / Web / Computer Vision)
- Development Journey
- Contact
- Footer
