const path = require('path');
const include = path.resolve(__dirname, '../');

module.exports = {
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: require.resolve('ts-loader'),
        include
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(svg|png|woff|woff2|eot|ttf)(\?.*)?$/,
        loaders: ['file-loader'],
      },
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json']
  }
};