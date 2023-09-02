'use client'

import { motion, AnimatePresence, delay } from 'framer-motion'

export const PageAnimation = ({ children }: any) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50, x: 100 }}
        animate={{
          opacity: 5,
          y: 10,
          x: 0,
        }}
        transition={{ delay: 0.2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export const BoxAnimation = () => {
  return (
    <motion.div
      style={{
        height: 50,
        width: 50,
        background: 'grey',
      }}
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 90, 180, 0],
        borderRadius: ['0%', '0%', '50%', '50%', '0%'],
      }}
      transition={{
        duration: 3,
        ease: 'easeInOut',
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: 1,
        repeatDelay: 0.5,
      }}
    />
  )
}
