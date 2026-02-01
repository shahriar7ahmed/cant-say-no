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
      {!showSuccess ? (
        <QuestionScreen onYesClick={handleYesClick} />
      ) : (
        <SuccessScreen />
      )}
    </div>
  )
}

export default App


