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
        float: 'float 3s ease-in-out infinite',
        flyacross: 'fly-across 2s ease-in-out infinite',
        flyoffscreen: 'flyoffscreen 3s ease-in-out forwards',
        flyIn: 'flyIn 3s ease-out forwards',
        
      },
      keyframes: {
        flyIn: {
          '0%': { transform: 'translateY(-200%)' },
          '50%': { transform: 'translateY(10%)' },
          '100%': { transform: 'translateY(0)' },
        },
        flyoffscreen: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '20%': { transform: 'translate(100px, -50px) rotate(20deg)' },
          '40%': { transform: 'translate(300px, 100px) rotate(-15deg)' },
          '60%': { transform: 'translate(-400px, -200px) rotate(30deg)' },
          '80%': { transform: 'translate(800px, -150px) rotate(-25deg)' },
          '100%': { transform: 'translate(1200px, -1400px) rotate(60deg)' },
        },
        ownpulse:{
          '0%':
          {
            opacity:'100%'
          }, 
          '50%':
          {
            opacity:'30%'
          },
          '100%':
          {
            opacity:'100%'
          }
        },
        loading:{
          '0%':
          {
            transform:'translateX(0)'
          },
          '50%':{
            transform:'translateX(-200%)'
          },         
        },
        fadeIn: {
          '0%': 
          { 
            opacity: '0' 
          },
          '100%': 
          { 
            opacity: '1' 
          },
        },
        fadeOut: {
          '0%': 
          { 
            opacity: '1' 
          },
          '100%': 
          { 
            opacity: '0' 
          },
        },
        progressInit:{
          '0%':
          {
            width:'0rem'
          },
          '100%':
          {
            width:'5rem'
          }  
        },    
        float: {
          '0%, 100%': 
          { 
            transform: 'translateY(0)' 
          },
          '50%': 
          { 
            transform: 'translateY(-15px)' 
          },
        },
      },
      backgroundImage: { 
        "nils": "url('nils.png')",
        "max": "url('max.png')",
        "footer" : "url('./footer-bg.webp')",
      },
      fontFamily:{
        "sharemono" : ["Share Tech Mono", "normal"],
      }
    },
  },
  plugins: [],
}

