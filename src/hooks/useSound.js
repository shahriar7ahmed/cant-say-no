// Placeholder sound hook for Phase 3
// This will be fully implemented in Phase 3: Sound Integration

import { useCallback } from 'react'

function useSound() {
    const playSound = useCallback((soundName) => {
        // Placeholder - will implement actual sound playing in Phase 3
        console.log(`🔊 Playing sound: ${soundName}`)
    }, [])

    return { playSound }
}

export default useSound
