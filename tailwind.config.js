/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        title_color :'#333333',
        yelow:'#FFD700',
        title_color_dark :'#000000',
        text_color:'#757575',
        body_color:'#fafafa',
      },
      fontFamily: {
        custom: ['Poppins', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

