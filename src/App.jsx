import { useState } from 'react'
import QuestionScreen from './components/QuestionScreen'
import SuccessScreen from './components/SuccessScreen'
import MusicToggle from './components/MusicToggle'
import './index.css'

function App() {
  const [showSuccess, setShowSuccess] = useState(false)
  const [name, setName] = useState('')

  const handleYesClick = () => {
    setShowSuccess(true)
  }

  return (
    <div className="min-h-screen w-full">
      {/* Music Toggle Button */}
      <MusicToggle />

      <div className={`transition-opacity duration-1000 ${showSuccess ? 'opacity-0 pointer-events-none absolute' : 'opacity-100'}`}>
        <QuestionScreen onYesClick={handleYesClick} name={name} setName={setName} />
      </div>
      <div className={`transition-opacity duration-1000 ${showSuccess ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {showSuccess && <SuccessScreen name={name} />}
      </div>
    </div>
  )
}

export default App





