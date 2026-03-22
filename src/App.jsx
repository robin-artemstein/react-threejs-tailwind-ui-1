import { useState } from 'react'
import Scene from './components/Scene'
import ControlPanel from './components/ControlPanel'

/**
 * App
 * Root component.
 * - Owns `sphereSize` state (shared between Scene and ControlPanel)
 * - Renders the full-screen 3D scene behind the floating UI panel
 */
export default function App() {
  // Default sphere size is 1 (as per requirements)
  const [sphereSize, setSphereSize] = useState(1)

  return (
    /*
      Outer container fills the full viewport.
      `relative` so the absolutely-positioned ControlPanel
      is anchored to it.
    */
    <div className="relative w-full h-screen">

      {/* ── 3D Scene (fills entire background) ── */}
      <div className="absolute inset-0">
        <Scene sphereSize={sphereSize} />
      </div>

      {/* ── Floating Control Panel (right side, above canvas) ── */}
      <ControlPanel size={sphereSize} setSize={setSphereSize} />

    </div>
  )
}