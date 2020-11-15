const path = require('path')

console.info(path.resolve(__dirname, 'src/common/'));

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
		publicPath: '/',
	},
	resolve: {
    alias: {
      common: path.resolve(__dirname, 'src/common/'),
      features: path.resolve(__dirname, 'src/features'),
    },
    extensions: [ '.tsx', '.ts', '.js', '.scss'],
  },
	module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: { 
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            }
          },
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
		contentBase: path.join(__dirname, 'public'),
		historyApiFallback: true,
    compress: true,
    port: 9000,
  }
}