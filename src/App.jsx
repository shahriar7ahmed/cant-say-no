import { useState } from 'react'
import QuestionScreen from './components/QuestionScreen'
import SuccessScreen from './components/SuccessScreen'
import './index.css'

function App() {
  const [showSuccess, setShowSuccess] = useState(false)

  const handleYesClick = () => {
    setShowSuccess(true)
  }

  return (
    <div className="min-h-screen w-full">
      <div className={`transition-opacity duration-1000 ${showSuccess ? 'opacity-0 pointer-events-none absolute' : 'opacity-100'}`}>
        <QuestionScreen onYesClick={handleYesClick} />
      </div>
      <div className={`transition-opacity duration-1000 ${showSuccess ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {showSuccess && <SuccessScreen />}
      </div>
    </div>
  )
}

export default App



