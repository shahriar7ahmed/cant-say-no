// Collection of funny messages that appear when user tries to click "No"
export const funnyMessages = [
    "Are you sure? 🥺",
    "Think about it... 💭",
    "Really? No? 😢",
    "You can't escape love! 💕",
    "Why you running? 🏃",
    "Come on, just say yes! 😊",
    "Pretty please? 🙏",
    "I'll wait... ⏰",
    "You know you want to! 😏",
    "Just say yes already! 😭",
    "Don't be shy! 💖",
    "I believe in us! ✨",
    "Give love a chance! 💘",
    "You're making this harder! 😅",
    "The answer is YES! ✅",
]

export const getMessageByAttempt = (attemptCount) => {
    if (attemptCount >= funnyMessages.length) {
        return funnyMessages[funnyMessages.length - 1]
    }
    return funnyMessages[attemptCount]
}
