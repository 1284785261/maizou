module.exports = {
	entry: './src/main.js',
	output: {
		filename: './dist/bundle.js',
		path: __dirname
	},
	module: {
		loaders: [
			{test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{test: /\.(png|jpg|gif|ttf)$/, loader: 'file-loader'}
		]
	}
}
