import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section className="min-h-screen px-6 pt-32">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* PAGE TITLE */}
        <h1 className="text-4xl font-semibold text-white text-center">
          Skills
        </h1>

        {/* PROBLEM SOLVING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
        >
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
            Problem Solving
          </h2>
          <p className="text-white/70 leading-relaxed">
            Actively practicing Data Structures & Algorithms with a strong focus
            on building core fundamentals, writing optimized solutions, and
            maintaining clean, readable code. Regularly solving problems on
            platforms like LeetCode to improve logical thinking and performance.
          </p>
        </motion.div>

        {/* TECH STACK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
        >
          <h2 className="text-2xl font-semibold text-purple-400 mb-4">
            Technical Skills
          </h2>
          <p className="text-white/70 leading-relaxed">
            React, Tailwind CSS, Framer Motion, Node.js, Express, REST APIs,
            MongoDB, PostgreSQL, Python, Pandas, NumPy, Machine Learning basics,
            Git, GitHub, Docker.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
