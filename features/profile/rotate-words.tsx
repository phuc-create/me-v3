"use client"
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const RotateWords = ({ words = ["There you go!", "Dog Lover"], delay = 2000 }: { words: string[], delay?: number }) => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(cur => (cur + 1) % words.length)
    }, delay)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='flex justify-start pl-2 items-center h-1/2 text-foreground font-mono leading-none'>
      <AnimatePresence mode='wait'>
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
