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
    },
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        darkGreen: "#005050",
        softBlue: "#E3F8F5",
        fadedBlue: "#F6FFFE",
        homeCircle:"#74DDD0"
      },
    },
  },
  plugins: [],
};
export default config;
