/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          primary: '#0F6B66',
          dark: '#094B48',
          deep: '#063533',
          light: '#14857F',
          soft: '#E6F5F3',
          surface: '#F2FAF9',
        },
        mint: {
          soft: '#E6F5F3',
          light: '#F0FAF9',
          muted: '#C7ECE7',
        },
        coral: {
          cta: '#FF7A59',
          hover: '#E66848',
          dark: '#CC5436',
          light: '#FFF0EC',
          soft: '#FFE4DC',
        },
        charcoal: {
          DEFAULT: '#1F2937',
          muted: '#4B5563',
          light: '#6B7280',
          dark: '#111827',
        },
        offwhite: '#FAFAF9',
        gold: {
          accent: '#D4AF37',
          light: '#FEF9E7',
          dark: '#B59428',
        }
      },
      fontFamily: {
        heading: ['Outfit', 'Poppins', 'Sora', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        urdu: ['Noto Nastaliq Urdu', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(15, 107, 102, 0.08), 0 1px 4px -1px rgba(0, 0, 0, 0.04)',
        'soft-md': '0 8px 24px -4px rgba(15, 107, 102, 0.10), 0 4px 12px -2px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 16px 36px -6px rgba(15, 107, 102, 0.14), 0 6px 16px -3px rgba(0, 0, 0, 0.06)',
        'coral-glow': '0 8px 25px -3px rgba(255, 122, 89, 0.35)',
        'teal-glow': '0 8px 25px -3px rgba(15, 107, 102, 0.35)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.04)', opacity: '0.95' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
