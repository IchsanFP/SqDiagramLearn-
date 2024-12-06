/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        'primary': "#232946",
        'btn' : "#053B50",
        'nav-section' : '#F0F8FF',
        'notasi' : "#C9C9CF",
        'm-notasi' :"#85A6B7",
        'bd' : "#818490",
        'btn-home':"#EEBBC3",
        'secondary': "#C0C1C8",
        
      },
      fontFamily:{
        poppins : [ "Poppins" , "sans-serif" ],
        monst : ["Montserrat Alternates" ],
        quantico : ["Quantico", "sans-serif"],
      },
      screens: {
        '2xl': '1320px',  
      },
    },
  },
  plugins: [],
}
