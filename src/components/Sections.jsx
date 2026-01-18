import { useRef } from "react";
import GlassCard from "./GlassCard";

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
      className="snap-start pt-16 pb-24 px-6"
    >
      {/* Section title */}
      <h2 className="text-center text-2xl font-semibold mb-8 text-white/90">
        What I Do
      </h2>

      {/* Scroll buttons */}
      <div className="relative max-w-6xl mx-auto">
        <button
          onClick={() => scroll("left")}
          className="
            absolute -left-4 top-1/2 -translate-y-1/2 z-10
            bg-white/10 backdrop-blur-lg
            border border-white/20
            rounded-full w-10 h-10
            flex items-center justify-center
            hover:bg-white/20 transition
          "
        >
          ◀
        </button>

        <button
          onClick={() => scroll("right")}
          className="
            absolute -right-4 top-1/2 -translate-y-1/2 z-10
            bg-white/10 backdrop-blur-lg
            border border-white/20
            rounded-full w-10 h-10
            flex items-center justify-center
            hover:bg-white/20 transition
          "
        >
          ▶
        </button>

        {/* Horizontal scroll grid */}
        <div
          ref={scrollRef}
          className="
            flex gap-6
            overflow-x-auto
            scroll-smooth
            scrollbar-hide
            px-10
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
