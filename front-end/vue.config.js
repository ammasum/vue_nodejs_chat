module.exports = {
    configureWebpack: {
        devServer: {
            watchOptions: {
                ignored: [/node_modules/],
            }
        }
    },
    pages: {
        'chat': {
            entry: './src/chat/main.js',
            template: 'public/index.html',
        },
        'call': {
            entry: './src/call/main.js',
            template: 'public/index.html',
        }
    }
}
