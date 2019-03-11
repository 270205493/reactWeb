const webpack = require('webpack');
const antDThemeConf = require('./src/theme/antdThemeConf.js');

module.exports = {
    devtool: 'eval-source-map',//生成Source Maps,这里选择eval-source-map
    entry: './src/index.js',
    output: {
        filename: "main.js"
    },
    mode: "development",
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },

    module: {
        rules: [
            {
                test:/\.tsx?$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "env",
                                "stage-0"
                            ],
                            plugins: ["transform-decorators-legacy"]
                        }
                    },
                    'ts-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: "babel-loader",

                        options: {
                            presets: [
                                [
                                    'env',
                                    {
                                        "targets": {
                                            "chrome": 60,
                                            "browsers": ["last 2 versions"]
                                        },
                                        "modules": false,
                                    },
                                ],
                                'react',
                                'es2015'
                            ],
                            plugins: [
                                'transform-decorators-legacy',
                                'transform-class-properties',
                                'transform-runtime',
                                [
                                    'import',
                                    {
                                        libraryName: 'antd',
                                        style: 'css'
                                    }
                                ],

                                'syntax-dynamic-import'
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|ttf|woff|eot)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            name: "images/[name].[hash:8].[ext]"
                        }
                    }
                ]
            },
            {
                test:/\.less/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options:{
                            javascriptEnabled: true,
                            modifyVars:antDThemeConf('def')
                        }
                    }
                ],
            },
            {
                test:/\.scss$/,
                use: [
                     'style-loader',
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: `./src/theme/_def.scss`
                        }
                    }
                ],
            },
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            }
        ]
    },
    //webpack-dev-server配置
    devServer: {
        https: false,
        port: 8989, // 端口
        host: 'localhost',
        overlay: true,
        compress: true, // 服务器返回浏览器的时候是否启动gzip压缩
        historyApiFallback: true,
        open: true,
        proxy: {
            '/examination/*': {
                target: 'http://47.105.35.207'
            }
        }

    },
    plugins: [
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /de|fr|hu/),
    ]

}