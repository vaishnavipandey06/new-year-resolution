export default function GlassCard({ title, desc }) {
  return (
    <div
      className="
        min-w-[320px]
        h-[220px]
        rounded-2xl
        bg-white/10 backdrop-blur-xl
        border border-white/20
        p-8
        flex flex-col justify-center items-center
        text-center
        shadow-[0_20px_40px_rgba(0,0,0,0.5)]
        transition-transform duration-300
        hover:scale-[1.03]
      "
    >
      <h3 className="text-xl font-semibold text-cyan-300">{title}</h3>
      <p className="mt-3 text-sm text-white/70 leading-relaxed">{desc}</p>
    </div>
  );
}
