const path = require('path')

module.exports = {
  entry: {
    client: './src/client',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  node: {
    fs: 'empty'
  },
  externals: {
    canvas: "commonjs canvas" // Important (2)
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
