'use client'
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '../../lib/utils'

const RotateWords = ({
  words = ['There you go!', 'Dog Lover'],
  delay = 2000,
  className
}: {
  words: string[]
  delay?: number
  className: string
}) => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(cur => (cur + 1) % words.length)
    }, delay)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={cn(
        'text-foreground flex items-center justify-start font-mono',
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={words[current]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          {words[current]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default RotateWords
