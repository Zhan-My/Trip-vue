<template>
    <div>
        <p class="recommend-tit">热销推荐</p>
        <ul>
            <router-link tag="li"
            class="item border-bottom" 
            v-for="item of list" 
            :key="item.id"
            :to="'/detail/' + item.id"
            >
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-tit">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-btn">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    name:'HomeRecommend',
    props:{
        list:Array,
    },
    data() {
        return {
            
        }
    },  
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    @import '~styles/mixins.styl'
    .recommend-tit
        margin-top .2rem
        line-height .8rem
        background #eee
        text-indent .2rem
    ul
        margin-top 1%
    .item
        display flex
        height 1.9rem
        overflow hidden

        .item-img
            width 1.7rem
            height 1.7rem
            margin .1rem

        .item-info
            flex 1
            margin .1rem
            line-height 1.8
            min-width 0

            .item-tit
                color $darkTextColor  
                font-size .32rem
            .item-desc
                color #999
                font-size .24rem
                ellipsis()
            .item-btn
                background #ff8300
                border none
                border-radius .1rem
                margin-top .1rem
                padding .1rem .3rem
                font-size .24rem
                color #fff
                
</style>
