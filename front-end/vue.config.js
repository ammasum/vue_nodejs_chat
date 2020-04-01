module.exports = {
    configureWebpack: {
        devServer: {
            watchOptions: {
                ignored: [/node_modules/, /public[/]assets[/]admin/, /public[/]assets[/]home[/]css[/]font-awesome/],
            }
        }
    },
    pages: {
        'chat': {
            entry: './src/chat/main.js',
            template: 'public/index.html',
        }
    }
}
