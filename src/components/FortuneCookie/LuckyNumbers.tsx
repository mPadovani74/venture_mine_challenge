import { motion } from "framer-motion";

interface LuckyNumbersProps {
  numbers: number[];
}

export function LuckyNumbers({ numbers }: LuckyNumbersProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="text-center mb-6"
    >
      <h3 className="text-sm text-amber-700 mb-3">
        Your Lucky Numbers
      </h3>
      <div className="flex justify-center gap-2 flex-wrap">
        {numbers.map(
          (number, index) => (
            <motion.div
              key={number}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 1 + index * 0.1,
                type: "spring",
                stiffness: 500,
                damping: 25,
              }}
              className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-md"
            >
              <span className="text-white font-medium text-sm">
                {number}
              </span>
            </motion.div>
          ),
        )}
      </div>
    </motion.div>
  );
}