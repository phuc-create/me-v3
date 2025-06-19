'use client'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../../lib/utils'

const WelcomeAnimation = () => {
  const [showBackDrop, setShowBackDrop] = useState(true)
  const [shouldAnimate, setShouldAnimate] = useState(true)

  useEffect(() => {
    window.document.body.style.overflow = 'hidden'
    if (!shouldAnimate) return
    const timeout = setTimeout(() => {
      setShouldAnimate(false)
    }, 2000)
    return () => {
      clearTimeout(timeout)
    }
  }, [shouldAnimate])

  useEffect(() => {
    if (shouldAnimate) return
    const backdropTimeout = setTimeout(() => {
      setShowBackDrop(false)
      window.document.body.style.overflow = 'unset'
    }, 3000)
    return () => {
      clearTimeout(backdropTimeout)
    }
  }, [shouldAnimate])

  return (
    <AnimatePresence>
      {/* {showBackDrop && ( */}
      <motion.div
        className={cn(
          'bg-background fixed top-0 left-0 flex h-[100vh] w-[100vw] items-center justify-center overflow-hidden',
          showBackDrop ? 'z-50' : 'hidden'
        )}
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 0, y: 10 }}
        exit={{ opacity: 1, y: 10 }}
        transition={{ duration: 0.3, delay: 4 }}
      >
        <AnimatePresence>
          {shouldAnimate && (
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-4xl font-bold"
            >
              Hi
            </motion.h1>
          )}
        </AnimatePresence>
      </motion.div>
      {/* )} */}
    </AnimatePresence>
  )
}

export default WelcomeAnimation
