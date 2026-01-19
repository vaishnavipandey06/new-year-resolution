import { motion } from "framer-motion";

const glassBase =
  "backdrop-blur-xl border border-white/20 rounded-xl shadow-lg";

function Card({ title, items, highlight = false }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -4 }}
      transition={{ type: "spring", stiffness: 200 }}
      className={`
        ${glassBase}
        ${highlight ? "bg-cyan-400/20" : "bg-white/10"}
        p-4 w-64
      `}
    >
      <h3 className="text-cyan-300 font-semibold mb-2">{title}</h3>
      <ul className="text-sm text-gray-200 space-y-1">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function SkillsMindMap() {
  return (
    <motion.div
      className="relative w-full overflow-x-auto scrollbar-hide"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="min-w-[1100px] flex items-center gap-20 py-10">

        {/* LEFT ROOT */}
        <Card
          title="Technical Skills"
          items={[
            "Problem Solving",
            "System Thinking",
            "Clean Architecture",
            "Scalable Design",
          ]}
          highlight
        />

        {/* CONNECTOR */}
        <Connector />

        {/* MIDDLE COLUMN */}
        <div className="flex flex-col gap-10">
          <Card
            title="Full Stack Web"
            items={["React", "Node.js", "Express", "MongoDB", "PostgreSQL"]}
          />
          <Card
            title="Data Science"
            items={[
              "Python",
              "Pandas",
              "NumPy",
              "Scikit-learn",
              "Matplotlib",
            ]}
            highlight
          />
        </div>

        {/* CONNECTOR */}
        <Connector />

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-10">
          <Card
            title="DSA Foundations"
            items={[
              "Arrays",
              "Strings",
              "Stacks",
              "Queues",
              "HashMaps",
              "Binary Search",
            ]}
          />
          <Card
            title="Tools"
            items={[
              "Tailwind CSS",
              "Git / GitHub",
              "Docker",
              "Jupyter",
              "Neovim",
            ]}
          />
        </div>
      </div>
    </motion.div>
  );
}

function Connector() {
  return (
    <div className="h-[1px] w-16 border-t-2 border-dashed border-cyan-400/40" />
  );
}
