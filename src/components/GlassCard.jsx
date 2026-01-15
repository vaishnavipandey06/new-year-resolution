import { motion, useMotionValue, useTransform } from "framer-motion";

export default function GlassCard({ title, subtitle }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
      className="
        backdrop-blur-xl
        bg-white/10
        border border-white/20
        rounded-2xl
        p-6
        w-64
        text-white
        shadow-[0_0_40px_rgba(59,130,246,0.2)]
      "
    >
      <h3 className="text-xl font-semibold text-sky-400">
        {title}
      </h3>
      <p className="mt-2 text-sm text-white/80">
        {subtitle}
      </p>
    </motion.div>
  );
}


