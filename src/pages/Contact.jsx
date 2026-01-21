import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  return (
    <section className="min-h-screen pt-32 px-6 bg-[#0a0a1a]">
      <div className="max-w-4xl mx-auto">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold text-white mb-6 text-center"
        >
          Contact
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/70 text-center max-w-2xl mx-auto mb-12"
        >
          I’m currently open to Full Stack and Junior Data Science roles (2026+).
          Let’s build something meaningful.
        </motion.p>

        {/* GLASS CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            bg-white/5 backdrop-blur-xl
            border border-white/10
            rounded-3xl
            p-10
            text-center
          "
        >

          {/* EMAIL */}
          <div className="flex items-center justify-center gap-3 mb-8 text-white">
            <Mail className="text-cyan-400" />
            <span className="text-white/80">
              syedfaiz.dev@gmail.com
            </span>
          </div>

          {/* ICON LINKS */}
          <div className="flex justify-center gap-6 mb-10">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              className="p-4 rounded-full bg-white/10 border border-white/20
              hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              className="p-4 rounded-full bg-white/10 border border-white/20
              hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              <Github size={20} />
            </a>

            <a
              href="https://leetcode.com"
              target="_blank"
              className="p-4 rounded-full bg-white/10 border border-white/20
              hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              <SiLeetcode size={18} />
            </a>
          </div>

          {/* RESUME BUTTON */}
          <a
            href="/resume.pdf"
            target="_blank"
            className="
              inline-flex items-center gap-2
              px-8 py-3
              rounded-xl
              bg-cyan-500/20
              text-cyan-400
              border border-cyan-400/30
              hover:bg-cyan-500/30
              transition
            "
          >
            <FileText size={18} />
            Download Resume
          </a>

        </motion.div>

        {/* LOCATION */}
        <p className="mt-10 text-center text-white/40 text-sm">
          Bengaluru, India
        </p>
      </div>
    </section>
  );
}
