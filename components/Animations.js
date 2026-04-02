'use client'
import { useEffect } from 'react'

export default function Animations() {
  useEffect(() => {
    // Wait for DOM to be fully ready
    const timer = setTimeout(() => {
      // Hero immediate animations (no scroll trigger)
      const heroEls = document.querySelectorAll('[data-hero]')
      heroEls.forEach((el) => {
        const delay = parseInt(el.dataset.hero || '0', 10)
        setTimeout(() => {
          el.classList.add('visible')
        }, delay)
      })

      // Scroll-triggered reveal animations
      const revealEls = document.querySelectorAll('[data-reveal]')
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target
              const delay = parseInt(el.dataset.delay || '0', 10)
              setTimeout(() => {
                el.classList.add('visible')
              }, delay)
              observer.unobserve(el)
            }
          })
        },
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
      )

      revealEls.forEach((el) => observer.observe(el))

      // Store observer for cleanup
      return () => observer.disconnect()
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return null
}
