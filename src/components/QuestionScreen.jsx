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

            <div className="text-center z-10 px-4 max-w-4xl mx-auto">
                {/* Countdown Timer */}
                <div className="mb-8">
                    <CountdownTimer />
                </div>

                {/* Name Input */}
                <div className="mb-10">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter their name (optional)"
                        className="w-full max-w-md px-8 py-4 text-lg text-center rounded-full bg-white/15 backdrop-blur-md border-2 border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 transition-all shadow-lg hover:bg-white/20"
                        maxLength={20}
                    />
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 text-shadow-glow leading-tight px-4">
                    {name ? `${name}, will you be my Valentine? 💕` : 'Will you be my Valentine? 💕'}
                </h1>

                {/* Funny message based on escape attempts */}
                {escapeCount > 0 && (
                    <div className="mb-8 space-y-3">
                        <p className="text-xl md:text-2xl font-semibold text-white animate-bounce">
                            {getMessageByAttempt(escapeCount - 1)}
                        </p>
                        <p className="text-base text-valentine-light font-medium bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 inline-block">
                            Escape attempts: {escapeCount} 🏃‍♂️
                        </p>
                    </div>
                )}

                <div className="flex gap-6 justify-center items-center flex-wrap mt-12">
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

