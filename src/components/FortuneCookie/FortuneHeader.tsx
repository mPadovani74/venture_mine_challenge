import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function FortuneHeader() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="text-center mb-6 relative"
    >
      {/* Magical glow background */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-amber-200/50 via-yellow-200/50 to-orange-200/50 rounded-full blur-xl"
      />

      {/* Floating sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0.8, 1],
            opacity: [0, 1, 0.7, 1],
            y: [0, -20, 0, -15, 0],
            x: [
              0,
              Math.sin(i) * 20,
              0,
              -Math.sin(i) * 15,
              0,
            ],
          }}
          transition={{
            delay: 0.8 + i * 0.1,
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute"
          style={{
            left: `${20 + i * 12}%`,
            top: `${10 + (i % 2) * 20}%`,
          }}
        >
          <Sparkles
            className={`w-${i % 2 === 0 ? "4" : "3"} h-${i % 2 === 0 ? "4" : "3"} text-${i % 3 === 0 ? "yellow" : i % 3 === 1 ? "amber" : "orange"}-400 drop-shadow-lg`}
          />
        </motion.div>
      ))}

      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        animate={{
          scale: [0, 1.2, 1],
          rotate: 360,
        }}
        transition={{
          scale: {
            delay: 0.5,
            duration: 0.8,
            ease: "backOut",
          },
          rotate: {
            delay: 0.7,
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="inline-block mb-4 relative z-10"
      >
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            filter: [
              "brightness(1)",
              "brightness(1.5)",
              "brightness(1)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles className="w-10 h-10 text-amber-500 drop-shadow-2xl" />
        </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0.8, 1.5, 0.8],
            opacity: [0.8, 0, 0.8],
          }}
          transition={{
            delay: 0.8,
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 border-2 border-amber-400 rounded-full"
        />
      </motion.div>

      <motion.h2
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 0.7,
          duration: 0.6,
          ease: "backOut",
        }}
        className="text-2xl mb-4 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent relative z-10"
        style={{
          filter:
            "drop-shadow(0 2px 4px rgba(251, 191, 36, 0.3))",
          textShadow:
            "0 0 20px rgba(251, 191, 36, 0.5)",
        }}
      >
        <motion.span
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Your Fortune
        </motion.span>
      </motion.h2>
    </motion.div>
  );
}