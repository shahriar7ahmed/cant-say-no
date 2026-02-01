import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import useSound from '../hooks/useSound'

function NoButton({ position, onHover }) {
    const { playEscape } = useSound()
    const [hasMovedOnce, setHasMovedOnce] = useState(false)
    const isMoving = position.x !== 0 || position.y !== 0
    const buttonRef = useRef(null)

    // Continuous movement - once button has moved, keep moving it every 2 seconds
    useEffect(() => {
        if (hasMovedOnce) {
            const interval = setInterval(() => {
                onHover() // Trigger movement
            }, 2000) // Move every 2 seconds

            return () => clearInterval(interval)
        }
    }, [hasMovedOnce, onHover])

    const handleInteraction = (e) => {
        // Prevent any default behavior
        e.preventDefault()

        if (!hasMovedOnce) {
            setHasMovedOnce(true) // Start continuous movement
        }

        playEscape()
        onHover() // Move the button immediately
    }

    // Detect mouse/touch proximity and move button away
    useEffect(() => {
        const handlePointerMove = (e) => {
            if (!buttonRef.current || !hasMovedOnce) return

            const rect = buttonRef.current.getBoundingClientRect()
            const proximityThreshold = 150 // Larger threshold for better escape

            const pointerX = e.clientX || (e.touches && e.touches[0]?.clientX)
            const pointerY = e.clientY || (e.touches && e.touches[0]?.clientY)

            if (!pointerX || !pointerY) return

            const buttonCenterX = rect.left + rect.width / 2
            const buttonCenterY = rect.top + rect.height / 2

            const distance = Math.sqrt(
                Math.pow(pointerX - buttonCenterX, 2) +
                Math.pow(pointerY - buttonCenterY, 2)
            )

            // If pointer is too close, move the button
            if (distance < proximityThreshold) {
                e.preventDefault()
                playEscape()
                onHover()
            }
        }

        window.addEventListener('mousemove', handlePointerMove, { passive: false })
        window.addEventListener('touchmove', handlePointerMove, { passive: false })

        return () => {
            window.removeEventListener('mousemove', handlePointerMove)
            window.removeEventListener('touchmove', handlePointerMove)
        }
    }, [hasMovedOnce, onHover, playEscape])

    return (
        <button
            ref={buttonRef}
            style={{
                position: isMoving ? 'fixed' : 'relative',
                left: isMoving ? `${position.x}px` : 'auto',
                top: isMoving ? `${position.y}px` : 'auto',
                transform: isMoving ? 'translate(-50%, -50%)' : 'none',
                pointerEvents: 'auto', // Always allow pointer events so hover works
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)', // Fast smooth transition
                zIndex: 50,
                touchAction: 'none',
                userSelect: 'none',
            }}
            onMouseEnter={handleInteraction} // Desktop: moves on hover
            onTouchStart={handleInteraction} // Mobile: moves on touch
            onMouseDown={handleInteraction} // Extra safety
            onPointerDown={handleInteraction} // All pointer types
            onClick={(e) => { e.preventDefault(); return false; }} // Prevent actual click
            className="px-12 py-4 text-3xl font-bold text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-full hover:scale-110 transition-all duration-300 shadow-2xl button-glow cursor-pointer select-none"
            aria-label="No button"
        >
            No 😢
        </button>
    )
}

NoButton.propTypes = {
    position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
    }).isRequired,
    onHover: PropTypes.func.isRequired,
}

export default NoButton

