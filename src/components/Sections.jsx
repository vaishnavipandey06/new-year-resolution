import { motion } from "framer-motion";
import { useRef } from "react";
import GlassCard from "./GlassCard";

/* ===== Grid cards data ===== */
const gridItems = [
  {
    title: "Full Stack Development",
    desc: "React, Node.js, APIs, Databases",
  },
  {
    title: "Data Science",
    desc: "Python, Pandas, ML, Visualization",
  },
  {
    title: "Problem Solving",
    desc: "DSA, Algorithms, Clean Code",
  },
];

export default function Sections() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="about"
      className="snap-start pt-20 pb-28 px-6"
    >
      {/* ================= TITLE ================= */}
      <h2 className="text-center text-3xl font-semibold mb-14 text-white/90">
        What I Do
      </h2>

      {/* ================= GRID SECTION ================= */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 mb-24">
        {gridItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            className="
              rounded-2xl
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              p-8
              text-center
              shadow-glass
              hover:scale-105
              transition
            "
          >
            <h3 className="text-xl font-semibold text-neonCyan">
              {item.title}
            </h3>
            <p className="mt-3 text-white/70 text-sm">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ================= HORIZONTAL SCROLL ================= */}
      <div className="relative max-w-6xl mx-auto">
        {/* Left arrow */}
        <button
          onClick={() => scroll("left")}
          className="
            absolute -left-5 top-1/2 -translate-y-1/2 z-10
            bg-white/10 backdrop-blur-lg
            border border-white/20
            rounded-full w-10 h-10
            flex items-center justify-center
            hover:bg-white/20 transition
          "
        >
          ◀
        </button>

        {/* Right arrow */}
        <button
          onClick={() => scroll("right")}
          className="
            absolute -right-5 top-1/2 -translate-y-1/2 z-10
            bg-white/10 backdrop-blur-lg
            border border-white/20
            rounded-full w-10 h-10
            flex items-center justify-center
            hover:bg-white/20 transition
          "
        >
          ▶
        </button>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="
            flex gap-6
            overflow-x-auto
            scroll-smooth
            scrollbar-hide
            px-12
            py-4
          "
        >
          <GlassCard
            title="Frontend Developer"
            desc="React • Tailwind • Motion • Clean UI"
          />

          <GlassCard
            title="3D Web"
            desc="Three.js • R3F • Cinematic Layouts"
          />

          <GlassCard
            title="Problem Solver"
            desc="DSA • Performance • Architecture"
          />

          <GlassCard
            title="Projects"
            desc="Real-world • Scalable • Polished"
          />
        </div>
      </div>
    </section>
  );
}
