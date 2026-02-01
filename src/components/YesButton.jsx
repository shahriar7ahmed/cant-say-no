import PropTypes from 'prop-types'

function YesButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="px-16 py-6 text-3xl font-bold text-white bg-green-500 rounded-full 
                 transform transition-all duration-300 ease-out
                 hover:scale-110 hover:bg-green-400 hover:button-glow-green
                 active:scale-95
                 shadow-2xl"
        >
            Yes! 💗
        </button>
    )
}

YesButton.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default YesButton
