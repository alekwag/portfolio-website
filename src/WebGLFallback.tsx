
import "./WebGLFallback.css"

export default function WebGLFallback() {
  return (
    <div className="webgl-fallback">
      <div className="fallback-grid">
        {Array.from({ length: 35 }, (_, i) => (
          <div
            key={i}
            className="fallback-building"
            style={{
              height: `${20 + ((i * 37) % 90)}px`,
              width: `${8 + (i % 4) * 4}px`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
