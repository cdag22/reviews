const path = require('path');

const inputPath = path.join(__dirname, 'client');
const outputPath = path.join(__dirname, 'public');

module.exports = {
  entry: `${inputPath}/index.jsx`,
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    ]
  }

};