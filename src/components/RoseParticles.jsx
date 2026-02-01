import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function RoseParticles() {
    const rosesRef = useRef()
    const roseCount = 20

    // Create rose geometries
    const roses = []
    for (let i = 0; i < roseCount; i++) {
        const angle = (i / roseCount) * Math.PI * 2
        const radius = 5 + Math.random() * 3

        roses.push({
            position: [
                Math.cos(angle) * radius,
                Math.sin(angle) * radius * 0.5,
                (Math.random() - 0.5) * 5
            ],
            rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
            scale: 0.2 + Math.random() * 0.3,
        })
    }

    // Rotate roses slowly
    useFrame((state) => {
        if (rosesRef.current) {
            rosesRef.current.rotation.y += 0.002
        }
    })

    return (
        <group ref={rosesRef}>
            {roses.map((rose, i) => (
                <mesh key={i} position={rose.position} rotation={rose.rotation} scale={rose.scale}>
                    {/* Rose stem (cylinder) */}
                    <group>
                        <mesh position={[0, -0.5, 0]}>
                            <cylinderGeometry args={[0.05, 0.05, 1]} />
                            <meshStandardMaterial color="#2d5016" />
                        </mesh>
                        {/* Rose bloom (sphere cluster) */}
                        <mesh position={[0, 0.2, 0]}>
                            <sphereGeometry args={[0.3, 16, 16]} />
                            <meshStandardMaterial color="#ff1493" />
                        </mesh>
                        <mesh position={[0.15, 0.25, 0.1]} scale={0.8}>
                            <sphereGeometry args={[0.2, 12, 12]} />
                            <meshStandardMaterial color="#ff69b4" />
                        </mesh>
                        <mesh position={[-0.15, 0.25, -0.1]} scale={0.8}>
                            <sphereGeometry args={[0.2, 12, 12]} />
                            <meshStandardMaterial color="#ff69b4" />
                        </mesh>
                    </group>
                </mesh>
            ))}
        </group>
    )
}

export default RoseParticles
