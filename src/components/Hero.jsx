import { Github, Linkedin } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div
        className="
          relative w-full max-w-6xl
          grid grid-cols-1 md:grid-cols-2 gap-12
          bg-white/5 backdrop-blur-xl
          border border-white/10 rounded-3xl
          px-12 py-16
        "
      >
        {/* LEFT TEXT */}
        <div className="flex flex-col justify-center">
          <p className="text-white/60 mb-2">Hi there, I’m</p>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">Syed </span>
            <span className="text-cyan-400">Faiz</span>
          </h1>

          <p className="text-white/70 mb-4">
            Full Stack Developer · Junior Data Scientist
          </p>

          <p className="text-white/50 max-w-md mb-8">
            I build scalable web applications and data-driven solutions
            using React, Node.js, and Python.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex gap-4 mb-6">
            <button
              className="
                px-6 py-3 rounded-xl
                bg-cyan-500/20 text-cyan-400
                border border-cyan-400/30
                hover:bg-cyan-500/30 transition
              "
            >
              View Projects
            </button>

            <button
              className="
                px-6 py-3 rounded-xl
                bg-purple-500/20 text-purple-300
                border border-purple-400/30
                hover:bg-purple-500/30 transition
              "
            >
              Resume
            </button>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 text-white/70">
            <a
              href="https://github.com/"
              target="_blank"
              className="hover:text-cyan-400 transition"
            >
              <Github size={22} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="hover:text-cyan-400 transition"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="https://leetcode.com/"
              target="_blank"
              className="hover:text-cyan-400 transition"
            >
              <SiLeetcode size={22} />
            </a>
          </div>
        </div>

        {/* RIGHT PROFILE */}
        <div className="flex items-center justify-center">
          <div className="relative">
            {/* Neon ring */}
            <div className="absolute inset-0 rounded-full border border-cyan-400/40 blur-sm" />

            {/* Profile image */}
            <img
              src="/profile.jpg"
              alt="Syed Faiz"
              className="
                w-56 h-56 md:w-64 md:h-64
                rounded-full
                object-cover
                bg-white/10
                border border-white/20
                relative z-10
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
