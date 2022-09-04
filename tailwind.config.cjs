/** @type {import('tailwindcss').Config} */

module.exports = {
 
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  variants: {
    extend: {},
  },
  theme: {
   
    extend: {
    	colors: {
    		primary: "#0F1829",
    		secondary: "#112130",
    	},
    	fontSize: {
    		'xxs': '.45rem'
    	}
    },
  },
  plugins: [
    
  ],
}