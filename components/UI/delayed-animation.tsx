import { motion } from "framer-motion"

interface DelayedComponentProps {
  className?: string,
  children: JSX.Element,
  delay?: number,
}


export default function DelayedComponent({ className, children, delay }: DelayedComponentProps) {
  return <motion.div
    initial={{
      x: -70,
      opacity: 0
    }}
    whileInView={{
      x: 0,
      opacity: 1
    }}
    viewport={{
      once: true
    }}
    transition={{
      duration: 1, delay: 0.2 + delay!
    }}
    className={className}
  >
    {children}
  </motion.div >

}
