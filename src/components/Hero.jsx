import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      {/* LEFT TEXT */}
      <div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-neonCyan drop-shadow-glow">
          Syed Faiz
        </h1>

        <p className="mt-4 text-xl text-white/80">
          Full Stack Developer | Junior Data Scientist
        </p>

        <div className="mt-6 flex gap-5 text-2xl text-white/70">
          <a href="#" className="hover:text-neonCyan transition">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-neonCyan transition">
            <FaGithub />
          </a>
          <a href="#" className="hover:text-neonCyan transition">
            <FaCode />
          </a>
        </div>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 rounded-xl bg-cyan-500/20 border border-cyan-400/40 backdrop-blur-xl hover:bg-cyan-400/30 hover:scale-105 transition-all">
            View Projects
          </button>
          <button className="px-6 py-3 rounded-xl bg-purple-500/20 border border-purple-400/40 backdrop-blur-xl hover:bg-purple-400/30 hover:scale-105 transition-all">
            Contact Me
          </button>
        </div>
      </div>

      {/* RIGHT PROFILE */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="flex justify-center"
      >
        <div className="relative w-72 h-72 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-neon overflow-hidden">
          <img
            src="/profile.jpg"
            alt="Syed Faiz"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
