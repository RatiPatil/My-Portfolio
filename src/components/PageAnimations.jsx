import { useEffect, useRef } from 'react'

/**
 * Custom hook to trigger an animation when an element enters the viewport.
 * @param {'left'|'right'|'up'|'down'} direction - Direction to slide in from.
 * @param {number} delay - Animation delay in milliseconds.
 * @returns {import('react').RefObject}
 */
export function useSlideIn(direction = 'up', delay = 0) {
  const ref = useRef(null)
  
  useEffect(() => {
    const el = ref.current
    if (!el) return
    
    // Initial state
    el.style.opacity = '0'
    const offset = '40px'
    
    switch (direction) {
      case 'left':  el.style.transform = `translateX(-${offset})`; break;
      case 'right': el.style.transform = `translateX(${offset})`; break;
      case 'down':  el.style.transform = `translateY(-${offset})`; break;
      case 'up':
      default:      el.style.transform = `translateY(${offset})`; break;
    }
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          el.style.opacity = '1'
          el.style.transform = 'none'
        }, delay)
        observer.disconnect()
      }
    }, { threshold: 0.1 })
    
    observer.observe(el)
    return () => observer.disconnect()
  }, [direction, delay])
  
  return ref
}

/**
 * A wrapper component that applies a slide-in animation on scroll.
 */
export function SlideIn({ direction = 'up', delay = 0, children, className = '' }) {
  const ref = useSlideIn(direction, delay)
  return (
    <div ref={ref} className={className} style={{ willChange: 'transform, opacity' }}>
      {children}
    </div>
  )
}

/**
 * A staggered container that animates children with a delay.
 */
export function StaggerContainer({ children, delayStep = 100, className = '' }) {
  return (
    <div className={className}>
      {Array.isArray(children) 
        ? children.map((child, i) => (
            <SlideIn key={i} direction="up" delay={i * delayStep}>
              {child}
            </SlideIn>
          ))
        : children}
    </div>
  )
}
