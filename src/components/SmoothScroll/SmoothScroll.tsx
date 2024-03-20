import React, { useRef } from 'react'
import { gsap, Power4 } from 'gsap'
import { useGSAP } from '@gsap/react'
interface SmoothScrollProps {
  children?: React.ReactNode
}
const SmoothScroll = (props: SmoothScrollProps) => {
  const viewportRef = useRef(null)
  // const [height, setHeight] = useState(() => window.innerHeight)

  // const resizeObserver = new ResizeObserver(elements => {
  //   for (const el of elements) {
  //     const rect = el.contentRect
  //     setHeight(rect.height)
  //   }
  // })

  // const onScroll = () => {
  //   gsap.to(viewportRef.current, {
  //     y: -window.scrollY,
  //     ease: Power4.easeOut,
  //     duration: 1
  //   })
  // }
  useGSAP(
    (context, contextSafe) => {
      const onScroll = contextSafe?.(() => {
        gsap.to(viewportRef.current, {
          y: -window.scrollY,
          ease: Power4.easeOut,
          duration: 1
        })
      })
      window.addEventListener('scroll', () => onScroll?.())
    },
    { scope: viewportRef }
  )

  return <div ref={viewportRef}>{props.children}</div>
}

export default SmoothScroll
