import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface UnopenedCookieProps {
  onCrack: () => void;
}

export function UnopenedCookie({ onCrack }: UnopenedCookieProps) {
  return (
    <motion.div
      key="unopened"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.6,
      }}
      className="flex flex-col items-center"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -10, 0],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        onClick={onCrack}
        className="cursor-pointer mb-8"
      >
        <div className="relative">
          {/* Cookie Shadow */}
          <div className="absolute top-2 left-2 w-32 h-20 bg-black/20 rounded-full blur-md" />

          {/* Fortune Cookie */}
          <div className="relative w-32 h-20 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-full transform rotate-12 shadow-lg border-2 border-amber-400">
            {/* Cookie texture lines */}
            <div className="absolute inset-2 border border-amber-500/30 rounded-full" />
            <div className="absolute inset-4 border border-amber-500/20 rounded-full" />

            {/* Sparkle effects */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-2 -right-2"
            >
              <Sparkles className="w-6 h-6 text-yellow-400 drop-shadow-lg" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -bottom-1 -left-2"
            >
              <Sparkles className="w-4 h-4 text-orange-400 drop-shadow-lg" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center relative"
      >
        {/* Magical aura around title */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="absolute inset-0 bg-gradient-to-r from-amber-200/30 via-yellow-200/30 to-orange-200/30 rounded-full blur-2xl transform scale-150"
        />

        {/* Orbiting sparkles around title */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0.8, 1],
              opacity: [0, 0.8, 0.6, 0.8],
              rotate: 360,
            }}
            transition={{
              scale: {
                delay: 1 + i * 0.1,
                duration: 0.8,
              },
              opacity: {
                delay: 1 + i * 0.1,
                duration: 0.8,
              },
              rotate: {
                delay: 1.5,
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="absolute"
            style={{
              left: `${50 + Math.cos((i * Math.PI * 2) / 8) * 80}%`,
              top: `${50 + Math.sin((i * Math.PI * 2) / 8) * 60}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <Sparkles
              className={`w-${i % 2 === 0 ? "3" : "2"} h-${i % 2 === 0 ? "3" : "2"} text-${i % 3 === 0 ? "yellow" : i % 3 === 1 ? "amber" : "orange"}-400/70`}
            />
          </motion.div>
        ))}

        {/* Enhanced title with gradient and glow */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
            ease: "backOut",
          }}
          className="text-3xl mb-3 bg-gradient-to-r from-amber-700 via-yellow-600 to-orange-700 bg-clip-text text-transparent relative z-10"
          style={{
            filter:
              "drop-shadow(0 2px 8px rgba(251, 191, 36, 0.4))",
            textShadow:
              "0 0 30px rgba(251, 191, 36, 0.6)",
          }}
        >
          <motion.span
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Fortune Cookie
          </motion.span>
        </motion.h1>

        {/* Enhanced subtitle with shimmer effect */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-amber-700 mb-4 relative z-10"
          style={{
            textShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          <motion.span className="bg-clip-text">
            Tap the cookie to crack it open!
          </motion.span>
        </motion.p>

        {/* Enhanced magic text with pulsing border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5 }}
          className="relative z-10"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 0 1px rgba(251, 191, 36, 0.2)",
                "0 0 0 2px rgba(251, 191, 36, 0.4)",
                "0 0 0 1px rgba(251, 191, 36, 0.2)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-50/80 to-yellow-50/80 backdrop-blur-sm border border-amber-200/50"
          >
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
            </motion.div>
            <span className="text-sm text-amber-700 font-medium">
              Magic awaits inside
            </span>
            <motion.div
              animate={{
                rotate: -360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                },
              }}
            >
              <Sparkles className="w-4 h-4 text-orange-500" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}