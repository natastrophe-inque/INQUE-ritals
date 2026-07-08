/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          900: '#0a0a0a',
          800: '#0d0d0d',
          700: '#111111',
          600: '#1a1a1a',
        },
        bone: {
          50: '#fafaf5',
          100: '#f5f5ed',
          200: '#e8e8d8',
          300: '#d4d4c0',
          400: '#b8b8a0',
        },
        silver: {
          400: '#c0c0c8',
          500: '#a8a8b0',
          600: '#888890',
        },
        // New forest green palette - dark, metallic, iridescent, premium
        forest: {
          deep: '#0B2F24',        // Deep forest green base
          rich: '#123D32',        // Rich metallic forest green
          accent: '#1F5C47',      // Dark emerald accent
          light: '#7A8F74',       // Muted iridescent highlight
          muted: '#8FA68A',       // Slightly lighter muted tone
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at center, rgba(31,92,71,0.08) 0%, rgba(10,10,10,1) 70%)',
        'section-gradient': 'linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 50%, #0a0a0a 100%)',
        'forest-gradient': 'linear-gradient(135deg, #0B2F24 0%, #123D32 40%, #1F5C47 70%, #7A8F74 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
