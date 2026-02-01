import { useCallback, useEffect } from 'react'
import soundManager from '../utils/soundManager'

function useSound() {
    // Initialize sound system on mount
    useEffect(() => {
        // Initialize on first user interaction
        const initSound = () => {
            soundManager.init()
            // Remove listener after first interaction
            document.removeEventListener('click', initSound)
            document.removeEventListener('touchstart', initSound)
        }

        document.addEventListener('click', initSound)
        document.addEventListener('touchstart', initSound)

        return () => {
            document.removeEventListener('click', initSound)
            document.removeEventListener('touchstart', initSound)
        }
    }, [])

    const playHover = useCallback(() => {
        soundManager.playHover()
    }, [])

    const playEscape = useCallback(() => {
        soundManager.playEscape()
    }, [])

    const playCelebration = useCallback(() => {
        soundManager.playCelebration()
    }, [])

    return {
        playHover,
        playEscape,
        playCelebration,
    }
}

export default useSound
