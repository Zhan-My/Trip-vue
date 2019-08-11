<template>
    <div>
        <cube-slide ref="slide" :data="list" @change="changePage" v-if="showSwiper">
            <cube-slide-item 
            v-for="item in list" 
            :key="item.id" 
            @click.native="clickHandler(item, item.id)"
            >
                <a :href="item.imgUrl">
                    <img :src="item.imgUrl">
                </a>
            </cube-slide-item>
        </cube-slide>
    </div>
</template>
<script>
export default {
  name:"HomeSwiper",
  props:{
    list:Array,
  },
  data() {
    return {
      
    }
  },
  methods: {
    changePage(current) {
    //   console.log('当前轮播图序号为:' + current)
    },
    clickHandler(item, index) {
    //   console.log(item, index)
    }
  }
  ,computed: {
    showSwiper(){
      return this.list.length
    }
  },
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .cube-slide >>> .cube-slide-dots>span.active
        background $bgcolor
    .cube-slide >>> .cube-slide-dots span 
        width .15rem
        height .15rem
        margin 0 .1rem
        border-radius 50%
    .cube-slide-item img 
        width 100%
</style>
