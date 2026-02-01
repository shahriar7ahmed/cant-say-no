import { useState } from 'react'
import './index.css'

function App() {
  const [showSuccess, setShowSuccess] = useState(false)

  return (
    <div className="min-h-screen w-full gradient-valentine flex items-center justify-center">
      {!showSuccess ? (
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-8 text-shadow-glow animate-pulse-slow">
            💕 Valentine's Day Project 💕
          </h1>
          <p className="text-2xl text-white">
            Project setup complete! Ready for Phase 2.
          </p>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-8 text-shadow-glow">
            🎉 Success! 🎉
          </h1>
        </div>
      )}
    </div>
  )
}

export default App
