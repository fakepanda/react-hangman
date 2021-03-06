module.exports = {
  context: __dirname + '/app',
  entry: ['./app.js'],
  output : {
    filename: 'bundle.js',
    path: __dirname + '/build',
  },

// TODO: chain jsx->build/[name].js
//       -> dist/bundle.js
  module: {
    loaders: [
      {
        test : /\.jsx?$/,
        exclude : /node_modules/,
        loaders : ['babel?{"presets":["es2015","react"]}']
      },
      {
        test : /\.css$/,
        loader : 'style!css'
      }
    ]
  },

  devtool: 'source-map'
}