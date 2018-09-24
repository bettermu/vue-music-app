<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <span class="dot" v-for="(item,index) in dots" :class="{active:currentPageIndex===index}"></span>
    </div>
  </div>
</template>

<script>
import { addClass } from "common/js/dom";
import BScroll from "better-scroll";
export default {
  data(){
    return {
      dots:[],
      currentPageIndex:0
    }
  },
  props: {
    //循环轮播
    loop: {
      type: Boolean,
      default: true
    },
    //自动轮播
    autoPlay: {
      type: Boolean,
      default: true
    },
    //轮播间隔
    interval: {
      type: Number,
      default: 4000
    }
  },
  mounted() {
    //此处可以使用nextTick完成，但是这里使用setTimeout,原理都是一样，浏览器渲染完成之后，立即执行。在宏任务执行结束后的下一刻，立即执行所注册过的微任务
    //这里20毫秒是个经验值
    setTimeout(() => {
      this._setSliderWidth();
      this._initDots()
      this._initSlider();

      if(this.autoPlay){
        this._play()
      }
    }, 20);

    window.addEventListener('resize',()=>{
      if(!this.slider){
        return
      }
      this._setSliderWidth(true)
      this.slider.refresh()
    })
  },
  methods: {
    //设置slider宽度
    _setSliderWidth(isResize) {
      //获取轮播总数
      this.children = this.$refs.sliderGroup.children;

      let width = 0;
      let sliderWidth = this.$refs.slider.clientWidth;
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i];
        //添加className
        addClass(child, "slider-item");
        child.style.width = sliderWidth + "px";
        width += sliderWidth;
      }

      //如果Loop为true
      if (this.loop && !isResize) {
        width += 2 * sliderWidth;
      }

      this.$refs.sliderGroup.style.width = width + "px";
    },

    //初始化slider
    _initSlider() {
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: true,
        snapLoop: this.loop,
        snapThreshold: 0.3,
        snapSpeed: 400,
      });

      this.slider.on('scrollEnd',()=>{
        let pageIndex=this.slider.getCurrentPage().pageX
        if(this.loop){
          pageIndex-=1
        }
        this.currentPageIndex=pageIndex

        if(this.autoPlay){
          this._play()
        }
      })

      this.slider.on('beforeScrollStart',()=>{
        if(this.autoPlay){
          clearTimeout(this.timer)
        }
      })
    },

    _initDots(){
      this.dots=new Array(this.children.length)
    },

    //自动播放方法
    _play(){
      let pageIndex=this.currentPageIndex+1
      if(this.loop){
        pageIndex+=1
      }

      this.timer=setTimeout(()=>{
        this.slider.goToPage(pageIndex,0,400)
      },this.interval)
    }
  },
  destoryed(){
    clearTimeout(this.timer)
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable';

.slider
    min-height: 1px
    .slider-group
      position: relative
      overflow: hidden
      white-space: nowrap
      .slider-item
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center
        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none
        img
          display: block
          width: 100%
    .dots
      position: absolute
      right: 0
      left: 0
      bottom: 12px
      text-align: center
      font-size: 0
      .dot
        display: inline-block
        margin: 0 4px
        width: 8px
        height: 8px
        border-radius: 50%
        background: $color-text-l
        &.active
          width: 20px
          border-radius: 5px
          background: $color-text-ll
</style>


