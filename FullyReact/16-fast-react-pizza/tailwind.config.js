/** @type {import('tailwindcss').Config} */
//eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: { pizza: 'Roboto Mono, monospace' },
    extend: {
      /* If we put that colors to the theme part,
    we can not use tailwind colors. Instead of putting themes part, if we put 
    colors to the extend part. We can extend our colors.*/
      colors: {
        pizza: '#12345',
      },
      fontSize: {
        huge: '40rem, { lineHeight: 1 }',
      },

      //This is important for the mobile devices. It will take the full height of the screen.
      height: { screen: '100dvh' },
    },
  },
  plugins: [],
};
