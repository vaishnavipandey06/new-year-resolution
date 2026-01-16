export default function Hero() {
  return (
    <div className="w-full max-w-4xl text-center relative z-10">

      {/* Glass Card */}
      <div
        className="
          relative rounded-2xl
          bg-gradient-to-br from-white/10 to-white/5
          backdrop-blur-2xl
          border border-white/20
          shadow-[0_20px_60px_rgba(0,0,0,0.6)]
          before:content-['']
          before:absolute before:inset-0
          before:rounded-2xl
          before:bg-gradient-to-br
          before:from-white/20 before:to-transparent
          before:opacity-10
          before:pointer-events-none
          p-10
        "
      >
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
          Syed Faiz
        </h1>

        <p className="mt-2 text-cyan-200 text-lg">
          Frontend Developer | 3D Web Enthusiast
        </p>

        <p className="mt-5 max-w-2xl mx-auto text-gray-300 leading-relaxed">
          I build interactive, performance-focused web experiences with React and 3D graphics.
        </p>

        <button className="
          mt-8 px-8 py-3 rounded-full
          bg-cyan-400 text-black font-semibold
          hover:scale-105 transition-all
          shadow-[0_0_25px_rgba(34,211,238,0.6)]
        ">
          Download Resume
        </button>
      </div>

      {/* Feature Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Feature
          title="Frontend Developer"
          desc="React • Three.js • Tailwind"
        />

        <Feature
          title="3D Experiences"
          desc="Interactive • Cinematic"
        />

        <Feature
          title="Projects"
          desc="Modern Web & UI"
        />
      </div>
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="
      rounded-xl
      bg-white/5 backdrop-blur-md
      border border-white/10
      p-6 shadow-lg
      hover:scale-105 transition
    ">
      <h3 className="text-cyan-300 font-semibold text-lg">
        {title}
      </h3>
      <p className="mt-2 text-gray-300 text-sm">
        {desc}
      </p>
    </div>
  );
}
