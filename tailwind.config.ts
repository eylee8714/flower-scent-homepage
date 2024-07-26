import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      background: '#f0e8dd',
      backgroundContrast: '#111',
      textBlack: '#1d1d1f',
      white: '#fff',
      black: '#000',
    },
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
        gmarketsansBold: ['var(--font-gmarketsansBold)'],
        gmarketsansMedium: ['var(--font-gmarketsansMedium)'],
        gmarketsansLight: ['var(--font-gmarketsansLight)'],
        mbc1961: ['var(--font-mbc1961)'],
      },
      fontSize: {
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        base: '1.0625rem', // 17px
        lg: ['1.1875rem', '1.21'], // 19px
        xl: '1.3125rem', // 21px
        '2xl': '1.5rem', // 24px
        '3xl': '1.75rem', // 28px
        '4xl': ['2.5rem', '1.1'], // 40px
        '5xl': ['4.5rem', '1.05'], // 72px
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
