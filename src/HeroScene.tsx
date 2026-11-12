
import { useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

type DragState = {
  yaw: number
  pitch: number
  spinVelocity: number
  pointerOver: boolean
  lastX: number | null
  lastY: number | null
  lastTime: number | null
}

function City({ dragState }: { dragState: React.MutableRefObject<DragState> }) {
  const cityRef = useRef<THREE.Group>(null)
  const spinAngle = useRef(0)
  const spinMomentum = useRef(0)

  
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


  useFrame((_, delta) => {
    if (!cityRef.current) return

    const momentum = dragState.current
    const city = cityRef.current

    const hasRecentMovement =
      momentum.pointerOver &&
      momentum.lastTime !== null &&
      performance.now() - momentum.lastTime < 100

    spinMomentum.current = THREE.MathUtils.damp(
      spinMomentum.current,
      hasRecentMovement ? momentum.spinVelocity : 0,
      hasRecentMovement ? 8 : 1.25,
      delta
    )
    spinAngle.current += (0.1 + spinMomentum.current) * delta
    city.rotation.y = spinAngle.current + momentum.yaw
    city.rotation.x = -0.12 + momentum.pitch
    city.rotation.z = momentum.pitch * 0.25
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
    spinVelocity: 0,
    pointerOver: false,
    lastX: null,
    lastY: null,
    lastTime: null,
  })

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height
    const currentTime = event.timeStamp
    const previousX = dragState.current.lastX
    const previousY = dragState.current.lastY
    const previousTime = dragState.current.lastTime

    if (
      previousX !== null &&
      previousY !== null &&
      previousTime !== null
    ) {
      const elapsed = Math.max((currentTime - previousTime) / 1000, 0.016)
      const deltaX = x - previousX
      const deltaY = y - previousY
      const pointerSpeed = (deltaX / elapsed) * 0.5

      dragState.current.yaw += deltaX * 1.8
      dragState.current.pitch = THREE.MathUtils.clamp(
        dragState.current.pitch + deltaY * 1.4,
        -0.9,
        0.9
      )
      dragState.current.spinVelocity = THREE.MathUtils.clamp(
        THREE.MathUtils.lerp(dragState.current.spinVelocity, pointerSpeed, 0.35),
        -3,
        3
      )
    }

    dragState.current.lastX = x
    dragState.current.lastY = y
    dragState.current.lastTime = currentTime
    dragState.current.pointerOver = true
  }

  return (
    <div
      className="hero-3d"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        dragState.current.pointerOver = false
        dragState.current.lastX = null
        dragState.current.lastY = null
        dragState.current.lastTime = null
        dragState.current.spinVelocity = 0
      }}
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
