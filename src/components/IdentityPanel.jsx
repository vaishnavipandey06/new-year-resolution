import { motion } from "framer-motion";

export default function IdentityPanel() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="pointer-events-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-10 py-8 shadow-2xl"
      >
        <h1 className="text-5xl font-bold text-cyan-400 tracking-wide">
          Syed Faiz
        </h1>

        <p className="mt-3 text-lg text-cyan-200">
          Frontend Developer | 3D Web Enthusiast
        </p>

        <p className="mt-4 text-gray-300 max-w-xl">
          I build interactive, performance-focused web experiences with React and
          3D graphics.
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/resume.pdf"
          className="inline-block mt-6 px-8 py-3 rounded-full bg-cyan-500 text-black font-semibold shadow-lg shadow-cyan-500/30"
        >
          Download Resume
        </motion.a>
      </motion.div>

      {/* Feature Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Frontend Developer",
            desc: "React • Three.js • Tailwind",
          },
          {
            title: "3D Experiences",
            desc: "Interactive • Cinematic",
          },
          {
            title: "Projects",
            desc: "Modern Web & UI",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl px-6 py-5 text-center text-cyan-200 shadow-xl"
          >
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="text-sm text-gray-300 mt-2">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
