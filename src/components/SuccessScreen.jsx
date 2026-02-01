import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import HeartParticles from './HeartParticles'
import Confetti from './Confetti'

function SuccessScreen() {
    return (
        <div className="min-h-screen w-full gradient-success relative overflow-hidden">
            {/* Three.js Canvas for 3D animation */}
            <Canvas
                camera={{ position: [0, 0, 10], fov: 75 }}
                className="absolute inset-0"
            >
                {/* Lighting */}
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff1493" />

                {/* 3D Heart Particles */}
                <HeartParticles />

                {/* Confetti */}
                <Confetti />

                {/* Optional: Allow user to rotate view */}
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>

            {/* Success Message Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="text-center">
                    <h1 className="text-8xl md:text-9xl font-bold text-white mb-8 text-shadow-glow animate-bounce">
                        🎉 Yay! 🎉
                    </h1>
                    <p className="text-4xl md:text-5xl text-white mb-4 animate-pulse-slow">
                        I knew you'd say yes! 💕
                    </p>
                    <p className="text-2xl md:text-3xl text-valentine-light">
                        Happy Valentine's Day! 💖
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SuccessScreen
