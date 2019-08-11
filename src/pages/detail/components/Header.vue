<template>
    <div>
        <router-link class="header-abs" to="/" v-show="showAbs">
            <span class="iconfont abs-back-icon">&#xe609;</span>
        </router-link>
        <div 
        class="header-fixed" 
        v-show="!showAbs"
        :style="opacityStyle">
            <router-link to="/">
                <span class="iconfont fixed-back-icon">&#xe609;</span>
            </router-link>
            景点详情
        </div>
    </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name: "DetailHeader",
    data() {
        return {
            showAbs: true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    methods: {
        handleScroll (){
            let top = document.documentElement.scrollTop
            if (top > 60) {
                let opacity = top/140
                opacity = opacity > 1 ? 1:opacity
                this.opacityStyle = {
                    opacity: opacity
                }
                this.showAbs = false
            } else {
                this.showAbs = true
                this.opacityStyle = {
                    opacity: 1
                }
            }
        }
    },
    activated() {
        window.addEventListener('scroll', this.handleScroll)
    },
    deactivated() {
        window.removeEventListener('scroll',this.handleScroll)
    },
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    line-height .8rem
    text-align center
    border-radius .4rem
    background-color rgba(0,0,0,.8)
    .abs-back-icon
        color #fff
        font-size .4rem
.header-fixed 
    position fixed 
    top 0
    left 0
    right 0
    overflow hidden
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    background $bgcolor
    z-index 99
    .fixed-back-icon 
        position absolute
        left 0.12rem
        top 0
        font-size: 0.4rem
        text-align: center
        color #fff
</style>
