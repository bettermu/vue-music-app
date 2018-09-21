<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <m-header></m-header>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
export default {
  components: {
    MHeader
  }
}
</script>

<style scoped lang="stylus">
@import '~common/stylus/variable';

#app {
  color: $color-theme;
}
</style>
