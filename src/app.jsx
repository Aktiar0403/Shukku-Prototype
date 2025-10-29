import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MessageCircle, Brain, ShoppingBag, Activity, Calendar, Sparkles } from "lucide-react";

/*
 SHUKKU Animated App
 - SplashScreen with progress animation
 - Dashboard: grid of gradient tiles matching the design
 - Footer gamification layer
 - Framer Motion transitions for a premium feel
*/

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const t = setTimeout(onFinish, 3000);
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 12 }}
        className="text-center"
      >
        <div className="text-5xl font-extrabold tracking-wide">SHUKKU</div>
        <div className="text-sm text-pink-100 mt-2">Two Souls. One Space. Infinite Connection.</div>
      </motion.div>

      <motion.div
        className="mt-10 w-56 h-1.5 bg-white/20 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.div
          className="h-full bg-white rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
};

const Tile = ({ icon: Icon, title, color, link, children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.45, ease: "easeOut" }}
  >
    <Link
      to={link}
      className={`rounded-2xl p-4 shadow-md hover:shadow-xl transition bg-gradient-to-br ${color} text-white flex flex-col justify-between transform hover:scale-[1.03] duration-300`}
    >
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold">{title}</div>
        <Icon className="w-5 h-5 opacity-80" />
      </div>
      {children && <div className="mt-2 text-xs opacity-80">{children}</div>}
    </Link>
  </motion.div>
);

function Dashboard() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="min-h-screen bg-[#2C225A] text-white flex flex-col">
      {/* Header */}
      <motion.header initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="p-5 flex items-center justify-between bg-[#342B68] shadow-md">
        <div>
          <h1 className="text-lg font-semibold">Our Space</h1>
          <p className="text-xs text-purple-200">Two Souls. One Space.</p>
        </div>
        <motion.button whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.03 }} className="px-4 py-1 rounded-full bg-pink-500 text-xs font-medium">Invite Partner</motion.button>
      </motion.header>

      {/* Grid */}
      <main className="flex-1 p-5 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-md mx-auto">
        <Tile icon={MessageCircle} title="Private Couple Chat" color="from-pink-500 to-rose-400" link="/chat" delay={0.1}>Horata Couple Chats</Tile>
        <Tile icon={Heart} title="Mood Mirror" color="from-purple-500 to-indigo-400" link="/dashboard" delay={0.18}>Track & sync emotions</Tile>
        <Tile icon={Sparkles} title="Intimacy Zone" color="from-orange-400 to-pink-400" link="/games" delay={0.26}>Explore closeness</Tile>
        <Tile icon={ShoppingBag} title="Couple Shopping Hub" color="from-blue-400 to-indigo-500" link="/wishlist" delay={0.34}>Grocery & gifts list</Tile>
        <Tile icon={Brain} title="Relationship AI" color="from-purple-600 to-violet-400" link="/insights" delay={0.42}>Smart emotional insights</Tile>
        <Tile icon={Activity} title="Wellness & Period Tracking" color="from-rose-500 to-pink-400" link="/tracker" delay={0.5}>Stay in sync</Tile>
        <Tile icon={Calendar} title="Anniversary" color="from-indigo-500 to-blue-400" link="/celebrations" delay={0.58}>24 days left 🎉</Tile>
      </main>

      {/* Footer gamification */}
      <motion.footer initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.45 }} className="bg-[#342B68] p-4 text-xs text-purple-200 flex flex-col gap-2">
        <motion.div whileHover={{ scale: 1.02 }} className="bg-[#423A78] rounded-xl p-3">
          <div className="flex items-center justify-between text-purple-100">
            <div>
              <span className="font-semibold text-white">AI Suggestion</span>: You both seem low energy today — plan a walk together.
            </div>
            <Sparkles className="w-4 h-4 text-yellow-300" />
          </div>
        </motion.div>

        <motion.div className="flex justify-around text-[11px] text-purple-300 mt-2">
          <motion.div whileHover={{ scale: 1.2 }}>🔥 Streaks</motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>💖 15 Days</motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>🏆 Milestones</motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>🎯 Shared Goals</motion.div>
        </motion.div>
      </motion.footer>
    </motion.div>
  );
}

const Placeholder = ({ title }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45 }} className="min-h-screen flex flex-col items-center justify-center bg-[#2C225A] text-white">
    <motion.h2 initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ duration: 0.35 }} className="text-2xl font-semibold mb-2">{title}</motion.h2>
    <Link to="/" className="mt-4 text-sm underline text-purple-300">Back to Dashboard</Link>
  </motion.div>
);

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {showSplash ? (
        <SplashScreen key="splash" onFinish={() => setShowSplash(false)} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/chat" element={<Placeholder title="Private Couple Chat" />} />
            <Route path="/games" element={<Placeholder title="Intimacy Zone" />} />
            <Route path="/wishlist" element={<Placeholder title="Couple Shopping Hub" />} />
            <Route path="/tracker" element={<Placeholder title="Wellness & Period Tracking" />} />
            <Route path="/celebrations" element={<Placeholder title="Celebrations & Milestones" />} />
            <Route path="/insights" element={<Placeholder title="Relationship AI" />} />
          </Routes>
        </Router>
      )}
    </AnimatePresence>
  );
}
