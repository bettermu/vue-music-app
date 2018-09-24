
# 开发进度

* 2018.9.20

  * vue-cli初始化、修改相关配置(引入stylus  stylus-loader  修改eslint配置)
  * 增加字体文件、公用样式表styl文件、增加懒加载默认图片

* 2018.9.21
  * 编写header组件，增加相关配置
  * tab组件编写，推荐页面编写和数据获取

* 2018.9.22
  * 编写slider轮播组件

* 2018.9.24
  * 轮播图组件开发和优化，启用node服务获取歌单数据



# 开发笔记

* 2018.9.20

## vue-cli 安装 stylus 报错

在初始化vue-cli之后，我想使用stylus来进行样式的开发，但是，在运行过程中，报了如下的一个错：

![](https://github.com/bettermu/blog-picture-store/blob/master/vue-music-app/stylus%E6%8A%A5%E9%94%99.png?raw=true)

上图所示报的错，首先，是没有找到stylus和stylus-loader模块的错，其次，是运行过程中，无法识别vue文件里的style的lang为stylus的样式文件，还有以.styl结尾的样式文件

解决方法如下：

1、安装相关loader

``` js
npm install stylus stylus-loader style-loader --save-dev
```

2、 在webpack.base.conf.js的module的loaders里加入：

``` js
  {
     test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader'
  },
```

3、在resolve的extensions里加入了.styl:

```js
  extensions: ['', '.js', '.vue','.styl']
```

就解决了加载stylus文件报错的问题






