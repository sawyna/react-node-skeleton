const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: "./src/ui/js/index.js",
	output: {
		path: path.resolve(__dirname, 'build'),	
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js*$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				query: {
					presets: ["es2015", "react"]
				}
			}
		]
	},
	devServer: {
		port: 8000,
		open: true,
		proxy: {
			'/api': 'http://localhost:9000'
		}
	},
	plugins: [
		new CleanWebpackPlugin(['build']),
		new HtmlWebpackPlugin({
			template: './static/index.html'
		})
	]
}
