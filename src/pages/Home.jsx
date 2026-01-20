import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import NeonNetworkBackground from "../components/NeonNetworkBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a1a]">
      <NeonNetworkBackground />
      <Hero />
    </div>
  );
}
