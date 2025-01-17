/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        catamaran: ['Catamaran', 'sans-serif'],
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        trianglePath: {
          "0%": { transform: "translate(0, 0)" },
          "33%": { transform: "translate(87px, -70px)" },
          "66%": { transform: "translate(-87px, -70px)" },
          "100%": { transform: "translate(0, 0)" },
        },
        rectanglePath: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(87px, -70px)" },
          "50%": { transform: "translate(-87px, -70px)" },
          "75%": { transform: "translate(-87px, 70px)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
      animation: {
        "slide-down": "slideDown 0.3s ease-in-out",
        "rotate-infinite": "rotate 9s linear infinite",
        "triangle-move": "trianglePath 12s linear infinite",
        "rectangle-move": "rectanglePath 12s linear infinite"
      },
    },
  },
  plugins: [],
};
