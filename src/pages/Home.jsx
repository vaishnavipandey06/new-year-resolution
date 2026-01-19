import PageSkeleton from "../components/PageSkeleton";
import NeonNetworkBackground from "../components/NeonNetworkBackground";
import Hero from "../components/Hero";
import Sections from "../components/Sections";

export default function Home() {
  return (
    <PageSkeleton>
      {/* Page wrapper */}
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#1a0a2e] to-[#2a0a3e]">
        
        {/* Animated Neon Network Background */}
        <NeonNetworkBackground />

        {/* Foreground Content */}
        <main className="relative z-10">
          
          {/* HERO */}
          <section className="min-h-screen flex items-center justify-center px-6">
            <Hero />
          </section>

          {/* OTHER SECTIONS */}
          <section className="relative z-10">
            <Sections />
          </section>

        </main>
      </div>
    </PageSkeleton>
  );
}
