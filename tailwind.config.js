/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'battle': ['Anton', 'sans-serif'],
        'tech': ['Roboto Condensed', 'sans-serif'],
        'future': ['Exo 2', 'sans-serif'],
        'space': ['Orbitron', 'monospace'],
        'main': ['Inter', 'sans-serif'],
      },
      colors: {
        israel: {
          primary: '#0038B8',
          secondary: '#FFFFFF',
          accent: '#00A651'
        },
        iran: {
          primary: '#239F40',
          secondary: '#FFFFFF',
          accent: '#DA0000'
        },
        war: {
          background: '#0A0A0A',
          surface: '#1A1A1A',
          border: '#333333',
          text: '#FFFFFF'
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'battle': 'battle 0.5s ease-in-out infinite alternate',
        'explosion': 'explosion 0.6s ease-out',
        'wave': 'wave 3s ease-in-out infinite',
        'energy-pulse': 'energyPulse 2s ease-in-out infinite',
        'energy-pulse-green': 'energyPulseGreen 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'shine': 'shine 0.5s ease-in-out',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6' },
          '100%': { boxShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0073e6' }
        },
        battle: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' }
        },
        explosion: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '50%': { transform: 'scale(1.2)', opacity: '0.8' },
          '100%': { transform: 'scale(2)', opacity: '0' }
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(2deg)' },
          '75%': { transform: 'rotate(-2deg)' }
        },
        energyPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 56, 184, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 56, 184, 0.8)' }
        },
        energyPulseGreen: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(35, 159, 64, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(35, 159, 64, 0.8)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)', opacity: '1' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)', opacity: '0.5' }
        },
        scan: {
          '0%': { top: '0%' },
          '100%': { top: '100%' }
        },
        shine: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' }
        }
      }
    },
  },
  plugins: [],
} 