import { useState, useCallback } from 'react'

function useRandomPosition() {
    const [position, setPosition] = useState(null)

    const generateRandomPosition = useCallback(() => {
        // Get viewport dimensions
        const viewportWidth = window.innerWidth
        const viewportHeight = window.innerHeight

        // Define safe margins (button won't appear too close to edges)
        const margin = 100

        // Calculate random position within safe bounds
        const x = margin + Math.random() * (viewportWidth - 2 * margin)
        const y = margin + Math.random() * (viewportHeight - 2 * margin)

        setPosition({ x, y })
    }, [])

    const resetPosition = useCallback(() => {
        setPosition(null)
    }, [])

    return {
        position,
        generateRandomPosition,
        resetPosition,
    }
}

export default useRandomPosition
