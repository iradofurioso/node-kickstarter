// webpack.config.js
const path = require('path')

module.exports = {
    resolve: {
        alias: {
            "@root": path.resolve(__dirname, '.'),
            "@src": path.resolve(__dirname, 'src'),
            "@config": path.resolve(__dirname, 'src/config'),
            "@controllers": path.resolve(__dirname, 'src/controllers'),
            "@middlewares": path.resolve(__dirname, 'src/middlewares'),
            "@models": path.resolve(__dirname, 'src/models'),
            "@modules": path.resolve(__dirname, 'src/modules'),
            "@resources": path.resolve(__dirname, 'src/resources'),
            "@routes": path.resolve(__dirname, 'src/routes'),
            "@services": path.resolve(__dirname, 'src/services'),
            "@tests": path.resolve(__dirname, 'src/tests'),
            "@types": path.resolve(__dirname, 'src/types'),
            "@utils": path.resolve(__dirname, 'src/utils')
        }
    }
}