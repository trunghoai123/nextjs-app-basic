/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grayf4: "#F4F4F4",
        grayfc: "#FCFCFC",
        gray80: "#808191",
        primaryText: "#11142D",
        primary: "#475BE8",
      },
      spacing: {
        c10: "10px",
      },
    },
  },
  plugins: [],
};
