<template>
  <div class="m-header">
    <div class="icon"> </div>
    <h1 class="text"> better music</h1>
  </div>

</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .m-header
    position:relative
    height:44px
    text-align:center
    color: $color-theme
    font-size: 0
    .icon
      display:inline-block
      vertical-align:top
      bg-image('logo')
      height:32px
      width:30px
      margin-right:9px
      background-size:32px
    .text
      display:inline-block
      vertical-align: top
      line-height: 44px
      font-size: $font-size-large

</style>
