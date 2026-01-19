import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  {
    title: "Full Stack Web",
    items: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL"],
    color: "cyan",
  },
  {
    title: "Data Science",
    items: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    color: "green",
  },
  {
    title: "DSA Foundations",
    items: ["Arrays", "Strings", "Two Pointers", "Stacks", "HashMaps"],
    color: "purple",
  },
  {
    title: "Tools & Workflow",
    items: ["TailwindCSS", "GitHub", "Docker", "Jupyter", "Neovim"],
    color: "cyan",
  },
];

export default function About() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#1a0a2e] to-[#2a0a3e] text-white">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,212,255,0.15),transparent_60%)]" />

      {/* container */}
      <div className="relative max-w-[1280px] mx-auto px-6 pt-32 pb-32 space-y-32">

        {/* ================= HERO ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">

          {/* profile card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="w-[320px] h-[320px] rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_30px_80px_rgba(0,212,255,0.25)] flex items-center justify-center">
              <span className="text-white/40 text-sm">
                Profile Image
              </span>
            </div>
          </motion.div>

          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-3 space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-cyan-400 tracking-wide">
              Syed Faiz
            </h1>

            <h2 className="text-xl md:text-2xl text-cyan-200">
              Full Stack Developer | Junior Data Scientist
            </h2>

            <h3 className="text-sm md:text-base text-purple-300">
              Python DSA • React • ML • CMR University CS
            </h3>

            <p className="max-w-xl text-gray-300 leading-relaxed">
              Building scalable web applications and data-driven systems
              with clean architecture and strong problem-solving foundations.
            </p>
          </motion.div>
        </div>

        {/* ================= SKILLS ================= */}
        <div className="space-y-16">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-3xl md:text-4xl font-semibold text-cyan-300"
          >
            Technical Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {skills.map((skill, i) => (
              <SkillCard key={skill.title} skill={skill} delay={i * 0.1} />
            ))}
          </div>
        </div>

        {/* ================= CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-12 text-center shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-cyan-300">
            Open for Full Stack / Data Roles (2026+)
          </h2>

          <p className="mt-4 text-gray-300">
            Web apps • Data insights • Scalable systems
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <button className="px-8 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition">
              Get Resume
            </button>

            <button className="px-8 py-3 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 transition">
              LinkedIn
            </button>

            <button className="px-8 py-3 rounded-full border border-purple-400 text-purple-300 hover:bg-purple-400/10 transition">
              GitHub
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

/* ================= SKILL CARD ================= */

function SkillCard({ skill, delay }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 cursor-pointer hover:shadow-[0_0_40px_rgba(0,212,255,0.25)] transition"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-cyan-300">
          {skill.title}
        </h3>
        <span className="text-cyan-400 text-xl">
          {open ? "–" : "+"}
        </span>
      </div>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="mt-4 flex flex-wrap gap-3">
          {skill.items.map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full text-xs bg-white/10 border border-white/20"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
