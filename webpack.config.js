module.exports = {
  context: __dirname,
  entry: "./frontend/scripts/entry.jsx",
    output: {
        path: __dirname,
        filename: "./frontend/bundle.js"
    },
    resolve: {
      extensions: ['.js', '.jsx', '*']
    },
    module: {
      rules: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',

          }
      ]
    },
    devtool: 'source-maps',
    watch: true
}
