
module.exports = {
  content: [
    './src/components/**/*.{js,jsx,ts,tsx}', 
    './src/pages/**/*.{js,jsx,ts,tsx}', 
    './src/app/**/*.{js,jsx,ts,tsx}',       
    './src/**/*.{js,jsx,ts,tsx}'            
  ],
  theme: {
    screens: {
      'sm': '280px',
      // => @media (min-width: 640px) { ... }

      'md': '640px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
};

