import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        quanum: {
          primaryDark: '#6E6E70',
          surface: '#FFFFFF',
          surfaceAlt: '#F5F5F5',
          readonlyBg: '#EAF0F3',
          borderDefault: '#D0D0D0',
          borderTable: '#CCCCCC',
          textPrimary: '#212121',
          textOnDark: '#FFFFFF',
          successGreen: '#5CB85C',
          successGreenDark: '#4CAE4C',
          warningOrange: '#F0AD4E',
          dangerRed: '#D9534F',
        },
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        container: '0 1px 3px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
