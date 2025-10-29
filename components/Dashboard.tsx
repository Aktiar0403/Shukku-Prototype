"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MessageCircle,
  Heart,
  Sparkles,
  ShoppingBag,
  Brain,
  Activity,
  Calendar
} from "lucide-react";
import FooterBar from "./FooterBar";

const Tile = ({
  icon: Icon,
  title,
  link,
  delay
}: {
  icon: any;
  title: string;
  link: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
    className="glass p-4 rounded-2xl shadow-[0_0_20px_rgba(236,72,153,0.25)] hover:scale-[1.04] transition transform"
  >
    <Link href={link} className="flex flex-col items-center justify-center text-center">
      <Icon className="w-7 h-7 mb-2" />
      <div className="font-semibold text-sm">{title}</div>
    </Link>
  </motion.div>
);

export default function Dashboard() {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-between bg-[#2C225A] relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Floating background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 blur-[100px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/30 blur-[120px] rounded-full animate-pulse"></div>

      {/* Header */}
      <header className="z-10 text-center py-6">
        <h1 className="text-2xl font-bold">Our Space</h1>
        <p className="text-xs text-purple-300">Two Souls. One Space.</p>
      </header>

      {/* Dashboard grid */}
      <main className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-6 z-10 max-w-md mx-auto">
        <Tile icon={MessageCircle} title="Private Chat" link="/chat" delay={0.1} />
        <Tile icon={Heart} title="Mood Mirror" link="/dashboard" delay={0.2} />
        <Tile icon={Sparkles} title="Intimacy Zone" link="/games" delay={0.3} />
        <Tile icon={ShoppingBag} title="Couple Shop" link="/wishlist" delay={0.4} />
        <Tile icon={Brain} title="Relationship AI" link="/insights" delay={0.5} />
        <Tile icon={Activity} title="Wellness Tracker" link="/tracker" delay={0.6} />
        <Tile icon={Calendar} title="Anniversary" link="/celebrations" delay={0.7} />
      </main>

      <FooterBar />
    </motion.div>
  );
}
