import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a0a1a] via-[#1a0a2e] to-[#2a0a3e] text-white px-6 pt-32 pb-24">
      
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,212,255,0.12),transparent_60%)]" />

      <div className="relative max-w-5xl mx-auto space-y-20">

        {/* ABOUT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            rounded-3xl
            bg-white/10 backdrop-blur-2xl
            border border-white/20
            px-10 py-12
            shadow-[0_20px_60px_rgba(0,0,0,0.6)]
          "
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">About </span>
            <span className="text-cyan-400">Me</span>
          </h1>

          <p className="text-white/80 leading-relaxed mb-6">
            I am <span className="text-white font-medium">Syed Faiz</span>, a
            <span className="text-cyan-300"> Full Stack Web Developer</span> with
            a strong foundation in <span className="text-purple-300">data science</span>
            and problem-solving. I focus on building scalable, maintainable web
            applications using modern technologies.
          </p>

          <p className="text-white/70 leading-relaxed mb-6">
            My experience includes frontend development with React, backend
            systems using Node.js, and data-driven development using Python.
            I enjoy working on solutions that require both engineering discipline
            and analytical thinking.
          </p>

          <p className="text-white/70 leading-relaxed">
            I continuously improve my skills through hands-on projects, DSA
            practice, and real-world problem solving. I value clean code,
            performance, and long-term scalability in every project I build.
          </p>
        </motion.div>

        {/* CORE STRENGTHS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            rounded-3xl
            bg-white/5 backdrop-blur-xl
            border border-white/15
            px-10 py-12
          "
        >
          <h2 className="text-2xl font-semibold mb-8 text-cyan-300">
            Core Strengths
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/80">
            <li>• Full Stack Web Development (React, Node.js, REST APIs)</li>
            <li>• Data Analysis & Python Programming</li>
            <li>• Strong DSA & Problem-Solving Fundamentals</li>
            <li>• Clean Code & Scalable Architecture</li>
            <li>• Project-Based Learning & Rapid Iteration</li>
            <li>• Version Control & Collaborative Development</li>
          </ul>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            text-center
            rounded-3xl
            bg-white/10 backdrop-blur-xl
            border border-white/20
            px-10 py-12
          "
        >
          <h3 className="text-2xl font-semibold text-cyan-300 mb-4">
            Open to Full Stack & Data Opportunities
          </h3>

          <p className="text-white/70 mb-8">
            Looking for roles where I can contribute, learn, and grow as a software professional.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/resume.pdf"
              className="px-6 py-3 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-400/30 hover:bg-cyan-500/30 transition"
            >
              Download Resume
            </a>

            <a
              href="mailto:your@email.com"
              className="px-6 py-3 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-400/30 hover:bg-purple-500/30 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
