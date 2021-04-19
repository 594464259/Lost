# landf

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

##之前npm run build之后得到的dis/index打开时空白页，解决方案：
如何解决vue2.0 打包之后 打开index.html出现空白页

####1.打包之前修改三个文件
       1.1.第一步，找到build文件，在webpack.prod.conf.js 第25行左右 有一个对象为 output,在这里面增加一行代码

publicPath:'./'

  output: {
    //在这里加一行代码  
    publicPath:'./',

    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },


####1.2.第二步，找到utils.js，在 第47行左右 有一个if判断为 if (options.extract),在这里面增加一行代码

     注意：这个是保证 加载背景图片等css样式资源不出现 路径问题

publicPath:'../../'

    if (options.extract) {
      return ExtractTextPlugin.extract({
        publicPath:'../../',
        use: loaders,
        fallback: 'vue-style-loader'
      })
    }

 


####1.3.第三步，找到config/index.js第46行左右 修改assetsPublicPath 路径为 './';

####2.然后你就可以  build 了，

####3.如果build 完成后 在本地还是空白页  或者说 放到服务器上面 是空白页  怎么办

####3.1 这个就有可能是 你的路由模式  出现了问题  你给的路由模式可能是history 模式 ，这个文档说了 如果设置这个模式的话需要后端的配合 设置一些参数的 ，所以如果没有后端的配合的话 ，你就把这个路由的mode 改为 hash  或者是直接删除  就是默认的模式了



##TODO

upload: file rename, avoiding duplicate name