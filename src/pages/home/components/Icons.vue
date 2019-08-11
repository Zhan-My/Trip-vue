<template>
    <div>
        <cube-slide :data="pages" :autoPlay="autoPlay" :loop="loop">
            <cube-slide-item v-for="(page,index) of pages" :key="index">
                <ul class="icons">
                    <li class="icon" v-for="icon of page" :key="icon.id">
                        <img class="icon-img" :src="icon.imgUrl" alt="">     
                        <p class="icon-tit">{{icon.desc}}</p>
                    </li>
                </ul>
            </cube-slide-item>
        </cube-slide>
    </div>
</template>
<script>
export default {
    name:'HomeIcons',
    props:{
        list:Array,
    },
    data() {
        return {
            autoPlay:false,
            loop:false
        }
    },
    computed: {
        pages(){
            const pages = []
            this.list.forEach((item,index) => {
                const page = Math.floor(index / 8)
                if(!pages[page]){
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    },  
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    @import '~styles/mixins.styl'
    .cube-slide >>> .cube-slide-dots>span.active
        background $bgcolor
   .icons
        height 0
        padding-bottom 42%
        margin-top 2%
        overflow hidden
        .icon
            float left
            width 25%
            height 0
            padding-bottom 20%
            .icon-img
                width 50%
                display block
                margin 0 auto 
            .icon-tit
                font-size .16rem
                width 100%
                margin 0 auto
                padding-top 3% 
                text-align center  
                color $darkTextColor
                ellipsis()
</style>
