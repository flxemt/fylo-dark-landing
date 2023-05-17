/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'dark-blue-intro': '#1B2330',
        'dark-blue-footer': '#0B1524',
        'dark-blue-testimonials': '#202A3C',
        'light-red': '#FF4242',
        'cyan-hover': '#8ADAE3',
        cyan: '#62E0D9',
        gray: '#C0C0C0',
        input: '#07043B'
      }
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      headings: ['Raleway', 'sans-serif'],
      quotes: ['Nunito Sans', 'sans-serif']
    },
    fontSize: {
      h1: '2.5rem',
      h2: '2rem',
      h3: '1.5rem',
      h4: '1.25rem',
      h5: '1.125rem',
      default: '1rem',
      body: '0.875rem'
    },
    lineHeight: {
      h1: '3.75rem',
      h2: '3rem',
      h3: '2.25rem',
      h4: '1.875rem',
      h5: '1.5rem',
      default: '1.5rem',
      body: '1.3125rem'
    },
    backgroundImage: {
      'cyan-gradient': 'linear-gradient(134.79deg, #63E1D9 -42.11%, #34A0CD 100%)',
      'curvy-mobile': 'url("/bg-curvy-mobile.svg")',
      'curvy-desktop': 'url("/bg-curvy-desktop.svg")',
      curvy: 'url("/curvy.svg")'
    },
    borderRadius: {
      sm: '4px',
      md: '9px',
      lg: '24px',
      xl: '28px',
      full: '50%'
    },
    boxShadow: {
      card: '0px 0px 8px 4px rgba(56, 56, 56, 0.0458843)',
      form: '5px 5px 8px rgba(0, 0, 0, 0.254274)'
    },
    screens: {
      xl: '1110px'
    }
  },
  plugins: []
}
