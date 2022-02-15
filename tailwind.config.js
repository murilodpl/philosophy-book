module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './index.html',
  ],
  theme: {
    container: {
      padding: '1rem',
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: '1500px',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1200px',
      'xl': '1500px'
    },
    fontFamily: {
      'sans': ['Nanum Gothic', 'sans-serif'],
      'display': ['Nanum Gothic', 'sans-serif'],
      'body': ['Nanum Gothic', 'sans-serif'],
    },
    extend: {
      colors: {
        "cgray": "#f5f5f5",
      },
    },
  },
  plugins: [],
}