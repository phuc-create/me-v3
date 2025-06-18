'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../../lib/utils'

const WelcomeAnimation = () => {
  const greetingRef = useRef<NodeJS.Timeout | null>(null)
  const [showBackDrop, setShowBackDrop] = useState(true)
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    // if (!greetingRef.current)
    const timeout = setTimeout(() => {
      setShouldAnimate(true)
    }, 0)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (!shouldAnimate) return
    let backdropTimeout: NodeJS.Timeout
    const timeout = setTimeout(() => {
      setShouldAnimate(false)
      backdropTimeout = setTimeout(() => {
        setShowBackDrop(false)
      }, 1000)
    }, 2000)
    return () => {
      clearTimeout(backdropTimeout)
      clearTimeout(timeout)
    }
  }, [shouldAnimate])

  if (!shouldAnimate) return null

  return (
    <motion.div
      className={cn(
        'bg-background fixed top-0 left-0 z-50 flex h-[100vh] w-[100vw] items-center justify-center overflow-hidden'
      )}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 0, y: 10 }}
      exit={{ opacity: 1, y: 10 }}
      transition={{ duration: 0.3, delay: 4 }}
    >
      <AnimatePresence mode="popLayout">
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
  )
}

export default WelcomeAnimation
