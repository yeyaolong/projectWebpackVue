'use strict'
// 引入nodejs路径模块
const path = require('path') 

// 引入utils工具模块，utils主要用来处理css-loader和vue-style-loader的
const utils = require('./utils')

// 引入config目录下的index.js配置文件，主要用来定义一些开发和生产环境的属性
const config = require('../config')

// vue-loader.conf配置文件是用来解决各种css文件的，定义了诸如css,less,sass之类的和样式有关的loader
const vueLoaderConfig = require('./vue-loader.conf')

// 此函数是用来返回当前目录的平行目录的路径，因为有个'..'
function resolve (dir) {  
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    // 入口文件是src目录下的main.js 通过 babel-polyfill 转义es6
    app: ["babel-polyfill", "./src/main.js"]
  },
  output: {
    // 输出路径是config目录下的index.js中的build配置中的assetsRoot，"/dist"
    path: config.build.assetsRoot,

    // 文件名称这里使用默认的name也就是main
    filename: '[name].js',

    // webpack编译输出的发布路径，也就是真正的文件引用路径，其实这里都是 '/'
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {  // resolve是用来对模块进行解析，就是所谓的libary第三方库
    extensions: ['.js', '.vue', '.json'],  // .extensions 是对模块的后缀进行解析
    // 比方说var config = require('../config') webpack.base里引入了config模块的时候，没有带js后缀，那文件会不会识别，本质上不会识别，但是有了这个配置，
    // 会先进.js后缀进行匹配，没有再匹配.vue，没有再匹配.json，还是没有找到的话,则会报错，文件没有找到no find

    alias: {  // 配置别名
      'vue$': 'vue/dist/vue.esm.js',
      
      '@': resolve('src'),
      // 用@来代替src目录的绝对路径，此时就用到了上面function resolve封装的函数，此时就绝对路径就定位到了src目录，因为我们所有文件都放在src目录下，我们就可以通过src目录直接定位到你想要找的文件
    }
  },

  // module用来解析不同的模块
  module: {
    rules: [
      {
        test: /\.vue$/,   // 对vue文件使用vue-loader，该loader是vue单文件组件的实现核心，专门用来解析.vue文件的
        loader: 'vue-loader',   // loader我们用什么npm什么形式的loader去解析
        options: vueLoaderConfig   // 将vueLoaderConfig当做参数传递给vue-loader,就可以解析文件中的css相关文件
      },
      {
        test: /\.js$/,   // 对js文件使用babel-loader转码,该插件是用来解析es6等代码
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]   // 指明src和test目录下的js文件要使用该loader  考虑性能问题，打包时间问题，我们不考虑解析node-module里的文件
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,  // 对图片相关的文件使用 url-loader 插件，这个插件的作用是将一个足够小的文件生成一个64位的DataURL
        loader: 'url-loader',
        options: {
          limit: 10000,  // 对于文件小于10K的，在生成的代码用中base64来替代
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
          // 例： dev开发的时候用../../aa/aa.jpg
          // 最后输出：/static/img/aa42432432423.jpg 就是publicpath+/static/图片名+hash+图片后缀来进行返回
          // 输出图片的路径或者是解析图片的路径
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, // 多媒体文件处理
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,  // 字体文件处理
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
