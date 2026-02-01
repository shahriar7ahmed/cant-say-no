import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function CupidShapes() {
    const cupidsRef = useRef()
    const cupidCount = 10

    // Create cupid positions
    const cupids = []
    for (let i = 0; i < cupidCount; i++) {
        const angle = (i / cupidCount) * Math.PI * 2
        const radius = 6 + Math.random() * 2

        cupids.push({
            position: [
                Math.cos(angle) * radius,
                (Math.random() - 0.5) * 4,
                Math.sin(angle) * radius
            ],
            rotation: [0, angle, 0],
            scale: 0.5 + Math.random() * 0.3,
        })
    }

    // Animate cupids
    useFrame((state) => {
        if (cupidsRef.current) {
            cupidsRef.current.rotation.y -= 0.001
        }
    })

    return (
        <group ref={cupidsRef}>
            {cupids.map((cupid, i) => (
                <mesh key={i} position={cupid.position} rotation={cupid.rotation} scale={cupid.scale}>
                    {/* Arrow */}
                    <group>
                        {/* Arrow shaft */}
                        <mesh rotation={[0, 0, Math.PI / 4]}>
                            <cylinderGeometry args={[0.05, 0.05, 2]} />
                            <meshStandardMaterial color="#ffd700" />
                        </mesh>
                        {/* Arrow head (cone) */}
                        <mesh position={[0.7, 0.7, 0]} rotation={[0, 0, Math.PI / 4]}>
                            <coneGeometry args={[0.15, 0.4, 8]} />
                            <meshStandardMaterial color="#ffd700" />
                        </mesh>
                        {/* Heart at the back */}
                        <mesh position={[-0.7, -0.7, 0]} scale={0.3}>
                            <sphereGeometry args={[0.5, 16, 16]} />
                            <meshStandardMaterial color="#ff1493" emissive="#ff1493" emissiveIntensity={0.3} />
                        </mesh>
                    </group>
                </mesh>
            ))}
        </group>
    )
}

export default CupidShapes
