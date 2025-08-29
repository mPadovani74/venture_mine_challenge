import { motion } from "framer-motion";

export function CentralGlow() {
  return (
    <motion.div
      animate={{
        opacity: [0.05, 0.15, 0.05],
        scale: [0.8, 1.2, 0.8]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-yellow-200/20 via-amber-200/10 to-transparent rounded-full blur-3xl"
    />
  );
}