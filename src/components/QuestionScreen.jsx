import PropTypes from 'prop-types'

function QuestionScreen({ onYesClick }) {
    return (
        <div className="min-h-screen w-full gradient-valentine flex items-center justify-center relative overflow-hidden">
            <div className="text-center z-10 px-4">
                <h1 className="text-7xl md:text-8xl font-bold text-white mb-16 text-shadow-glow animate-pulse-slow">
                    Will you be my Valentine? 💕
                </h1>

                <div className="flex gap-8 justify-center items-center flex-wrap">
                    {/* Buttons will be added here */}
                    <button className="px-12 py-4 text-2xl font-bold text-white bg-green-500 rounded-full">
                        Yes! 💗
                    </button>
                    <button className="px-12 py-4 text-2xl font-bold text-white bg-red-500 rounded-full">
                        No 😢
                    </button>
                </div>
            </div>
        </div>
    )
}

QuestionScreen.propTypes = {
    onYesClick: PropTypes.func.isRequired,
}

export default QuestionScreen
