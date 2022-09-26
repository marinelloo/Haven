const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports =  {
    mode: "development",
        devtool: "source-map",
        entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].[contenthash].js",
        clean: true,
        publicPath: "/",
    },
    devServer: {
        port: 3000,
        hot: true,
        historyApiFallback: {index: '/'},
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpeg|jpg|gif)$/i,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 8192,
                        name: "static/media/[name].[hash:8].[ext]"
                    }
                }
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(eot|otf|ttf|woff|woff2)$/,
                loader: require.resolve("file-loader"),
                options: {
                    name: "static/media/[name].[hash:8].[ext]"
                }
            },
        ]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules'),
        ],
        extensions: ['.json', '.js', '.jsx'],
    },
}