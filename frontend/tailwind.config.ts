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
          bg: '#030F40',
          primary: '#1a41f8',
          secondary: '#5170FF'
        },
        fontFamily: {
          'raleway': ['Raleway', 'sans-serif'],
        },
        screens: {
          '2xl': {'max': '1535px'},
          'xl': {'min': '1279px'},
          'lg': {'max': '1023px'},
          'lgo': {'min': '1023px'},
          'md': {'max': '767px'},
          'mdo': {'min': '767px'},
          'sm': {'max': '639px'},
        }
      },
    },
    plugins: [require('daisyui')],
  };
  export default config;
