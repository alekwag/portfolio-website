
import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import * as THREE from "three"

function Sculpture() {
  const group = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (!group.current) return

    // Continuous slow rotation
    group.current.rotation.y += delta * 0.18

    // Subtle response to mouse movement
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      state.pointer.y * 0.2,
      0.04
    )

    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      -state.pointer.x * 0.2,
      0.04
    )
  })

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.15}
      floatIntensity={0.35}
    >
      <group ref={group}>
        {/* Main metallic sculpture */}
        <mesh>
          <torusKnotGeometry args={[1.05, 0.32, 220, 32, 2, 3]} />
          <meshStandardMaterial
            color="#c6a477"
            metalness={0.85}
            roughness={0.2}
          />
        </mesh>

        {/* Fine outer orbit */}
        <mesh rotation={[0.8, 0.3, 0.2]}>
          <torusGeometry args={[1.75, 0.008, 12, 180]} />
          <meshStandardMaterial
            color="#d9bb91"
            metalness={0.8}
            roughness={0.3}
          />
        </mesh>

        {/* Small orbiting detail */}
        <mesh position={[1.55, 0.65, 0.2]}>
          <sphereGeometry args={[0.075, 24, 24]} />
          <meshStandardMaterial
            color="#f0d5a8"
            metalness={0.9}
            roughness={0.15}
          />
        </mesh>
      </group>
    </Float>
  )
}

export default function HeroScene() {
  return (
    <div className="hero-3d">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.7} />

        <directionalLight
          position={[3, 4, 5]}
          intensity={3}
          color="#fff0d6"
        />

        <pointLight
          position={[-3, -2, 2]}
          intensity={20}
          color="#c6a477"
        />

        <pointLight
          position={[2, 1, -3]}
          intensity={12}
          color="#ffffff"
        />

        <Sculpture />
      </Canvas>
    </div>
  )
}
