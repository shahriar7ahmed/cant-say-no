import { useState, useEffect } from 'react'
import soundManager from '../utils/soundManager'

function MusicToggle() {
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        // Check localStorage
        const savedPreference = localStorage.getItem('backgroundMusic')
        if (savedPreference === 'true') {
            setIsPlaying(true)
            soundManager.playBackgroundMusic()
        }
    }, [])

    const toggleMusic = () => {
        if (isPlaying) {
            soundManager.stopBackgroundMusic()
            setIsPlaying(false)
            localStorage.setItem('backgroundMusic', 'false')
        } else {
            soundManager.init() // Ensure initialized
            soundManager.playBackgroundMusic()
            setIsPlaying(true)
            localStorage.setItem('backgroundMusic', 'true')
        }
    }

    return (
        <button
            onClick={toggleMusic}
            className="fixed top-4 right-4 z-50 w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center text-3xl hover:scale-110 transition-transform duration-300 hover:bg-white/30"
            aria-label="Toggle background music"
        >
            {isPlaying ? '🔊' : '🔇'}
        </button>
    )
}

export default MusicToggle
