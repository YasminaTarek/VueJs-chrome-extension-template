const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    filenameHashing: false,
    pages: {
        popup: {
            entry: 'public/js/popup.js',
            template: 'public/popup.html',
        },
    },
    productionSourceMap: 'development' === process.env.NODE_ENV,
    configureWebpack: {
        plugins: [
            new CopyWebpackPlugin([
                { from: 'public/manifest.json', to: 'manifest.json', },
                { from: 'public/image/*.png', to: 'image/[name].png', },
                { from: 'public/scss/*.scss', to: 'css/[name].css', },
            ]),
        ],
    },
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .tap(args => {
                return {
                    limit: 4096,
                    fallback: {
                        loader: 'file-loader',
                        options: {
                            name: 'image/[name].[ext]',
                        },
                    },
                };
            });
    },
};
