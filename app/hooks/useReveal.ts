'use client'
import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport it gets the class `visible` added
 * (pairs with the `.reveal` and `.reveal-stagger` CSS utilities in globals.css).
 */
export function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
