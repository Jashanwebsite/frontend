/** @type {import('tailwindcss').Config} */
export default {
  prefix:[""],
  content: ["index.html","./src/**/*.{js,jsx,ts,tsx}",'node_modules/flowbite-react/lib/esm/**/*.js'],
  plugins: [    require('flowbite/plugin')],
    darkMode: 'class',
  }
  


