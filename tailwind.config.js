/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        luxury: {
          gold: '#f59e0b',
          amber: '#fbbf24',
          rose: '#ec4899',
          teal: '#14b8a6',
          purple: '#a855f7',
          dark: '#0f172a',
        },
      },
      boxShadow: {
        'glow-gold': '0 0 30px rgba(245, 158, 11, 0.4)',
        'glow-gold-lg': '0 0 60px rgba(245, 158, 11, 0.6)',
        'glow-rose': '0 0 30px rgba(236, 72, 153, 0.4)',
        'glow-teal': '0 0 30px rgba(20, 184, 166, 0.4)',
        'premium-sm': '0 4px 20px rgba(0, 0, 0, 0.4)',
        'premium-md': '0 8px 32px rgba(0, 0, 0, 0.5)',
        'premium-lg': '0 12px 48px rgba(0, 0, 0, 0.6)',
        'premium-xl': '0 16px 64px rgba(0, 0, 0, 0.7)',
        'inset-light': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
      },
      backdropFilter: {
        'blur-xs': 'blur(4px)',
        'blur-sm': 'blur(10px)',
        'blur-md': 'blur(20px)',
        'blur-lg': 'blur(30px)',
        'blur-xl': 'blur(40px)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 30px rgba(245, 158, 11, 0.4)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 60px rgba(245, 158, 11, 0.8)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 0%' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-30px)' },
        },
        'flip-card': {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        'count-up': {
          'from': { content: '0' },
          'to': { content: '100' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in-down': 'fade-in-down 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in': 'fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-in-left': 'slide-in-left 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-in-right': 'slide-in-right 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-soft': 'bounce-soft 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'flip-card': 'flip-card 0.6s ease-out',
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '450': '450ms',
      },
      transitionTimingFunction: {
        'cubic-smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
