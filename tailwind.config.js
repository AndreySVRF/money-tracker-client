/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: '2rem',
      center: true
    },
    extend: {
      fontFamily: {
        base: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Roboto',
          'sans-serif'
        ]
      }
    }
  },
  plugins: ['@tailwindcss/forms', 'prettier-plugin-foo']
};
