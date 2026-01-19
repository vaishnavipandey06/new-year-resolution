/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        cyberDark: "#0a0a1a",
        cyberMid: "#1a0a2e",
        cyberPurple: "#2a0a3e",
        neonCyan: "#00d4ff",
        neonGreen: "#00ff88",
        neonPurple: "#aa66ff",
      },

      dropShadow: {
        glow: "0 0 25px #00d4ff",
        purpleGlow: "0 0 30px #aa66ff",
      },

      boxShadow: {
        glass: "0 8px 32px rgba(0, 212, 255, 0.15)",
        neon: "0 0 40px rgba(0, 212, 255, 0.35)",
      },

      backdropBlur: {
        xl: "40px",
      },

      fontFamily: {
        heading: ["Exo 2", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        pulseSlow: "pulse 4s ease-in-out infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },

  plugins: [],
};
