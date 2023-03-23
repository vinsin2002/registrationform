/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = (
  {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
      // 'node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
      // 'node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      colors: {
        proj: '#6243FE',
      },
      extend: {},
    },
    plugins: [
      require('flowbite/plugin')
  ],
  }
)
