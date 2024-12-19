/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/**/*.{html,js}"],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#111111",
      },
      secondary: {
        DEFAULT: "#727173",
      },
      tertiary: " #A1A1A1",
      dark: {
        DEFAULT: "#1b1b1d",
      },
      border: {
        DEFAULT: "#434244",
        secondary: "#212023",
      },
      blue: {
        DEFAULT: "#158FD5",
        secondary: "#15161a",
      },
      table: {
        DEFAULT: "#211f24",
        secondary: "#19191b",
      },
    },
    backgroundImage: {
      linear: "linear-gradient(180deg, rgba(25, 24, 26, 0.5) 0%, rgba(20, 19, 21, 0.5) 100%)",
    },
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
      "6xl": "3.75rem", // 60px
      "7xl": "4.5rem", // 72px
      "8xl": "6rem", // 96px
      "9xl": "8rem", // 128px
      15: "0.938rem", // 15px
      56: "3.5rem", // 56px
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      maxWidth: {
        desktop: "1440px",
      },
    },
    fontFamily: {
      inter: ['"Inter"', "sans-serif"],
    },
  },
  plugins: [],
};
