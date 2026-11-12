
import { useEffect, useState } from "react"
import "./CustomCursor.css"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setVisible(true)

      const target = e.target as HTMLElement
      setHovering(
        !!target.closest("a, button, .project-card, input, textarea")
      )
    }

    const leave = () => setVisible(false)
    const enter = () => setVisible(true)

    window.addEventListener("mousemove", move)
    document.addEventListener("mouseleave", leave)
    document.addEventListener("mouseenter", enter)

    return () => {
      window.removeEventListener("mousemove", move)
      document.removeEventListener("mouseleave", leave)
      document.removeEventListener("mouseenter", enter)
    }
  }, [])

  return (
    <div className={`custom-cursor ${visible ? "visible" : ""}`}>
      <div
        className={`cursor-ring ${hovering ? "hovering" : ""}`}
        style={{
          left: position.x,
          top: position.y,
        }}
      />
      <div
        className="cursor-dot"
        style={{
          left: position.x,
          top: position.y,
        }}
      />
    </div>
  )
}
