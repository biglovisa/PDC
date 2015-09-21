module.exports = {
  context: __dirname + "/app",
  entry: {
    javascript: "./scripts/app.js",
    html: "./index.html",
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader?stage=0"],
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

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },
}
