const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:  __dirname + "/src/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/build",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: "./app",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },
  module: {
    rules: [
	    {
        test: /(\.jsx|\.js)$/,
        use: {
            loader: "babel-loader"
        },
        exclude: /node_modules/
   		},
   		{
			  test: /\.scss$/,
			  exclude: /(node_modules)/,
			  use: [
            {
              loader: "style-loader"
            }, 
            {
                loader: "css-loader",
                options: {
                	modules: false, 
                  localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                }
            },
            {
            	loader: "sass-loader"
            },
            {
              loader: "postcss-loader"
            }
        ]
			},
   		{
        test: /\.css$/,
        exclude: /(node_modules)|(component_css)/,
        use: [
            {
              loader: "style-loader"
            }, 
            {
            	loader: "css-loader"
            },
            {
              loader: "postcss-loader"
            }
        ]
	    },
	    {
        test: /\.css$/,
        include: /(component_css)/,
        use: [
            {
              loader: "style-loader"
            }, 
            {
            	loader: "css-loader",
            	options: {
	            	modules: true, 
	              localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
	            }
            },
            {
              loader: "postcss-loader"
            }
        ]
	    },
	    {
        test: /\.css$/,
        exclude: /(src)/,
        use: [
            {
                loader: "style-loader"
            }, 
            {
                loader: "css-loader"
            }
        ]
	    },
	    {
        test: /\.less$/,
        loader:"style-loader!css-loader!less-loader"
	    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
    }),
    new webpack.HotModuleReplacementPlugin(),//热加载插件
	]
}
