/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        segoe: ["SegoeUI", "sans-serif"],
        segoeBold: ["SegoeUIBold", "sans-serif"],
      },
      colors: {
        palingdasar: "#FAFFF6",
        dasar1: "#D2E3C8", // warna utama
        dasar2: "#86A789", // warna sekunder
        dasar3: "#739072", // warna sekunder
        main: "#4F6F52", // warna sekunder
      },
      backgroundImage: {
        "hero-dashboard": "url('/src/HIMATEPA/assets/heroimagedashboard.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
        "fast-food": "url('/src/HIMATEPA/assets/fastfood.png')",
        "see-more": "url('/src/HIMATEPA/assets/seemore.png')",
        "tik-tok": "url('/src/HIMATEPA/assets/ic_baseline-tiktok.png')",
        "e-mail": "url('/src/HIMATEPA/assets/ic_baseline-email.png')",
        "insta-gram": "url('/src/HIMATEPA/assets/lets-icons_insta.png')",
        "linked-in": "url('/src/HIMATEPA/assets/mdi_linkedin.png')",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 10s linear infinite",
      },
    },
  },
  plugins: [],
};
