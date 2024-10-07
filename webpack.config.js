const path = require('path');

module.exports = {
  entry: './build/static/js/main.*.js',
  output: {
    filename: 'pingback-form-widget.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
};