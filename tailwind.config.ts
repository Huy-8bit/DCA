import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-banner": ' linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 30.86%), linear-gradient(180deg, #FF7122 0%, #EEA230 70%, #FFF3C8 100%)',
        "line": "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 220, 130, 0.44) 44%, rgba(255, 166, 61, 0.00) 100%)",
        "line_footer": "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 220, 130, 0.44) 44%, rgba(255, 166, 61, 0) 100%)",
        "card-hover": "linear-gradient(0deg, #F9E3B0 0%, #F9E3B0 100%)",
        "gradient-retangle": "radial-gradient(184.5% 115.57% at 24.58% 0%, #FFF6D6 0%, #EEC472 52.4%, #FF8F76 100%)",
        "border-gradient-backers": "linear-gradient(279.52deg, #000000 16.73%, #8E8282 40.68%, #493D3D 83.27%)",
        "earth-backers": 'radial-gradient(43.14% 41.35% at 48.2% 37.74%, rgba(0, 0, 0, 0.00) 0%, #000 100%)'
      },
      fontFamily: {
        'text-primary': ['Switzer, sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;
