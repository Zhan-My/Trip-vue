<template>
    <div>
        <ul class="item-list">
            <li class="item" 
            v-for="item of letters"
            :key="item"
            :ref="item"
            @click="handleLetterClick"
            @touchstart.prevent="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd
            ">{{item}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"CityAlphabet",
    props:{
        cities:Object
    },
    data() {
        return {
            touchStatus:false,
            startY:0,
            timer:null
        }
    },
    computed: {
        letters(){
            const letters = []
            for(let i in this.cities){
                letters.push(i)
            }
            return letters
        }
    },
    updated() {
        this.startY = this.$refs['A'][0].offsetTop
    },
    methods: {
        handleLetterClick(e){
            this.$emit("change",e.target.innerText)
        },
        handleTouchStart(e){
            this.touchStatus = true
        },
        handleTouchMove(e){
            if (this.touchStatus) {
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                    const touchY = e.touches[0].clientY - 57
                    const index = Math.floor((touchY-this.startY) / 21)
                    if (index >= 0 && index < this.letters.length) {
                        this.$emit("change",this.letters[index])
                    }
                }, 15);
                
            }
        },
        handleTouchEnd(){
            this.touchStatus = false
        }
    },  
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.item-list
    position absolute
    right 0
    top 1.58rem
    bottom 0
    width .4rem
    display flex
    flex-direction column
    justify-content center
    .item
        line-height .56rem
        color $bgcolor
        text-align center
</style>
