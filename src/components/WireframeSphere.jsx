import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * WireframeSphere
 * Renders a slowly rotating sphere in wireframe mode.
 *
 * @param {number} size - Radius of the sphere (controlled by UI panel)
 */
export default function WireframeSphere({ size = 1 }) {
  const meshRef = useRef()

  // Slowly rotate the sphere on each animation frame
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3
      meshRef.current.rotation.x += delta * 0.1
    }
  })

  return (
    <mesh ref={meshRef}>
      {/*
        SphereGeometry args: (radius, widthSegments, heightSegments)
        More segments = denser wireframe grid
      */}
      <sphereGeometry args={[size, 32, 32]} />

      {/*
        MeshBasicMaterial with wireframe: true draws only the edges.
        color: light green (#90EE90 / "lightgreen")
      */}
      <meshBasicMaterial
        color="#90EE90"
        wireframe={true}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}