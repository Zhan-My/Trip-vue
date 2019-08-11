<template>
<div>
    <div class="banner"
    @click="handleBannerClick"
    >
        <img :src="bannerImg" alt=""
        class="banner-img">
        <div class="banner-info">
            <p class="banner-title">{{this.sightName}}</p>
            <p class="banner-number">
                <span class="iconfont banner-icon">&#xe6df;</span>
                {{this.gallaryImgs.length}}
            </p>
        </div>
    </div>
    <common-fade>
        <common-gallary
        :imgs = "gallaryImgs"
        v-if = "showGallary"
        @close = "handleCloseGallary"
        ></common-gallary>
    </common-fade>
    
</div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
import CommonFade from 'common/fade/Fade'
export default {
    name: "DetailBanner",
    props: {
        sightName:String,
        bannerImg:String,
        gallaryImgs:Array
    },
    data() {
        return {
            showGallary: false,
        }
    },
    components: {
        CommonGallary,
        CommonFade
    },   
    methods: {
      handleBannerClick (){
          this.showGallary = true
      },
      handleCloseGallary (){
          this.showGallary = false
      }  
    }, 
}
</script>
<style lang="stylus" scoped>
.banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    
    .banner-img
        width 100%
    .banner-info
        position absolute
        display flex
        color #fff
        font-size .44rem
        bottom 0
        left 0
        right 0
        line-height .64rem  
        background linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8))
        .banner-title
            flex 1
            padding 0 .2rem
        .banner-number
            margin-top .12rem
            padding 0 .4rem
            height .4rem
            line-height .4rem
            border-radius .2rem
            background-color rgba(0,0,0,.8)
            .banner-icon
                fontsize .32rem
                margin-right .1rem
</style>
