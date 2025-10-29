"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function FooterBar() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#342B68]/80 glass p-4 text-xs text-purple-200 flex flex-col gap-3 z-20"
    >
      <motion.div whileHover={{ scale: 1.02 }} className="bg-[#423A78]/70 rounded-xl p-3 flex items-center justify-between">
        <div>
          <span className="font-semibold text-white">AI Suggestion</span>: You both seem low energy today — plan a walk together.
        </div>
        <Sparkles className="w-4 h-4 text-yellow-300" />
      </motion.div>

      <div className="flex justify-around text-[11px] text-purple-300">
        <motion.div whileHover={{ scale: 1.2 }}>🔥 Streaks</motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>💖 15 Days</motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>🏆 Milestones</motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>🎯 Shared Goals</motion.div>
      </div>

      <div className="text-center text-[10px] text-purple-400 mt-2">
        Created by <span className="font-medium text-pink-300">Aktiar</span> — SHUKKU Prototype
      </div>
    </motion.footer>
  );
}
