import { useState } from 'react'
import QuestionScreen from './components/QuestionScreen'
import './index.css'

function App() {
  const [showSuccess, setShowSuccess] = useState(false)

  const handleYesClick = () => {
    setShowSuccess(true)
  }

  return (
    <div className="min-h-screen w-full">
      {!showSuccess ? (
        <QuestionScreen onYesClick={handleYesClick} />
      ) : (
        <div className="min-h-screen w-full gradient-success flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-8 text-shadow-glow">
              🎉 Yay! 🎉
            </h1>
            <p className="text-2xl text-white">I knew you'd say yes! 💕</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

