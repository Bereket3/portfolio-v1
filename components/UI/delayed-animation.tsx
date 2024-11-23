import { motion } from "framer-motion"

interface DelayedComponentProps {
  className?: string,
  children: JSX.Element,
}


export default function DelayedComponent({ className, children }: DelayedComponentProps) {
  return <motion.div
    initial={{
      x: -70,
      opacity: 0
    }}
    animate={{
      x: 0,
      opacity: 1
    }}
    transition={{ duration: 1, delay: 0.2 }}
    className={className}
  >
    {children}
  </motion.div>

}