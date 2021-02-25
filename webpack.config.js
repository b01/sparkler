const fs = require('fs');
const request = require('request');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const loadIcons = (cb) => {
  const fileStream = fs.createWriteStream(
    './dist/sparkIcons.svg',
  );
  request
    .get({
      uri:
        'https://www.rockomni.com/mcds/assets/GlobalContent/NonStockImages/Icons/spark-icons-v14.svg',
      rejectUnauthorized: false,
    })
    .pipe(fileStream)
    .on('error', (error) => {
      console.log(error);
    })
    .on('finish', cb);
};

loadIcons(() => {
  console.log('done fetching icons');
});

module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  output: {
    filename: 'js/[name].js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/bundle.css',
    }),
  ],
};