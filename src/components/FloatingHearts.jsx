import { useEffect, useState } from 'react'

function FloatingHearts() {
    const [hearts, setHearts] = useState([])

    useEffect(() => {
        // Generate random hearts
        const heartElements = []
        const heartSymbols = ['💕', '💗', '💖', '💝', '❤️', '💘']

        for (let i = 0; i < 15; i++) {
            heartElements.push({
                id: i,
                symbol: heartSymbols[Math.floor(Math.random() * heartSymbols.length)],
                left: Math.random() * 100, // Random position (0-100%)
                size: 20 + Math.random() * 40, // Random size (20-60px)
                delay: Math.random() * 8, // Random animation delay (0-8s)
                duration: 8 + Math.random() * 4, // Random duration (8-12s)
            })
        }

        setHearts(heartElements)
    }, [])

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {hearts.map((heart) => (
                <div
                    key={heart.id}
                    className="absolute opacity-30"
                    style={{
                        left: `${heart.left}%`,
                        bottom: '-60px',
                        fontSize: `${heart.size}px`,
                        animation: `float-up ${heart.duration}s ease-in infinite`,
                        animationDelay: `${heart.delay}s`,
                    }}
                >
                    {heart.symbol}
                </div>
            ))}
        </div>
    )
}

export default FloatingHearts
