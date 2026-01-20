import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend Development",
    color: "cyan",
    items: ["React", "Tailwind CSS", "Framer Motion", "Three.js"],
  },
  {
    title: "Backend Development",
    color: "purple",
    items: ["Node.js", "Express", "REST APIs", "Authentication"],
  },
  {
    title: "Databases",
    color: "emerald",
    items: ["MongoDB", "PostgreSQL", "Schema Design"],
  },
  {
    title: "Data Science",
    color: "blue",
    items: ["Python", "Pandas", "NumPy", "Machine Learning"],
  },
  {
    title: "Problem Solving",
    color: "pink",
    items: ["DSA", "Algorithms", "LeetCode", "Optimization"],
  },
];

export default function Skills() {
  return (
    <div className="relative min-h-screen bg-[#0a0a1a] px-6 py-24">
      
      {/* PAGE TITLE */}
      <h1 className="text-center text-4xl font-semibold text-white mb-16">
        Skills
      </h1>

      {/* SKILLS LIST */}
      <div className="max-w-3xl mx-auto space-y-6">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6"
          >
            {/* NEON SIDE LINE */}
            <span
              className={`absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-${skill.color}-400`}
            />

            {/* CONTENT */}
            <h2 className="text-xl font-semibold text-white mb-3">
              {skill.title}
            </h2>

            <p className="text-sm text-white/70 leading-relaxed">
              {skill.items.join(" • ")}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
