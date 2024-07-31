import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      background: 'rgb(247, 241, 228)',
      backgroundContrast: '#111',
      textBlack: '#1d1d1f',
      white: '#fff',
      black: '#000',
      flower: {
        rococo: {
          peachbrocade: 'rgb(249, 204, 186)',
          rococo: 'rgb(238, 180, 150)',
          rocaille: 'rgb(247, 241, 228)',
          pastelyellow: 'rgb(252, 242, 195)',
          goldleaf: 'rgb(226, 199, 115)',
          lightgreenjade: 'rgb(213, 223, 195)',
          paleceladon: 'rgb(206, 217, 207)',
          louisblue: 'rgb(170, 203, 228)',
        },
        cosy: {
          woollybeige: 'rgb(247, 224, 193)',
          camelsand: 'rgb(227, 207, 176)',
          yolkyellow: 'rgb(251, 201, 109)',
          dawncoral: 'rgb(239, 157, 112)',
          softlyrose: 'rgb(238, 183, 179)',
          woollylamb: 'rgb(255, 245, 224)',
          fantasyblue: 'rgb(147, 195, 233)',
          softmocha: 'rgb(206, 173, 155)',
          alpacabrown: 'rgb(145, 99, 65)',
        },
        desert: {
          oasisblue: 'rgb(88, 159, 184)',
          oasisshade: 'rgb(69, 108, 99)',
          oasis: 'rgb(120, 147, 109)',
          desertgold: 'rgb(222, 198, 124)',
          desertdust: 'rgb(233, 220, 201)',
          caravancamel: 'rgb(210, 159, 97)',
          saharasand: 'rgb(228, 202, 162)',
          sahararose: 'rgb(219, 186, 156)',
          saharasunset: 'rgb(222, 160, 108)',
        },
        laprovence: {
          lavender: 'rgb(148, 131, 185)',
          lavendermist: 'rgb(220, 219, 229)',
          freshlinen: 'rgb(250, 251, 244)',
          bleachedoak: 'rgb(216, 204, 191)',
          limonade: 'rgb(242, 239, 197)',
          marseilleyellow: 'rgb(233, 190, 84)',
          driedsage: 'rgb(185, 187, 136)',
          provenceindigo: 'rgb(65, 95, 155)',
          provenceblue: 'rgb(111, 148, 205)',
        },
      },
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
