import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import useSound from '../hooks/useSound'

function NoButton({ position, onHover }) {
    const { playEscape } = useSound()
    const [isClickable, setIsClickable] = useState(true)
    const [hasMovedOnce, setHasMovedOnce] = useState(false)
    const isMoving = position.x !== 0 || position.y !== 0
    const buttonRef = useRef(null)

    // Disable clicks when button is moving and for 500ms after
    useEffect(() => {
        if (isMoving) {
            setIsClickable(false)
            const timer = setTimeout(() => {
                setIsClickable(true)
            }, 500) // 500ms cooldown before button becomes clickable again
            return () => clearTimeout(timer)
        }
    }, [isMoving, position.x, position.y])

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
        // Prevent default and stop propagation to avoid any chance of click
        e.preventDefault()
        e.stopPropagation()

        if (!hasMovedOnce) {
            setHasMovedOnce(true) // Start continuous movement
        }

        playEscape()
        onHover()
    }

    // Detect mouse/touch proximity and move button away
    useEffect(() => {
        const handlePointerMove = (e) => {
            if (!buttonRef.current || !hasMovedOnce) return

            const rect = buttonRef.current.getBoundingClientRect()
            const proximityThreshold = 100 // pixels

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
            if (distance < proximityThreshold && isClickable) {
                handleInteraction(e)
            }
        }

        window.addEventListener('mousemove', handlePointerMove)
        window.addEventListener('touchmove', handlePointerMove)

        return () => {
            window.removeEventListener('mousemove', handlePointerMove)
            window.removeEventListener('touchmove', handlePointerMove)
        }
    }, [hasMovedOnce, isClickable])

    return (
        <button
            ref={buttonRef}
            style={{
                position: isMoving ? 'fixed' : 'relative',
                left: isMoving ? `${position.x}px` : 'auto',
                top: isMoving ? `${position.y}px` : 'auto',
                transform: isMoving ? 'translate(-50%, -50%)' : 'none',
                pointerEvents: isClickable && !isMoving ? 'auto' : 'none', // Disable during move and cooldown
                transition: 'all 0.3s ease-out',
                zIndex: 50,
            }}
            onMouseEnter={handleInteraction}
            onTouchStart={handleInteraction} // Mobile touch
            onMouseDown={handleInteraction} // Desktop mouse down
            onPointerDown={handleInteraction} // All pointer events
            onClick={(e) => e.preventDefault()} // Extra safety to prevent any clicks
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

