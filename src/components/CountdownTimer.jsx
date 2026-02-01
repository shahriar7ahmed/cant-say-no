import { useState, useEffect } from 'react'

function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({})
    const [showTimer, setShowTimer] = useState(true)

    useEffect(() => {
        const targetDate = new Date('February 14, 2026 00:00:00').getTime()

        const updateCountdown = () => {
            const now = new Date().getTime()
            const distance = targetDate - now

            if (distance < 0) {
                setShowTimer(false)
                return
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            })
        }

        updateCountdown()
        const interval = setInterval(updateCountdown, 1000)

        return () => clearInterval(interval)
    }, [])

    if (!showTimer) return null

    return (
        <div className="mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border-2 border-white/30 inline-block">
            <p className="text-white text-lg font-semibold">
                💝 Valentine's Day in: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </p>
        </div>
    )
}

export default CountdownTimer
