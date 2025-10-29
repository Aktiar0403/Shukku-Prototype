"use client";
import { useEffect, useState } from "react";
import SplashScreen from "../components/SplashScreen";
import Dashboard from "../components/Dashboard";

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(t);
  }, []);

  return showSplash ? <SplashScreen /> : <Dashboard />;
}
