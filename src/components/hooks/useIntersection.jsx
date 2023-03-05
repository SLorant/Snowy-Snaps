import { useState, useLayoutEffect } from 'react'

const useIntersection = (element, rootMargin) => {
  // This custom React Hook returns a boolean value indicating whether an element is intersecting with the viewport.
  const [isVisible, setState] = useState(false)

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting)
      },
      { rootMargin },
    )
    element.current && observer.observe(element.current)
    // When the element is no longer needed, stop observing it.
    return () => observer.unobserve(element.current)
  }, [])

  return isVisible
}

export default useIntersection
