# Chandan Gupta — Engineering Portfolio

A modern, high-performance developer portfolio built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**, designed with a sleek Linear-style dark aesthetic for a **Senior Full-Stack .NET & AI Systems Engineer**.

---

## ⚡ Features

- **Linear-Style Dark Aesthetic**: High-contrast typography, subtle mesh radial glows, glassmorphism (`backdrop-blur`), and glowing borders.
- **Interactive System Architecture Telemetry**: Live interactive flow diagrams demonstrating sub-200ms WebRTC voice loops, automated transaction reconciliation, and RAG pipelines.
- **Career Velocity Timeline**: Visual breakdown of rapid career advancement at Onflo (Trainee → SE I → SE II → SE III).
- **Featured Case Studies & Code**: Showcases real-world enterprise projects with system design highlights, metrics, live service links, and GitHub repository links.
- **Interactive Contact & Telemetry**: One-click copy email/phone with instant feedback, direct mailto launcher, and one-click PDF resume download.
- **GitHub Pages Ready**: Configured for static export (`output: 'export'`) with automated GitHub Actions CI/CD workflow (`.github/workflows/deploy.yml`).

---

## 🚀 Quick Start (Local Development)

```bash
# Navigate to the portfolio directory
cd portfolio

# Install dependencies (if needed)
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Static Production Build

```bash
# Export static production site to /out
npm run build
```

This generates an optimized static HTML/CSS/JS export in `./out` that can be hosted on any static provider (GitHub Pages, Vercel, Cloudflare Pages, Netlify).

---

## 🌐 Deploying to GitHub Pages

### Option A: User Site (`https://ck0201.github.io/`)
1. Create a repository on GitHub named **`ck0201.github.io`**.
2. Link your local repository and push:
   ```bash
   git remote add origin https://github.com/ck0201/ck0201.github.io.git
   git branch -M main
   git push -u origin main
   ```
3. In GitHub: go to **Settings** > **Pages** > **Build and deployment** > Source: **GitHub Actions**.
4. The included `.github/workflows/deploy.yml` workflow will automatically build and deploy the site!

### Option B: Project Site (`https://ck0201.github.io/portfolio/`)
If you prefer naming the repository `portfolio`:
1. In `next.config.ts`, set `basePath: '/portfolio'`.
2. Push to your `portfolio` repository:
   ```bash
   git remote add origin https://github.com/ck0201/portfolio.git
   git branch -M main
   git push -u origin main
   ```
3. Under **Settings** > **Pages**, set source to **GitHub Actions**.
