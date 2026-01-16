import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#020617] overflow-hidden">
      
      {/* Ambient light behind glass */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_60%)]" />

      <Hero />
    </div>
  );
}
