import { useEffect, useState } from "react";

const sections = ["home", "about", "info"];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-6 py-2 flex gap-6">
      {sections.map((item) => (
        <a
          key={item}
          href={`#${item}`}
          className={`capitalize transition ${
            active === item ? "text-cyan-400" : "text-white/70"
          }`}
        >
          {item}
        </a>
      ))}
    </nav>
  );
}
