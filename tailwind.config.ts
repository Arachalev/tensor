import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      serif: [
        '"Times New Roman"',
        "i-serif",
        "Georgia",
        "Cambria",
        "Times",
        "serif",
      ],
      // plantagenet: ["Sora"],
    },
    extend: {
      fontFamily: {
        // inter: ["Inter"],
        // sora: ["Sora"],
        // plantagenet: ["Plantagenet"],
        avenir: ['var(--font-avenir)'],
      },
      colors: {
        darkGreen: "#005050",
        softBlue: "#E3F8F5",
        fadedBlue: "#F6FFFE",
        homeCircle: "#74DDD0",
        teal: "#74DDD0",
      },
    },
  },
  plugins: [],
};
export default config;
