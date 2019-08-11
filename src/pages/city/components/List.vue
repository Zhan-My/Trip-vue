<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="btnList">
          <div class="btnWrapper">
            <p class="btn">{{this.currentCity}}</p>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="btnList">
          <div class="btnWrapper"
          v-for="hot of hotCities" 
          :key="hot.id"
          >
          <router-link to="/">
            <p 
            class="btn"
            @click="handleCityClick(hot.name)"
            >{{hot.name}}</p>
          </router-link>
          </div>
        </div>
      </div>
      <div class="area"
      v-for="(item,key) of cities"
      :key="key"
      :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <ul class="item-list"
        v-for="city of item"
        :key="city.id"
         >
         <router-link to="/">
          <li 
          class="item border-bottom"
          @click="handleCityClick(city.name)"
          >{{city.name}}</li>
        </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: "CityList",
  props:{
    hotCities:Array,
    cities:Object,
    letter:String
  },
  methods: {
    handleCityClick (city){
      /* -- store.js文件省去actions部分，此处由dispatch改为commit -- */ 
      // this.$store.commit("changeCity",city)
      this.changeCity(city)
    },
    ...mapMutations(['changeCity'])
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter(){
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  computed: {
    ...mapState({
      currentCity:'city'
    })
  },
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-bottom
  &:before
    border-color #ccc
.border-topbottom
  &:before
    border-color #ccc
  &:after
    border-color #ccc
.list 
  position absolute
  top 1.58rem
  bottom 0
  left 0
  right 0
  overflow hidden
.title
  line-height .72rem
  background-color #f7f7f7
  color #666
  font-size .36rem
  padding-left .1rem
.btnList
  overflow hidden
  padding-right .3rem
  .btnWrapper
    float left
    width 33.33%
    .btn
      color #333
      margin .2rem
      padding .1rem 0
      text-align center
      font-size .4rem
      border 1px solid #ccc
      border-radius .06rem
.item-list
  line-height .64rem
  color #333
  .item
    padding 0 .2rem
    box-sizing border-box
</style>
