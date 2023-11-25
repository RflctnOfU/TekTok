import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        "main-bg": "url('/images/bg.jpg')",
        "logo-bg": "url('/images/logo1.png)",
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      colors: {
        "main-border": "#fcc139",
        "main-secondary": "#57372d",
        "main-tertiary": "#57482d",
        "btn-bg": "#57372d",
      },
    },
  },
  plugins: [],
} satisfies Config;
