import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Confetti() {
    const confettiRef = useRef()
    const count = 200

    // Create confetti particles
    const confetti = useMemo(() => {
        const positions = new Float32Array(count * 3)
        const colors = new Float32Array(count * 3)
        const velocities = new Float32Array(count * 3)
        const rotations = new Float32Array(count)

        // Vibrant confetti colors
        const colorPalette = [
            new THREE.Color('#FF1493'),
            new THREE.Color('#FFD700'),
            new THREE.Color('#00FFFF'),
            new THREE.Color('#FF69B4'),
            new THREE.Color('#7FFF00'),
            new THREE.Color('#FF4500'),
        ]

        for (let i = 0; i < count; i++) {
            // Start from top, spread across width
            positions[i * 3] = (Math.random() - 0.5) * 20
            positions[i * 3 + 1] = 8 + Math.random() * 4
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10

            // Random velocity (falling down with some horizontal movement)
            velocities[i * 3] = (Math.random() - 0.5) * 0.02
            velocities[i * 3 + 1] = -0.02 - Math.random() * 0.02
            velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02

            // Random color
            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
            colors[i * 3] = color.r
            colors[i * 3 + 1] = color.g
            colors[i * 3 + 2] = color.b

            // Random rotation
            rotations[i] = Math.random() * Math.PI * 2
        }

        return { positions, colors, velocities, rotations }
    }, [count])

    // Animate confetti falling
    useFrame(() => {
        if (confettiRef.current) {
            const positions = confettiRef.current.geometry.attributes.position.array

            for (let i = 0; i < count; i++) {
                const i3 = i * 3

                // Apply velocity
                positions[i3] += confetti.velocities[i3]
                positions[i3 + 1] += confetti.velocities[i3 + 1]
                positions[i3 + 2] += confetti.velocities[i3 + 2]

                // Reset if confetti goes too low
                if (positions[i3 + 1] < -8) {
                    positions[i3] = (Math.random() - 0.5) * 20
                    positions[i3 + 1] = 8 + Math.random() * 2
                    positions[i3 + 2] = (Math.random() - 0.5) * 10
                }
            }

            confettiRef.current.geometry.attributes.position.needsUpdate = true

            // Rotate confetti for realistic effect
            confettiRef.current.rotation.z += 0.001
        }
    })

    return (
        <points ref={confettiRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={confetti.positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={count}
                    array={confetti.colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.15}
                vertexColors
                transparent
                opacity={0.9}
                sizeAttenuation
            />
        </points>
    )
}

export default Confetti
