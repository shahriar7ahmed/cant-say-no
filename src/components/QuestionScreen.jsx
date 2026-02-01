import { useState } from 'react'
import PropTypes from 'prop-types'
import FloatingHearts from './FloatingHearts'
import YesButton from './YesButton'
import NoButton from './NoButton'
import CountdownTimer from './CountdownTimer'
import CursorTrail from './CursorTrail'
import useRandomPosition from '../hooks/useRandomPosition'
import { getMessageByAttempt } from '../data/funnyMessages'

function QuestionScreen({ onYesClick, name, setName }) {
    const [escapeCount, setEscapeCount] = useState(0)
    const { position, generateRandomPosition } = useRandomPosition()

    const handleNoHover = () => {
        setEscapeCount(prev => prev + 1)
        generateRandomPosition()
    }

    return (
        <div className="min-h-screen w-full gradient-valentine flex items-center justify-center relative overflow-hidden">
            <FloatingHearts />
            <CursorTrail />

            <div className="text-center z-10 px-4">
                {/* Countdown Timer */}
                <CountdownTimer />

                {/* Name Input */}
                <div className="mb-6">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter their name (optional)"
                        className="px-6 py-3 text-xl text-center rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white placeholder-white/60 focus:outline-none focus:border-white/80 transition-all"
                        maxLength={20}
                    />
                </div>

                <h1 className="text-7xl md:text-8xl font-bold text-white mb-8 text-shadow-glow animate-pulse-slow">
                    {name ? `${name}, will you be my Valentine? 💕` : 'Will you be my Valentine? 💕'}
                </h1>

                {/* Funny message based on escape attempts */}
                {escapeCount > 0 && (
                    <p className="text-2xl md:text-3xl text-white mb-8 animate-bounce font-semibold">
                        {getMessageByAttempt(escapeCount - 1)}
                    </p>
                )}

                {/* Escape counter */}
                {escapeCount > 0 && (
                    <p className="text-lg text-valentine-light mb-8">
                        Escape attempts: {escapeCount} 🏃‍♂️
                    </p>
                )}

                <div className="flex gap-8 justify-center items-center flex-wrap">
                    <YesButton onClick={onYesClick} />
                    <NoButton position={position} onHover={handleNoHover} />
                </div>
            </div>
        </div>
    )
}

QuestionScreen.propTypes = {
    onYesClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    setName: PropTypes.func.isRequired,
}

export default QuestionScreen

