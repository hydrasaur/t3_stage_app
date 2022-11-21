import React from 'react'
import { gsap } from 'gsap'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


export const Poster = () => {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0,5 } },
    hidden: { opacity: 0, scale: 0 },
  }
  const Box = ({ num }) => {
  return (
    <motion.div
      variants={boxVariant}
      initial="hidden"
      animate="visible"
      className="box"
    />
  )
}
}
export default Poster