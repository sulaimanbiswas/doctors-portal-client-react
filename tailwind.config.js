/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-pattern": "url('/src/assets/images/bg.png')",
        appointment: "url('/src/assets/images/appointment.png')",
        footer: "url('/src/assets/images/footer.png')",
      },
    },
  },
  daisyui: {
    themes: [
      "dark",
      {
        doctor: {
          primary: "#3A4256",
          secondary: "#19D3AE",
          accent: "#0FCFEC",
          neutral: "#F1F5F9",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
