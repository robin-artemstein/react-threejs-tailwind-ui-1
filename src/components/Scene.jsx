import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import WireframeSphere from './WireframeSphere'

/**
 * Scene
 * Sets up the React Three Fiber Canvas with camera, lighting,
 * orbit controls, and the wireframe sphere.
 *
 * @param {number} sphereSize - Passed down to WireframeSphere
 */
export default function Scene({ sphereSize }) {
  return (
    /*
      Canvas fills its parent container.
      camera.position: pull back on Z so sphere is fully visible.
      gl.alpha: true keeps canvas background transparent so our
      CSS gradient shows through.
    */
    <Canvas
      style={{ width: '100%', height: '100%' }}
      camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ alpha: true }}        // transparent WebGL background
    >
      {/* Subtle ambient light so wireframe isn't pitch black on dark bg */}
      <ambientLight intensity={0.5} />

      {/* The wireframe sphere — size driven by UI panel state */}
      <WireframeSphere size={sphereSize} />

      {/*
        OrbitControls lets the user rotate/zoom with mouse.
        enablePan: false keeps the sphere centred.
      */}
      <OrbitControls enablePan={false} />
    </Canvas>
  )
}