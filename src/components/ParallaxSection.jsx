import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function ParallaxSection({ children, offset = 120 }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  // Smooth horizontal parallax
  const xRaw = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  const x = useSpring(xRaw, {
    stiffness: 60,
    damping: 20,
    mass: 0.8,
  });

  // Elegant reveal
  const opacity = useTransform(scrollYProgress, [0, 0.25, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);

  return (
    <section
      ref={ref}
      className="min-h-[70vh] flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ x, opacity, scale }}
        className="flex gap-8 will-change-transform"
      >
        {children}
      </motion.div>
    </section>
  );
}
