import { useInView, useAnimation, motion } from 'motion/react'
import React, { useEffect, useRef } from 'react'

const Revial = ({ children, width = "fit-content" }) => {
  const ref = useRef(null)
  const inInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (inInView) {
      mainControls.start('visible')
    }
  }, [inInView, mainControls])
  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Revial
