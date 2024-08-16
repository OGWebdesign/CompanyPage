import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': "0px",
        // => @media (min-width: 0px) { ... }
        'tablet': "640px",
        // => @media (min-width: 640px) { ... }
        'laptop': "1024px",
        // => @media (min-width: 1024px) { ... }
        'desktop': "1280px",
        // => @media (min-width: 1280px) { ... }
        'desktop-l': "1920px",
        // => @media (min-width: 1280px) { ... }
        'desktop-xl': "2560px",
        // => @media (min-width: 1280px) { ... }
        'desktop-xxl': "3840px",
        // => @media (min-width: 1280px) { ... }
        'tablet-contact' : "702px",
      },
      animation:{
        ownpulse:'ownpulse 0.9s ease-in infinite',
        loading:'loading 6.5s ease-in-out infinite',
        fadeIn: 'fadeIn 300ms ease-in forwards',
        fadeOut: 'fadeOut 300ms ease-in forwards',
        progressInit: 'progressInit 1s ease-in forwards',
      },
      keyframes: {
        ownpulse:{
          '0%':{opacity:'100%'}, 
          '50%':{opacity:'30%'},
          '100%':{opacity:'100%'}
        },
        loading:{
          '0%':{transform:'translateX(0)'},
          '50%':{transform:'translateX(-200%)'},         
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        progressInit:{
          '0%':{width:'0rem'},
          '100%':{width:'5rem'}  
        },    
      },
      backgroundImage: { 
        "nils": "url('nils.png')",
        "max": "url('max.png')",
        "clouds" : "url('./public/background1.png')",
      },
    },
  },
  plugins: [],
}

