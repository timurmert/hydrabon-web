import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // HydRaboN Ana Renk Paleti
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // Ana turuncu
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        // Siyah ve koyu gri tonları
        dark: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#0a0a0a',
        },
        // Kaplan temalı aksan renkleri
        tiger: {
          100: '#fef3c7',
          200: '#fde68a', 
          300: '#fcd34d',
          500: '#f59e0b',
          700: '#d97706',
          900: '#92400e',
        },
        // Kış Teması Renkleri
        winter: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        frost: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
        },
        ice: {
          light: '#e0f7ff',
          DEFAULT: '#b8e8f5',
          blue: '#89CFF0',
          crystal: '#A5F2F3',
        },
        snow: {
          white: '#FFFAFA',
          soft: '#F5F5F5',
          blue: '#E8F4F8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
        // Kış Teması Animasyonları
        'frost-shimmer': 'frostShimmer 3s ease-in-out infinite',
        'ice-glow': 'iceGlow 2s ease-in-out infinite alternate',
        'snowflake-drift': 'snowflakeDrift 4s ease-in-out infinite',
        'winter-sparkle': 'winterSparkle 2.5s ease-in-out infinite',
        'breath-frost': 'breathFrost 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 20px rgba(249, 115, 22, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(249, 115, 22, 0.6)' },
        },
        // Kış Teması Keyframeleri
        frostShimmer: {
          '0%, 100%': { 
            backgroundPosition: '0% 50%',
            filter: 'brightness(1)',
          },
          '50%': { 
            backgroundPosition: '100% 50%',
            filter: 'brightness(1.1)',
          },
        },
        iceGlow: {
          '0%': { 
            boxShadow: '0 0 15px rgba(136, 206, 235, 0.3), 0 0 30px rgba(136, 206, 235, 0.1)',
          },
          '100%': { 
            boxShadow: '0 0 25px rgba(136, 206, 235, 0.5), 0 0 50px rgba(136, 206, 235, 0.2)',
          },
        },
        snowflakeDrift: {
          '0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
          '25%': { transform: 'translateX(5px) rotate(90deg)' },
          '50%': { transform: 'translateX(-5px) rotate(180deg)' },
          '75%': { transform: 'translateX(3px) rotate(270deg)' },
        },
        winterSparkle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        breathFrost: {
          '0%, 100%': { 
            opacity: '0.6',
            filter: 'blur(0px)',
          },
          '50%': { 
            opacity: '0.9',
            filter: 'blur(1px)',
          },
        },
      },
      backgroundImage: {
        'gradient-tiger': 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #c2410c 100%)',
        'gradient-dark': 'linear-gradient(135deg, #18181b 0%, #27272a 50%, #3f3f46 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0a0a0a 0%, #18181b 30%, #f97316 100%)',
      },
      boxShadow: {
        'tiger': '0 10px 25px -3px rgba(249, 115, 22, 0.3), 0 4px 6px -2px rgba(249, 115, 22, 0.1)',
        'dark-lg': '0 10px 25px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(249, 115, 22, 0.3)',
        // Kış Teması Gölgeleri
        'frost': '0 0 20px rgba(136, 206, 235, 0.3), 0 0 40px rgba(136, 206, 235, 0.1)',
        'frost-lg': '0 0 30px rgba(136, 206, 235, 0.4), 0 0 60px rgba(136, 206, 235, 0.2)',
        'ice': '0 4px 20px rgba(165, 242, 243, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)',
        'snow-glow': '0 0 25px rgba(255, 255, 255, 0.4), 0 0 50px rgba(200, 220, 255, 0.2)',
        'winter-card': '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(136, 206, 235, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
};

export default config; 