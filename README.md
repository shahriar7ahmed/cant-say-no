# 💕 Valentine's Day "Can't Say No" Web App

A playful and romantic Valentine's Day proposal page built with React, Tailwind CSS, and Three.js. Features an elusive "No" button that escapes on hover, beautiful 3D animations, sound effects, and funny messages!

## ✨ Features

- 💝 **Interactive Question Screen** - "Will you be my Valentine?" with animated text
- 🏃 **Elusive "No" Button** - Escapes to random positions when you try to hover
- ✅ **Clickable "Yes" Button** - Triggers beautiful 3D celebration animation
- 🎨 **Vibrant Theme** - Pink, red, and purple gradient backgrounds
- 🎵 **Sound Effects** - Programmatic sounds for hover, escape, and celebration
- ✨ **Three.js Animation** - 100 heart particles + 200 confetti pieces in 3D
- 😂 **Funny Messages** - 15 progressively funnier messages as escape attempts increase
- 📊 **Escape Counter** - Tracks how many times they tried to say "No"
- 💕 **Floating Hearts** - Romantic background animation
- 📱 **Responsive Design** - Works on all screen sizes

## 🎯 Tech Stack

- **React 18** - UI framework
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first styling with custom Valentine's theme
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful Three.js helpers
- **Web Audio API** - Programmatic sound generation

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
cant-say-no/
├── src/
│   ├── components/
│   │   ├── QuestionScreen.jsx    # Main question page
│   │   ├── SuccessScreen.jsx     # 3D celebration page
│   │   ├── YesButton.jsx         # Green "Yes" button
│   │   ├── NoButton.jsx          # Red escapable "No" button
│   │   ├── FloatingHearts.jsx    # Background hearts animation
│   │   ├── HeartParticles.jsx    # 3D heart particles (Three.js)
│   │   └── Confetti.jsx          # 3D confetti system (Three.js)
│   ├── hooks/
│   │   ├── useRandomPosition.js  # Random position calculator
│   │   └── useSound.js           # Sound effect manager
│   ├── utils/
│   │   └── soundManager.js       # Web Audio API sound system
│   ├── data/
│   │   └── funnyMessages.js      # Array of funny messages
│   ├── App.jsx                   # Main app with screen transitions
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles & Tailwind
├── public/
│   └── sounds/                   # Sound files (using Web Audio API instead)
└── tailwind.config.js            # Tailwind configuration

## 🎨 Custom Color Palette

- **valentine-pink**: #FF1493 (Deep Pink)
- **valentine-red**: #FF0066 (Valentine Red)
- **valentine-purple**: #E91E63 (Valentine Purple)
- **valentine-light**: #FFB3D9 (Light Pink)
- **valentine-dark**: #C2185B (Dark Pink)

## 🎭 Custom Animations

- `float` - Floating effect for hearts (3s)
- `pulse-slow` - Slow pulse effect (3s)
- `wiggle` - Shake/wiggle animation (0.5s)
- `bounce-slow` - Gentle bounce (2s)
- `float-up` - Hearts floating up animation (8s)

## ✅ Development Progress

### Phase 1: Project Setup ✅
- React + Vite project initialized
- Tailwind CSS configured with Valentine's color palette
- Three.js and React Three Fiber installed
- Project folder structure created

### Phase 2: Core UI Components ✅
- Question screen with vibrant gradient
- Animated question text with glow effects
- Floating hearts background
- Yes button with hover animations
- No button with escape behavior
- Random position hook
- Escape counter and funny messages

### Phase 3: Sound Integration ✅
- Sound manager using Web Audio API
- Programmatic sound generation
- Hover sound (800Hz beep)
- Escape sound (descending tone)
- Celebration melody (C5→E5→G5→C6)

### Phase 4: Three.js Success Animation ✅
- React Three Fiber canvas
- 100 animated 3D heart particles
- 200 falling confetti particles
- Dynamic lighting setup
- Auto-rotating camera
- Smooth particle physics

### Phase 5: Polish & Fun Elements ✅
- Responsive design verified
- Smooth fade transitions between screens
- All features tested and working
- README documentation complete

## 🎮 How It Works

1. **Question Screen**: User sees "Will you be my Valentine?" with Yes/No buttons
2. **Hover "No"**: The No button escapes to a random position, plays escape sound
3. **Counter Updates**: Escape attempts are counted and funny messages appear
4. **Click "Yes"**: Celebration sound plays, smooth transition to success screen
5. **3D Celebration**: Beautiful Three.js animation with hearts and confetti
6. **Success Message**: "I knew you'd say yes!" with animated text

## 🔊 Sound System

All sounds are generated programmatically using Web Audio API (no external files needed):
- **Hover Sound**: Gentle 800Hz sine wave beep
- **Escape Sound**: Descending tone (600→300Hz triangle wave)
- **Celebration**: Ascending melody with 4 notes

## 💡 Fun Details

- 15 different funny messages that get more desperate
- Escape counter shows "🏃‍♂️" emoji
- No button is impossible to click (moves before click registers)
- Success screen has auto-rotating 3D view
- Hearts and confetti continuously regenerate
- All animations optimized for smooth 60fps

## 🚀 Deployment to Vercel

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/cant-say-no)

### Manual Deployment Steps

1. **Push to GitHub** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Valentine's Day app"
   git branch -M main
   git remote add origin https://github.com/yourusername/cant-say-no.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"

3. **Environment Variables** (Optional):
   - No environment variables needed for this app!

4. **Custom Domain** (Optional):
   - Go to your project settings in Vercel
   - Navigate to "Domains"
   - Add your custom domain

### Deployment Configuration

The project includes `vercel.json` for optimal configuration:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "devCommand": "npm run dev"
}
```

### Post-Deployment

After deployment, your app will be live at: `https://your-project-name.vercel.app`

**Test all features:**
- ✅ Custom name input
- ✅ Background music toggle
- ✅ Countdown timer
- ✅ Cursor heart trails
- ✅ No button escape behavior
- ✅ Yes button celebration with 3D animation
- ✅ Share button functionality

---

## 🎉 Credits

Made with ❤️ for Valentine's Day 2026

---

**Try it out and share the love!** 💕✨

