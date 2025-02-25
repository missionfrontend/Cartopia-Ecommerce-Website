/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    screens:{
     sm:"648px",
     md:"768px",
     lg:"1024px"
    },
    extend: {
      colors: {
       primary:{
        100:"#DFF8EB"
       }
      },
     
    },
  },
  plugins: [],
};
