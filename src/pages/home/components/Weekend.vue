<template>
    <div>
        <p class="Weekend-tit">周末去哪儿</p>
        <ul>
            <li class="item border-bottom" v-for="item of list" :key="item.id">
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-tit">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'HomeWeekend',
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
    .Weekend-tit
        margin-top .2rem
        line-height .8rem
        background #eee
        text-indent .2rem

    .item-img
        width 100%
        margin-top 1%

    .item-info
        padding .2rem .1rem
        line-height 1.5
        min-width 0

    .item-tit
        color $darkTextColor  
        font-size .32rem
    .item-desc
        color #999
        font-size .24rem
        ellipsis()
        
                
</style>
