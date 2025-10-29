"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SplashScreen() {
  return (
    <motion.div
      className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-600 via-purple-700 to-indigo-900 relative overflow-hidden text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Floating glow */}
      <motion.div
        className="absolute w-[700px] h-[700px] bg-pink-500/20 blur-[120px] rounded-full top-1/3 left-1/3 animate-pulse"
      ></motion.div>

      {/* Logo + text */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 12 }}
        className="relative text-center"
      >
        <div className="flex justify-center mb-4">
          <Image
            src="/heart.svg"
            alt="Heart"
            width={80}
            height={80}
            className="drop-shadow-[0_0_15px_#EC4899]"
          />
        </div>
        <h1 className="text-5xl font-extrabold tracking-wide">SHUKKU</h1>
        <p className="text-pink-100 mt-2 text-sm">
          Two Souls. One Space. Infinite Connection.
        </p>
      </motion.div>

      {/* Loading bar */}
      <motion.div
        className="mt-12 w-52 h-1.5 bg-white/30 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="h-full bg-white rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2 }}
        />
      </motion.div>
    </motion.div>
  );
}
