# 💕 Valentine's Day "Can't Say No" Web App

A playful and romantic Valentine's Day proposal page built with React, Tailwind CSS, and Three.js.

## Features

- 💝 Interactive "Will you be my Valentine?" question
- 🏃 Elusive "No" button that escapes on hover
- ✅ Clickable "Yes" button that triggers celebration
- 🎨 Vibrant pink, red, and purple gradient theme
- 🎵 Fun sound effects for interactions
- ✨ Stunning Three.js heart particle animation on success
- 😂 Funny messages that appear when trying to click "No"

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling with custom Valentine's theme
- **Three.js** - 3D animations
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful Three.js helpers

## Getting Started

```bash
# Install dependencies (already done)
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
cant-say-no/
├── src/
│   ├── components/     # React components
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Utility functions
│   ├── data/           # Static data (funny messages, etc.)
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles & Tailwind
├── public/
│   └── sounds/         # Sound effect files
└── tailwind.config.js  # Tailwind configuration
```

## Development Progress

### ✅ Phase 1: Project Setup (Complete)
- React + Vite project initialized
- Tailwind CSS configured with Valentine's color palette
- Three.js and React Three Fiber installed
- Project folder structure created

### 🔄 Phase 2: Core UI Components (Next)
- Question screen with buttons
- Escapable "No" button logic
- Celebration trigger

### 📋 Upcoming Phases
- Phase 3: Sound Integration
- Phase 4: Three.js Success Animation
- Phase 5: Polish & Fun Elements

## Color Palette

- `valentine-pink`: #FF1493
- `valentine-red`: #FF0066
- `valentine-purple`: #E91E63
- `valentine-light`: #FFB3D9
- `valentine-dark`: #C2185B

## Custom Animations

- `float` - Floating effect for hearts
- `pulse-slow` - Slow pulse effect
- `wiggle` - Shake/wiggle animation
- `bounce-slow` - Gentle bounce

---

Made with ❤️ for Valentine's Day 2026
