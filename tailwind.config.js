module.exports = {
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'pixel-1': ['"VT323"'],
      'pixel-2': ['"Press Start 2P"']
    },
    extend: {
      colors: {
        'unknown': {
          light: '#ffffff',
          DEFAULT: '#d6d6d6',
          dark: '#9e9e9e',
        }
      },
      backgroundImage: {
        'bodimg': "url('https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png')",
        'fightimg': "url('https://cdn.wallpapersafari.com/0/2/qgOjR1.png')"
      }
    },
  },
  variants: {
    extend: {
      animation: ['group-hover', 'hover', 'group-focus']
    },
  },
  plugins: [],
};