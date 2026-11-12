
import { useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

type DragState = {
  yaw: number
  pitch: number
}

function City({ dragState }: { dragState: React.MutableRefObject<DragState> }) {
  const cityRef = useRef<THREE.Group>(null)

  
const buildings = useMemo(() => {
  const items = []

  for (let i = 0; i < 180; i++) {
    // Deterministic random values
    const random = (n: number) => {
      const value = Math.sin(n * 127.1 + 311.7) * 43758.5453
      return value - Math.floor(value)
    }

    const angle = random(i * 3 + 1) * Math.PI * 2
    const radius = Math.sqrt(random(i * 3 + 2)) * 19

    const x = Math.cos(angle) * radius
    const z = Math.sin(angle) * radius

    // Vary building sizes and heights
    const height = 1 + random(i * 3 + 3) * 5
    const width = 0.5 + random(i * 3 + 4) * 0.7
    const depth = 0.5 + random(i * 3 + 5) * 0.7

    items.push({
      x,
      z,
      height,
      width,
      depth,
    })
  }

  return items
}, [])


  useFrame((state) => {
    if (!cityRef.current) return

    const baseY = state.clock.getElapsedTime() * 0.10
    cityRef.current.rotation.y = baseY + dragState.current.yaw
    cityRef.current.rotation.x = -0.12 + dragState.current.pitch
    cityRef.current.rotation.z = dragState.current.pitch * 0.25
  })

  return (
    <group ref={cityRef}>
      {/* Wireframe city buildings */}
      {buildings.map((building, i) => (
        <mesh
          key={i}
          position={[
            building.x,
            building.height / 2,
            building.z,
          ]}
        >
          <boxGeometry
            args={[
              building.width,
              building.height,
              building.depth,
            ]}
          />

          <meshBasicMaterial
            color="#009dff"
            wireframe
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}
    </group>
  )
}

export default function HeroScene() {
  const dragState = useRef<DragState>({
    yaw: 0,
    pitch: 0,
  })

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height

    dragState.current.yaw = (x - 0.5) * 1.8
    dragState.current.pitch = THREE.MathUtils.clamp(
      (y - 0.5) * 1.4,
      -0.9,
      0.9
    )
  }

  return (
    <div
      className="hero-3d"
      onPointerMove={handlePointerMove}
      style={{ cursor: "default", touchAction: "none" }}
    >
      <Canvas
        orthographic
        camera={{
          position: [15, 25, 35],
          zoom: 15,
          near: 0.1,
          far: 200,
        }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <color attach="background" args={["#101110"]} />
        <ambientLight intensity={1} />
        <City dragState={dragState} />
      </Canvas>
    </div>
  )
}
