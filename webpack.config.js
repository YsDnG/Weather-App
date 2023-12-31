const path = require('path');

module.exports = {
  entry: './src/weather-app.js',
  mode:'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

   module: {
    rules: [
      {
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource', // Gérer les polices avec asset/resource
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
  devtool:'source-map'
  
};