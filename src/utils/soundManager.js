// Sound Manager for handling all audio interactions
// Uses Web Audio API to generate sounds programmatically

class SoundManager {
    constructor() {
        this.audioContext = null
        this.sounds = {}
        this.initialized = false
    }

    // Initialize audio context (must be called after user interaction)
    init() {
        if (this.initialized) return

        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)()
            this.initialized = true
            console.log('🔊 Sound system initialized')
        } catch (error) {
            console.error('Failed to initialize audio context:', error)
        }
    }

    // Generate a simple beep sound with the Web Audio API
    playBeep(frequency = 440, duration = 0.1, volume = 0.3) {
        if (!this.initialized || !this.audioContext) {
            this.init()
            if (!this.initialized) return
        }

        const oscillator = this.audioContext.createOscillator()
        const gainNode = this.audioContext.createGain()

        oscillator.connect(gainNode)
        gainNode.connect(this.audioContext.destination)

        oscillator.frequency.value = frequency
        oscillator.type = 'sine'

        gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration)

        oscillator.start(this.audioContext.currentTime)
        oscillator.stop(this.audioContext.currentTime + duration)
    }

    // Play hover sound (gentle, high-pitched beep)
    playHover() {
        this.playBeep(800, 0.05, 0.2)
    }

    // Play escape sound (playful descending tone)
    playEscape() {
        if (!this.initialized || !this.audioContext) {
            this.init()
            if (!this.initialized) return
        }

        const oscillator = this.audioContext.createOscillator()
        const gainNode = this.audioContext.createGain()

        oscillator.connect(gainNode)
        gainNode.connect(this.audioContext.destination)

        // Descending frequency for "escape" effect
        oscillator.frequency.setValueAtTime(600, this.audioContext.currentTime)
        oscillator.frequency.exponentialRampToValueAtTime(300, this.audioContext.currentTime + 0.15)
        oscillator.type = 'triangle'

        gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.15)

        oscillator.start(this.audioContext.currentTime)
        oscillator.stop(this.audioContext.currentTime + 0.15)
    }

    // Play celebration sound (cheerful ascending melody)
    playCelebration() {
        if (!this.initialized || !this.audioContext) {
            this.init()
            if (!this.initialized) return
        }

        const notes = [523.25, 659.25, 783.99, 1046.50] // C5, E5, G5, C6
        const noteDuration = 0.15

        notes.forEach((frequency, index) => {
            setTimeout(() => {
                this.playBeep(frequency, noteDuration, 0.3)
            }, index * noteDuration * 1000)
        })
    }

    // Load external sound file (for future use if you want to add custom sounds)
    async loadSound(name, url) {
        if (!this.initialized) this.init()
        if (!this.audioContext) return

        try {
            const response = await fetch(url)
            const arrayBuffer = await response.arrayBuffer()
            const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer)
            this.sounds[name] = audioBuffer
            console.log(`🔊 Loaded sound: ${name}`)
        } catch (error) {
            console.error(`Failed to load sound ${name}:`, error)
        }
    }

    // Play loaded sound
    playLoadedSound(name, volume = 0.5) {
        if (!this.initialized || !this.audioContext || !this.sounds[name]) {
            console.warn(`Sound ${name} not loaded`)
            return
        }

        const source = this.audioContext.createBufferSource()
        const gainNode = this.audioContext.createGain()

        source.buffer = this.sounds[name]
        source.connect(gainNode)
        gainNode.connect(this.audioContext.destination)
        gainNode.gain.value = volume

        source.start(0)
    }

    // Background music
    playBackgroundMusic() {
        if (!this.initialized || !this.audioContext) {
            this.init()
            if (!this.initialized) return
        }

        if (this.backgroundMusicNode) return // Already playing

        // Create oscillators for a simple romantic melody loop
        this.backgroundMusicNode = this.audioContext.createGain()
        this.backgroundMusicNode.connect(this.audioContext.destination)
        this.backgroundMusicNode.gain.value = 0.1

        const playMelody = () => {
            const notes = [523.25, 659.25, 783.99, 659.25] // C5, E5, G5, E5
            const duration = 0.5

            notes.forEach((frequency, index) => {
                const osc = this.audioContext.createOscillator()
                const gainNode = this.audioContext.createGain()

                osc.connect(gainNode)
                gainNode.connect(this.backgroundMusicNode)

                osc.frequency.value = frequency
                osc.type = 'sine'

                const startTime = this.audioContext.currentTime + index * duration
                gainNode.gain.setValueAtTime(0.1, startTime)
                gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration)

                osc.start(startTime)
                osc.stop(startTime + duration)
            })
        }

        // Loop the melody
        playMelody()
        this.backgroundMusicInterval = setInterval(playMelody, 2000)
    }

    stopBackgroundMusic() {
        if (this.backgroundMusicInterval) {
            clearInterval(this.backgroundMusicInterval)
            this.backgroundMusicInterval = null
        }
        if (this.backgroundMusicNode) {
            this.backgroundMusicNode.disconnect()
            this.backgroundMusicNode = null
        }
    }
}

// Create singleton instance
const soundManager = new SoundManager()

export default soundManager

