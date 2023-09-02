/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  daisyui: {
    themes: [
        {
            mytheme: {
                primary: "#CA8E46",

                secondary: "#E8E8E8",

                neutral: "#1F2937",

                "base-100": "#000000",
            },
        },
    ],
},
plugins: [require("daisyui")],
}