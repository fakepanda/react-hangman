module.exports = {
  context: __dirname + '/app',
  /*entry: {
    app: './app.js',/*
    html: './index.html'/*,
    style: './base.css'*/
  //},*/
  entry: ['webpack/hot/only-dev-server', './app.js'],
  devServer: {
    contentBase: './public',
    host: '0.0.0.0',
    hot: true,
    port: 4001,
    publicPath: '/',
    noInfo: true,
    
  },


  output : {
    filename: '[name].js',
    path: __dirname + '/dist',
    //publicPath: '/build/'
  },

  module: {
    loaders: [
      {
        test : /\.js$/,
        exclude : /node_modules/,
        loaders : ['react-hot','babel?{"presets":["es2015","react"]}']
      },/*
      {
        test : /\.html$/,
        loader : 'file?name=[name].[ext]'
      },*/
      {
        test : /\.css$/,
        loader : 'style!css'
      }
    ]
  },
  
  devtool: 'source-map'
}