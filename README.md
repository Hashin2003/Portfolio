# Portfolio — Hashin Gayasha Maharambage

Personal engineering portfolio site for Hashin Gayasha Maharambage, a Mechatronics Engineering student at Curtin University Colombo. Showcases work-related, university, and personal projects spanning embedded systems, PLC/industrial automation, robotics, and mechanical design.

A static site — no build step, no framework, no dependencies. Just HTML, CSS, and vanilla JavaScript.

## Structure

| File / Folder | Purpose |
|---|---|
| `index.html` | Page markup — hero, about, experience, project grid, skills, education, achievements, contact/footer. |
| `styles.css` | All styling, including light/dark theme tokens and responsive breakpoints. |
| `script.js` | Theme toggle, mobile nav, project filtering, and the modal system (builds each project's case-study modal on demand from `projects-data.js`). |
| `projects-data.js` | Content for every project's modal — title, type, year, tech stack, repo link, media (image gallery / video / PDF), and the write-up body. Kept separate from `index.html` so the DOM stays small and adding/editing a project doesn't touch markup. |
| `Projects/` | Source images, videos, and documents referenced by `projects-data.js` (organized into one subfolder per project). |
| `resume.pdf` | Downloadable résumé, linked from the hero and footer. |
| `563A6831.JPG` | Hero portrait. |

## Features

- Light/dark theme toggle (persisted via `localStorage`).
- Filterable project grid (Work-Related / University / Personal) plus a small featured row for flagship projects.
- Each project opens a modal case study built on demand, supporting an image gallery, an embedded video (local file, YouTube, or an external link-out for large/unhosted files), and an inline read-only PDF viewer.
- Fully responsive, down to a full-screen mobile modal layout.

## Running locally

No build step required — just serve the folder statically, e.g.:

```
python -m http.server 8000
```

then open `http://localhost:8000`.

## Editing content

Project case studies live entirely in `projects-data.js`, keyed by the modal id referenced from each project card's `data-modal` attribute in `index.html`. To add a new project: add a card in `index.html` and a matching entry in `projects-data.js` (see existing entries for the expected shape of `tech`, `repo`, `media`, and `body`).
