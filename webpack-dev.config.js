module.exports = {
  context: __dirname + '/app',
  entry: ['webpack/hot/only-dev-server', './app.js'],
  devServer: {
    contentBase: './public',
    host: '0.0.0.0',
    hot: true,
    port: 4001,
    publicPath: '/',
    noInfo: true,

  },

  module: {
    loaders: [
      {
        test : /\.jsx?$/,
        exclude : /node_modules/,
        loaders : ['react-hot', 'babel?{"presets":["es2015","react"]}']
      },
      {
        test : /\.css$/,
        loader : 'style!css'
      }
    ]
  },

  devtool: 'source-map'
}