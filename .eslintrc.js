// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    plugins: [
        "html",
        "flowtype"
      ],
    parser: 'babel-eslint',
    parserOptions: {
      "sourceType": "module"
    },
    'rules': {
      // allow paren-less arrow functions
      'arrow-parens': 0,
      // allow async-await
      "no-console": "off",
  
      'generator-star-spacing': 0,
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
  }
  