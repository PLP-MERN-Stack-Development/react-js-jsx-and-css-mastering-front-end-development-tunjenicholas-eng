# React + JSX + Tailwind (Week 3 Project)

This repository is a small React application built with Vite that demonstrates component architecture, hooks, routing, Tailwind CSS styling, a theme switcher, and a simple Task Manager with localStorage persistence.

The app was created as part of the "Week 3: React.js, JSX, and Tailwind CSS – Mastering Front-End Development" assignment.

## Key features

- Task Manager: add, toggle, delete tasks and filter by All / Active / Completed
- Theme switcher: light and dark themes using Tailwind's dark mode and a React context
- Routing: two pages (Home and Posts) using React Router
- Persistent tasks: tasks are saved to localStorage via a custom hook
- Reusable components: Button, Card, Navbar, Footer and more

## Tech stack

- React 19
- Vite (dev server + build)
- Tailwind CSS
- React Router
- ESLint for linting

## Quick start (Windows / PowerShell)

Prerequisites: Node.js (v18+ recommended) and npm

Install dependencies:

```powershell
npm install
```

Start development server:

```powershell
npm run dev
```

Build for production:

```powershell
npm run build
```

Preview production build locally:

```powershell
npm run preview
```

Run linting:

```powershell
npm run lint
```

## Project structure (important files)

src/
- index.css                # Tailwind + global styles
- main.jsx                 # App entry: Router + ThemeProvider
- assets/                  # static assets
- components/              # UI components (Button, Card, Navbar, Footer, TaskManager, ThemeSwitcher)
- contexts/                # ThemeContext.jsx
- hooks/                   # useLocalStorageTasks.js (custom hook for tasks)
- layouts/                 # MainLayout.jsx (wraps pages with Navbar/Footer)
- pages/                   # HomePage.jsx, PostsPage.jsx

Other files:
- package.json             # scripts & dependencies
- Week3-Assignment.md      # assignment instructions and checklist

## Important components / modules

- `TaskManager.jsx` — main task UI, uses `useLocalStorageTasks` to persist tasks
- `useLocalStorageTasks.js` — custom hook exposing { tasks, addTask, toggleTask, deleteTask }
- `ThemeContext.jsx` — provides theme state + toggleTheme and applies the `dark` class to <html>
- `MainLayout.jsx` — contains `Navbar` and `Footer` and renders route children

## Scripts

The most-used npm scripts (from `package.json`):

- `npm run dev` — start Vite dev server
- `npm run build` — build production bundle
- `npm run preview` — preview production build
- `npm run lint` — run ESLint across the project

## Notes & development tips

- Theme persistence: the `ThemeContext` saves the user's theme choice to `localStorage` and toggles Tailwind's `dark` class on the root element.
- Tasks persistence: tasks are stored under the `tasks` key in `localStorage`. Clearing storage will remove saved tasks.
- The `Week3-Assignment.md` file contains the original assignment requirements and helpful checklist items for submission.
- Add screenshots and deployment URL to this README before submitting the assignment.

## Contributing / Submission

This repo is a course assignment. To submit:

1. Ensure commits are pushed to your repository
2. Add screenshots and the deployed URL (Netlify / Vercel / GitHub Pages) to this README
3. Follow the submission instructions in `Week3-Assignment.md`

## License

No license specified. Add a LICENSE file if you wish to publish this project.

---

If you'd like, I can also:

- add a screenshot placeholder and example screenshot files,
- add a short CONTRIBUTING.md or deployment instructions for Vercel/Netlify,
- or run a quick lint check and report results.
