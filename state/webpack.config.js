// 환경설정 

module.exports = {
    //엔트리
    entry: './src/index.js',

    //결과
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    //개발 서버 
    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + '/public/'
    },

    module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        cacheDirectory: true,
                        presets: ['es2015', 'react']
                    }
                }
            ]
        }
};