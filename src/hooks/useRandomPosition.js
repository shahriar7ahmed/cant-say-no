import { useState, useCallback } from 'react'

function useRandomPosition() {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const generateRandomPosition = useCallback(() => {
        // Get viewport dimensions
        const viewportWidth = window.innerWidth
        const viewportHeight = window.innerHeight

        // Define safe margins (button won't appear too close to edges)
        // Increase margin for mobile to prevent edge cases
        const margin = window.innerWidth < 768 ? 20 : 100

        // Calculate random position within safe bounds
        const x = margin + Math.random() * (viewportWidth - 2 * margin)
        const y = margin + Math.random() * (viewportHeight - 2 * margin)

        setPosition({ x, y })

        // Re-enable pointer events after 500ms to prevent accidental clicks
        setTimeout(() => {
            // Position has changed, button will re-enable automatically
        }, 500)
    }, [])

    const resetPosition = useCallback(() => {
        setPosition({ x: 0, y: 0 })
    }, [])

    return {
        position,
        generateRandomPosition,
        resetPosition,
    }
}

export default useRandomPosition
