/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'prim-white': '#EDF1F1',
        'prim-gray': '#CDD9DC',
        'prim-lblue': '#199BE4',
        'prim-dblue': '#001B93',
        'prim-black': '#071025'
      },
      height: {
        0.1: '0.1px'
      },
      minWidth: {
        custom: '200px' // Reemplaza '200px' con el valor que desees
      }
    }
  },
  plugins: []
}
