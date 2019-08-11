<template>
  <div class="container"
  @click="handleGallaryClick">
    <div>
      <cube-slide class="gallary-wrapper" :auto-play="false">
        <cube-slide-item 
        v-for="(item,index) of imgs"
        :key="index"
        >
            <img class="gallary-img" :src="item">
        </cube-slide-item>
      </cube-slide> 
    </div>
  </div>
</template>
<script>
export default {
  name: "CommonGallary",
  props: {
      imgs:{
          type:Array,
          default (){
              return []
          }
      }
  },
  methods: {
      handleGallaryClick (){
          this.$emit("close")
      }
  },
}
</script>
<style lang="stylus" scoped>
.container 
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  background #000
  z-index 99
  display flex
  flex-direction column
  justify-content center

  .gallary-wrapper
    height 100%

    .gallary-img
        width 100%
</style>
