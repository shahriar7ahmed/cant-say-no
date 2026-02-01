import { useState } from 'react'
import PropTypes from 'prop-types'

function ShareButton({ name }) {
    const [showToast, setShowToast] = useState(false)

    const handleShare = async () => {
        const shareText = name
            ? `${name} said YES! 💕 Will you be my Valentine?`
            : "They said YES! 💕 Will you be my Valentine?"

        const shareUrl = window.location.href

        // Try Web Share API first
        if (navigator.share) {
            try {
                await navigator.share({
                    title: "Valentine's Day 💕",
                    text: shareText,
                    url: shareUrl,
                })
            } catch (err) {
                if (err.name !== 'AbortError') {
                    copyToClipboard(shareUrl)
                }
            }
        } else {
            // Fallback to copy
            copyToClipboard(shareUrl)
        }
    }

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            setShowToast(true)
            setTimeout(() => setShowToast(false), 3000)
        })
    }

    return (
        <>
            <button
                onClick={handleShare}
                className="pointer-events-auto px-8 py-4 text-xl font-bold text-white bg-pink-500/80 backdrop-blur-sm rounded-full hover:scale-110 transition-all duration-300 hover:bg-pink-400 shadow-2xl mt-8"
            >
                Share the Love 💕
            </button>

            {showToast && (
                <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full text-pink-600 font-semibold shadow-2xl animate-bounce">
                    Link copied! 📋
                </div>
            )}
        </>
    )
}

ShareButton.propTypes = {
    name: PropTypes.string,
}

export default ShareButton
