module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
          blue: {
            congreso100: '#d3e3eb',
            congreso200: '#568c9f',
          },
          red: {
            congreso99:  '#ecc2b9',
            congreso100: '#ef8a76',
            congreso200: '#df664e',
            congreso300: '#782717',
          },
          pink: {
            congreso100: '#f7beb3',
          },
        yellow: {
            congreso98: '#fffce0',
            congreso99: '#fcf6c4',
            congreso100: '#fdf094',
          },
          gray: {
            congreso100: '#a7b0bc',
          }
      },
      fontFamily: {
        'Blackout': ['Blackout', 'Helvetica', 'Arial', 'sans-serif'],
        'Midnight': ['Midnight', 'Helvetica', 'Arial', 'sans-serif'],
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
