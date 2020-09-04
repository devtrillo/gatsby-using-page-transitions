import React from 'react'
import { motion } from 'framer-motion'

const item = {
  exit: { y: 20, opacity: 0 },
  enter: { y: 0, opacity: 1 },
  initial: {
    y: -20,
    opacity: 0,
  },
}

const AnimatedPage = () => (
  <>
    <h1>Animated On Page Mount</h1>
    <ul>
      <motion.li variants={item}>Lorem Ipsum</motion.li>
      <motion.li variants={item}>Dolor Set</motion.li>
      <motion.li variants={item}>Amet</motion.li>
    </ul>
  </>
)

export default AnimatedPage
