import { useRef, useEffect, useCallback } from 'react'

/**
 * ControlPanel
 * Floating UI panel on the right side of the screen.
 * Displays current sphere size and provides + / - buttons
 * that continuously change the value while held down.
 *
 * @param {number}   size    - Current sphere size value
 * @param {Function} setSize - State setter for sphere size
 */
export default function ControlPanel({ size, setSize }) {
  // Ref to store the requestAnimationFrame / interval ID so we can cancel it
  const intervalRef = useRef(null)

  /**
   * stopChanging
   * Clears the repeating interval when the mouse button is released
   * or the pointer leaves the button.
   */
  const stopChanging = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  /**
   * startChanging
   * Fires `step` immediately on mouse-down, then repeats every 100ms
   * while the button is held.
   *
   * @param {number} step - +1 to increase, -1 to decrease
   */
  const startChanging = useCallback((step) => {
    // Apply the first change immediately (feels responsive)
    setSize(prev => Math.max(0.1, parseFloat((prev + step * 0.1).toFixed(2))))

    // Then keep changing while held
    intervalRef.current = setInterval(() => {
      setSize(prev => Math.max(0.1, parseFloat((prev + step * 0.1).toFixed(2))))
    }, 80) // 80ms interval → smooth continuous change
  }, [setSize])

  // Safety: clear interval if component unmounts while button is held
  useEffect(() => () => stopChanging(), [stopChanging])

  return (
    /*
      Positioned absolutely on the right side, vertically centred.
      Tailwind: fixed right-6 top-1/2 -translate-y-1/2
    */
    <div className="
      fixed right-6 top-1/2 -translate-y-1/2
      bg-black
      border border-green-800
      rounded-xl
      p-5
      flex flex-col items-center gap-4
      w-36
      shadow-lg shadow-green-900/40
      select-none
    ">
      {/* ── Label ── */}
      <span className="text-green-400 text-LG font-  tracking-widest uppercase">
        Size
      </span>

      {/* ── Numeric display ── */}
      <span className="text-white text-3xl font-mono font-bold">
        {size.toFixed(1)}
      </span>

      {/* ── Increase button ── */}
      <button
        className="
          bg-green-600 hover:bg-green-500
          text-white font-bold text-2xl
          w-full py-2 rounded-lg
          transition-colors duration-150
          cursor-pointer
          active:scale-95
        "
        // Start increasing on mouse down
        onMouseDown={() => startChanging(1)}
        // Stop on release (anywhere on the page) or pointer leave
        onMouseUp={stopChanging}
        onMouseLeave={stopChanging}
        // Touch support (mobile)
        onTouchStart={() => startChanging(1)}
        onTouchEnd={stopChanging}
      >
        ＋
      </button>

      {/* ── Decrease button ── */}
      <button
        className="
          bg-red-600 hover:bg-red-500
          text-white font-bold text-2xl
          w-full py-2 rounded-lg
          transition-colors duration-150
          cursor-pointer
          active:scale-95
        "
        // Start decreasing on mouse down
        onMouseDown={() => startChanging(-1)}
        onMouseUp={stopChanging}
        onMouseLeave={stopChanging}
        onTouchStart={() => startChanging(-1)}
        onTouchEnd={stopChanging}
      >
        －
      </button>
    </div>
  )
}