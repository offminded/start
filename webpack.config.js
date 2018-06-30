const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
	  {
	  test: /\.scss$/,
	  use: [
		    {
		      loader: "style-loader" // creates style nodes from JS strings
		    },
		    {
		      loader: "css-loader" // translates CSS into CommonJS
		    },
		    {
		      loader: "sass-loader" // compiles Sass to CSS
		    }
		  ]
		},
      {
          test: /\.(png|jpg|mp3|svg)$/,
          loader: 'url-loader'
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};