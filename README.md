# React + Three.js Tailwind UI testing application 1

A WebGL demo built with the following tech stack combination.

- React for UI and interaction design
- Vite for web building
- Three.js for 3D content rendering in WebGL
- React Three Fiber for the syntax sugar bridge between React and Three.js
- React Three Drei for utility of React Three Fiber
- Leva UI panel for Three.js UI
- TailwindCSS for styling
- Bun for dependencies installation and running

The application loads a GLB model and a draggable decal projector with gizmo.

---

# Push to GitHub repository

git init
git add .
git commit -m "The Nth commit on date."
git remote rm origin
git branch -M main
git remote add origin git@github.com:robin-artemstein/react-threejs-tailwind-ui-1.git
git push -u -f origin main

# Installation

Install Bun first

https://bun.sh

Then install dependencies:

```bash
bun install
bun dev
```

# Project Structure
```
react-threejs-tailwind-ui-1
├── public/
├── src/
│   ├── components/
│   │   ├── Scene.jsx           # R3F Canvas + lighting + sphere
│   │   ├── WireframeSphere.jsx # The wireframe sphere mesh
│   │   └── ControlPanel.jsx    # Floating UI panel (right side)
│   ├── App.jsx                 # Root component, wires everything together
│   ├── main.jsx                # Entry point
│   └── index.css               # Tailwind directives + background color
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```
