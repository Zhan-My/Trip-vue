const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('styles', resolve('src/assets/styles'))
            .set('common', resolve('src/common'))
    },

    devServer: {
        port: 8089,
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8089',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': 'mock'
                }
            }
        }

    },

    css: {
        loaderOptions: {
            stylus: {
                'resolve url': true,
                'import': [
                    './src/theme'
                ]
            }
        }
    },

    pluginOptions: {
        'cube-ui': {
            postCompile: true,
            theme: true
        }
    }
}