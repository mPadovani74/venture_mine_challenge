import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <motion.div
      animate={{
        background: [
          "radial-gradient(circle at 20% 80%, rgba(251, 191, 36, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(254, 215, 170, 0.1) 0%, transparent 50%)",
          "radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%), radial-gradient(circle at 60% 60%, rgba(254, 215, 170, 0.1) 0%, transparent 50%)",
          "radial-gradient(circle at 60% 60%, rgba(251, 191, 36, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(245, 158, 11, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(254, 215, 170, 0.1) 0%, transparent 50%)"
        ]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute inset-0 w-full h-full"
    />
  );
}