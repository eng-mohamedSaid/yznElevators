/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors based on the original design
        primary: {
          dark: '#030a14',
          blue: '#0b2541',
          light: '#1a4a6b'
        },
        // Accent color
        accent: {
          DEFAULT: '#f68a22',
          dark: '#d4771d',
          light: '#f89e4a'
        },
        // Glass effect colors
        glass: {
          bg: 'rgba(11, 37, 65, 0.3)',
          border: 'rgba(255, 255, 255, 0.1)',
          header: 'rgba(3, 10, 20, 0.8)'
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(rgba(11, 37, 65, 0.8), rgba(3, 10, 20, 1))',
        'hero-image': 'url("https://images.unsplash.com/photo-1594411440293-899d996e38b3?q=80&w=2070&auto=format&fit=crop")',
        'hero-combined': `
          linear-gradient(rgba(11, 37, 65, 0.8), rgba(3, 10, 20, 1)),
          url("https://images.unsplash.com/photo-1594411440293-899d996e38b3?q=80&w=2070&auto=format&fit=crop")
        `
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px)' 
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)' 
          },
        },
        scaleIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.9)' 
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)' 
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      fontFamily: {
        arabic: ['Cairo', 'Tajawal', 'Amiri', 'serif'],
        english: ['Inter', 'system-ui', 'sans-serif']
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-lg': ['5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'accent-glow': '0 0 20px rgba(246, 138, 34, 0.3)',
        'card-hover': '0 20px 40px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      }
    },
  },
  plugins: [
    // Add custom utilities for glass morphism
    function({ addUtilities }) {
      const newUtilities = {
        '.glass-morphism': {
          background: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
        },
        '.glass-dark': {
          background: 'rgba(11, 37, 65, 0.3)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.text-gradient': {
          background: 'linear-gradient(135deg, #f68a22 0%, #d4771d 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        },
        '.hero-text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        }
      }
      addUtilities(newUtilities)
    }
  ],
}