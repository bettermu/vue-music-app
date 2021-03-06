
# 项目依赖

* vue-router: vue单页应用路由系统
* better-scroll: 移动端滚动插件
* vuex: 数据状态管理工具
* axios: 数据请求工具
* vue-lazyload:
* jsonp: 跨域请求jsonp库
* fastclick: 移动端点击延迟处理库
* create-keyframe-animation: js的方式写css3动画
* js-base64: js的 base64格式转换库  用于转换歌词格式

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

* 2018.9.25
  * 编写推荐列表页面
  * 编写scroll组件
  * 添加lazyload图片懒加载插件

* 2018.9.26
  * 全局loading组件编写
  * 歌手页面编写，数据获取以及整合
  * List-view组件编写

* 2018.9.27
  * 歌手列表页交互优化

* 2018.9.28
  * 歌手列表页固定title效果
  * 歌手详情页面编写
  * 引入vuex数据管理

* 2018.9.29
  * vuex歌手数据测试

* 2018.10.1
  * 歌曲数据格式处理
  * 歌手歌曲列表和歌单歌曲列表组件musiclist编写

* 2018.10.2
  * 歌曲列表编写song-list
  * 歌手详情页面歌曲列表组件滑动效果优化

* 2018.10.3
  * 播放器内核数据vuex编写
  * 播放器内核页面结构搭建

* 2018.10.4
  * 播放器切换动画效果编写

* 2018.10.8
  * 播放器进度条组件实现
  * 实现播放器进度条拖拽功能

* 2018.10.9
  * 圆形进度条编写
  * 播放模式切换交互编写

* 2018.10.10
  * 歌词数据抓取
  * 歌词滚动交互编写

* 2018.10.11
  * 播放器页面交互完善
  * 迷你播放器样式布局mixin调整

* 2018.10.12
  * 歌单列表页面编写

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






