/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      pallete: {
        primary: "#699361", //284551
        background: "#fbf0e3", // ffffff
        header: "#699361",
        accent: "#8bc360", //20cf75
        imp: "#e9b96b", //e9b96b
        himp: "#e9b96b",
      },
    },
    extend: {},
  },
  plugins: [],
};
