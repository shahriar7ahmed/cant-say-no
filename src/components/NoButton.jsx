import PropTypes from 'prop-types'

function NoButton({ position, onHover }) {
    return (
        <button
            onMouseEnter={onHover}
            className="px-16 py-6 text-3xl font-bold text-white bg-red-500 rounded-full 
                 transform transition-all duration-300 ease-out
                 hover:scale-105 hover:bg-red-400 hover:button-glow
                 shadow-2xl cursor-pointer"
            style={{
                position: position ? 'fixed' : 'relative',
                left: position ? `${position.x}px` : 'auto',
                top: position ? `${position.y}px` : 'auto',
                transform: position ? 'translate(-50%, -50%)' : 'none',
            }}
        >
            No 😢
        </button>
    )
}

NoButton.propTypes = {
    position: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
    }),
    onHover: PropTypes.func.isRequired,
}

export default NoButton
