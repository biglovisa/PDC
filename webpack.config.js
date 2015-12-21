module.exports = {
  devtool: 'source-map',
  entry: ['./app/scripts/app.js'],
  output: {
    path: './public',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["jsx-loader", "babel-loader?stage=0"],
      },
      {
        test: /\.json$/,
        loader: "json-loader",
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ],
  },
  plugins: []
}
