import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // dark navy - hero buttons, boxes, footer
        navy: "#1C265B",
        // muted navy - project/design tile boxes
        "navy-muted": "#2B325C",
        // light blue - text inside hero nav buttons
        "navy-light": "#8898C8",
        // pink accents - subtitles, obsession link, streak number
        "pink-accent": "#FFCAD3",
        // gradient endpoints
        "grad-top": "#F37689",
        "grad-bottom": "#FF7E80",
      },
      fontFamily: {
        display: ["var(--font-hind-madurai)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "page-gradient":
          "linear-gradient(180deg, #F37689 0%, #FF7E80 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
