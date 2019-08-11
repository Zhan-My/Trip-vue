<template>
    <div class="header">
        <div class="header-left"><span class="iconfont back-icon">&#xe609;</span></div>   
        <div class="header-input"><span class="iconfont">&#xe6a8;</span>输入城市/景点/游玩主题</div>   
        <router-link to="/city">
            <div class="header-right">{{this.city}}<span class="iconfont">&#xe614;</span></div>   
        </router-link>
    </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
    name:'HomeHeader',
    computed: {
        /* ---- 数组形式 ----*/
        ...mapState(['city']),
        ...mapGetters(['doubleCity'])
        
    },
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        display flex
        background-color $bgcolor
        line-height $headerHeight
        color #fff

        .header-left
            width .64rem
            float left
            .back-icon 
                font-size .4rem
                display block
                text-align center

        .header-input
            flex 1
            background-color #fff
            border-radius .1rem
            margin .12rem
            padding-left .2rem
            line-height .62rem
            font-size .16rem
            color #ccc

        .header-right
            color #fff
            min-width 1.24rem
            float right  
            text-align center 

</style>
