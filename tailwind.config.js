module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ], 
  theme: { 
    extend: { 
      keyframes: { 
        waveAnimation: { 
          '0%': { transform: 'rotateZ(0deg)' }, 
          '15%': { transform: 'rotateZ(20deg)' }, 
          '30%': { transform: 'rotateZ(-10deg)' }, 
          '50%': { transform: 'rotateZ(0deg)' }, 
          '100%': { transform: 'rotateZ(0deg)' }, 
        } 
      },
      animation: { wave: 'waveAnimation 1.5s ease'}
    } 
  },
  plugins: [],
}