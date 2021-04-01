module.exports = {
    purge: {
      content: [
        './resources/**/*.antlers.html',
        './resources/**/*.blade.php',
        './content/**/*.md'
      ]
    },
    important: true,
    theme: {
      extend: {},
      
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
        heading: ['Rubik', 'sans-serif'],
      },
      backgroundImage: theme => ({
        'swatch': "url('{{ swatch }}')",
        
       })
    },
    variants: {},
    plugins: [],
  }
