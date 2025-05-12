'use client'

import { ReactNode, useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface RevealProps {
  children: ReactNode;
  axis: "x" | "y";
  axisValue: number;
  duration: number;
  delay: number;
}

export default function Reveal({ children, axis, axisValue, duration=0.2, delay=0.4}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className="relative w-fit">
      <motion.div
        variants={{
          hidden: { opacity: 0, [axis]: axisValue },
          visible: { opacity: 1, [axis]: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  )
}
