<template>
  <div class="slider">
    <div class="slider-group">
      <slot></slot>
    </div>
    <div class="dots"></div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props:{
    //循环轮播
    loop:{
      type:Boolean,
      default:true
    },
    //自动轮播
    autoPlay:{
      type:Boolean,
      default:true
    },
    //轮播间隔
    interval:{
      type:Number,
      default:4000
    }
  },
  mounted(){

  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"

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


