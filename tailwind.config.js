module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        text: {
          soft: '#454D54',
        },
        purple: {
          deep: '#4E00AD',
          light: '#6E00F5',
        },
        gray: {
          light: '#FAFAFA',
          700: '#4A5568',
          dark: '#16192C',
        },
        light: {
          dark: '#505780',
        },
        blue: {
          light: '#F3F7FC',
        },
        paysure: {
          10: '#F1E5FF',
          50: '#425D8A',
          'text-100': '#191716',
          primary: {
            100: '#6500E0',
          },
          success: {
            100: '#136F63',
          },
          danger: {
            100: '#ED6A5A',
          },
        },
        border: '#E4ECF7',
        border2: '#EBF2FA',
        dark: '#101225',
      },
    },
  },
  plugins: [],
}
