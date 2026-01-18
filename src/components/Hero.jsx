export default function Hero() {
  return (
    <section 
    id="home"
    className="flex justify-center px-4">
      <div className="w-full max-w-5xl">

        {/* Hero Glass Panel */}
        <div
          className="
            mt-32
            relative rounded-2xl
            bg-gradient-to-br from-white/10 to-white/5
            backdrop-blur-2xl
            border border-white/20
            shadow-[0_20px_60px_rgba(0,0,0,0.6)]
            before:content-['']
            before:absolute before:inset-0
            before:rounded-2xl
            before:bg-gradient-to-br
            before:from-white/20 before:to-transparent
            before:opacity-10
            before:pointer-events-none
            p-10
          "
        >
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
              Syed Faiz
            </h1>

            <p className="mt-2 text-cyan-200 text-lg">
              Full Stack Web Developer | Data Scientist
            </p>

            <p className="mt-5 text-gray-300 leading-relaxed">
              I build interactive, performance-focused web experiences using modern web and data technologies.
            </p>

            <button
              className="
                mt-8 px-8 py-3 rounded-full
                bg-cyan-400 text-black font-semibold
                hover:scale-105 transition-all
                shadow-[0_0_25px_rgba(34,211,238,0.6)]
              "
            >
              Download Resume
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
