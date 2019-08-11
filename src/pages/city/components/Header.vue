<template>
  <div class="header">
    城市选择
    <router-link to="/">
        <span class="iconfont header-back">&#xe609;</span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "CityHeader"
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.header 
  overflow: hidden
  height: $headerHeight
  line-height: $headerHeight
  text-align: center
  color: #fff
  background: $bgcolor

  .header-back 
    position absolute
    left 0.12rem
    top 0
    font-size: 0.4rem
    text-align: center
    color #fff

</style>
