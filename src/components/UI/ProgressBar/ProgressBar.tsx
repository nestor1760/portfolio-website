import { motion, useScroll, useSpring } from "framer-motion"
import { ScrollBar } from "./ProgressBarStyles";

export const ProgressBar = () => {
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const MScrollBar = motion(ScrollBar)

  return <MScrollBar style={{ scaleY }} />
}