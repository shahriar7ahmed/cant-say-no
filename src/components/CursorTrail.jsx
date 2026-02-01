import { useState, useEffect } from 'react'

function CursorTrail() {
    const [particles, setParticles] = useState([])

    useEffect(() => {
        let particleId = 0

        const handleMouseMove = (e) => {
            const newParticle = {
                id: particleId++,
                x: e.clientX,
                y: e.clientY,
                opacity: 1,
            }

            setParticles((prev) => [...prev, newParticle])

            // Remove particle after animation
            setTimeout(() => {
                setParticles((prev) => prev.filter((p) => p.id !== newParticle.id))
            }, 1000)
        }

        // Throttle mousemove for performance
        let timeout
        const throttledMouseMove = (e) => {
            if (!timeout) {
                timeout = setTimeout(() => {
                    handleMouseMove(e)
                    timeout = null
                }, 50)
            }
        }

        window.addEventListener('mousemove', throttledMouseMove)
        return () => {
            window.removeEventListener('mousemove', throttledMouseMove)
            if (timeout) clearTimeout(timeout)
        }
    }, [])

    return (
        <div className="fixed inset-0 pointer-events-none z-40">
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="absolute text-2xl animate-fade-up"
                    style={{
                        left: particle.x,
                        top: particle.y,
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    💕
                </div>
            ))}
        </div>
    )
}

export default CursorTrail
