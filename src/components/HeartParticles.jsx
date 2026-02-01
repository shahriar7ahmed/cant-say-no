import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function HeartParticles() {
    const particlesRef = useRef()
    const count = 100

    // Create heart-shaped particles
    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3)
        const colors = new Float32Array(count * 3)
        const scales = new Float32Array(count)

        // Valentine's day colors
        const colorPalette = [
            new THREE.Color('#FF1493'), // Deep pink
            new THREE.Color('#FF69B4'), // Hot pink
            new THREE.Color('#FFB3D9'), // Light pink
            new THREE.Color('#E91E63'), // Valentine pink
            new THREE.Color('#FF0066'), // Valentine red
        ]

        for (let i = 0; i < count; i++) {
            // Random position in a sphere
            const radius = 3 + Math.random() * 4
            const theta = Math.random() * Math.PI * 2
            const phi = Math.random() * Math.PI

            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
            positions[i * 3 + 2] = radius * Math.cos(phi)

            // Random color from palette
            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
            colors[i * 3] = color.r
            colors[i * 3 + 1] = color.g
            colors[i * 3 + 2] = color.b

            // Random scale
            scales[i] = 0.5 + Math.random() * 1.5
        }

        return { positions, colors, scales }
    }, [count])

    // Animate particles
    useFrame((state) => {
        if (particlesRef.current) {
            // Rotate the entire particle system
            particlesRef.current.rotation.y += 0.002
            particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1

            // Animate individual particles
            const positions = particlesRef.current.geometry.attributes.position.array
            for (let i = 0; i < count; i++) {
                const i3 = i * 3
                // Floating effect
                positions[i3 + 1] += Math.sin(state.clock.elapsedTime + i) * 0.002
            }
            particlesRef.current.geometry.attributes.position.needsUpdate = true
        }
    })

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={particles.positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={count}
                    array={particles.colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.3}
                vertexColors
                transparent
                opacity={0.8}
                sizeAttenuation
            />
        </points>
    )
}

export default HeartParticles
