import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-footer":
          "linear-gradient(272.94deg,rgba(223, 255, 210, 0.1) 0%, rgba(9, 123, 47, 0.4) 105.83%);",
      },
      colors: {
        bgColorMain: "rgb(238 234 215)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        monosdf: ["var(--font-roboto-mono)"],
        opensans: ["var(--font-open-sans)"],
        monofet: ["var(--font-mono-fet)"],
        saira: ["var(--font-saira)"],
        tangerine: ["var(--font-tangerine)"],
        DMSerifText: ["var(--font-DMSerifText)"],
      },
    },
  },
  plugins: [],
};
export default config;
