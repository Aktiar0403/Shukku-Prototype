import SplashScreen from "../components/SplashScreen";
import Dashboard from "../components/Dashboard";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <SplashScreen />
      <Dashboard />
    </main>
  );
}