"use client";
import { motion } from "framer-motion";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { RefreshCw } from "lucide-react";
import { Fortune } from "../../data/fortunes";

interface FortuneCardProps {
  fortune: Fortune;
  onNewFortune: () => void;
}

export const FortuneCard = ({ fortune, onNewFortune }: FortuneCardProps) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.2 }}
    className="w-full max-w-md"
  >
    <Card className="p-6 bg-white/90 backdrop-blur-sm border-amber-200 shadow-xl">
      <div className="text-center mb-6 relative">
        <motion.div className="absolute inset-0 bg-gradient-to-r from-amber-200/50 via-yellow-200/50 to-orange-200/50 rounded-full blur-xl" />
        <h2 className="text-2xl mb-4 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent relative z-10">
          Your Fortune
        </h2>
      </div>

      <blockquote className="text-center text-gray-700 mb-6 italic leading-relaxed">
        "{fortune.quote}"
      </blockquote>

      <div className="text-center mb-6">
        <h3 className="text-sm text-amber-700 mb-3">Your Lucky Numbers</h3>
        <div className="flex justify-center gap-2 flex-wrap">
          {fortune.numbers.map((number) => (
            <div
              key={number}
              className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-md"
            >
              <span className="text-white font-medium text-sm">{number}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Button
          onClick={onNewFortune}
          className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-2 rounded-full shadow-lg"
        >
          <RefreshCw className="w-4 h-4 mr-2" /> Get Another Fortune
        </Button>
      </div>
    </Card>
  </motion.div>
);
