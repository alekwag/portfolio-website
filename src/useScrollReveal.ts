import { useEffect } from "react"

export default function useScrollReveal(dependency?: string) {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".scroll-reveal")

    if (!elements.length) return

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement
          const revealElements = target.classList.contains("scroll-reveal-watch")
            ? target.querySelectorAll<HTMLElement>(".scroll-reveal")
            : [target]

          revealElements.forEach((element) => {
            if (entry.isIntersecting) {
              element.classList.add("is-visible")
            } else {
              element.classList.remove("is-visible")
            }
          })
        })
      },
      {
        threshold: 0.12,
        rootMargin: "-22% 0px -8% 0px",
      }
    )

    const watchElements = new Set<Element>()
    elements.forEach((element) => {
      watchElements.add(
        element.parentElement?.classList.contains("scroll-reveal-watch")
          ? element.parentElement
          : element
      )
    })
    watchElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [dependency])
}
