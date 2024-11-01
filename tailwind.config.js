/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dasar1: "#D2E3C880", // warna utama
        dasar2: "#86A789", // warna sekunder
        dasar3: "#739072", // warna sekunder
        main: "#4F6F52", // warna sekunder
      },
    },
  },
  plugins: [],
};
