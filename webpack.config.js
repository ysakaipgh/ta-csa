const ESLintPlugin = require('eslint-webpack-plugin');
const src = '/src/';
const dist = '/dist/';

module.exports = {
  mode: 'production',
  entry: {
    index: `${src}index.ts`,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts',
    ],
  },
  output: {
    filename: '[name].js',
    path: `${__dirname}${dist}`,
    library: {
      type: "commonjs-static" // これを指定しないと、クラスの初期化が出来なかった。
    },
  },
  optimization: {
    minimize: true
  },
  plugins: [
    new ESLintPlugin({
    extensions: [
      '.ts',
    ],
      exclude: 'node_modules'
    }),
  ],
};
