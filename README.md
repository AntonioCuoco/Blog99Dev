# 99Dev Blog

A modern, high-performance developer blog built with **Next.js**, **Contentlayer**, and **TailwindCSS**.  
Designed to share knowledge with a clean, responsive, and SEO-optimized interface.

**Live Site:** [https://99dev.net](https:99dev.netlify.app)

## Features

- 🚀 **Next.js 13+** (App Router) for superior performance and routing.
- 📝 **Contentlayer** for managing MDX content with type safety.
- 🎨 **TailwindCSS** & **Ant Design** for rapid and consistent styling.
- 🌙 **Dark/Light Mode** support.
- 🔍 **SEO Optimized** with sitemaps, semantic HTML, and metadata.
- ⏱️ **Reading Time** estimation and auto-generated Table of Contents.
- 💅 **Syntax Highlighting** for code blocks via `rehype-pretty-code`.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Ant Design](https://ant.design/)
- **Content:** [Contentlayer](https://contentlayer.dev/) (MDX)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Utilities:** `date-fns`, `reading-time`, `github-slugger`

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18 or newer recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd blog99dev
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running Locally

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

To create a production build:

```bash
npm run build
```

## Project Structure

- `/src/app`: App Router pages and layouts.
- `/src/components`: Reusable UI components for the blog and interface.
- `/content`: MDX files for blog posts (configured in `contentlayer.config.js`).
- `/public`: Static assets like images and fonts.

---

Created by [99Dev](https://99dev.net).
