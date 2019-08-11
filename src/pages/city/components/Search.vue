<template>
<div>
  <div class="search">
    <input v-model="keyword" type="text" class="search-input" placeholder="请输入城市名或拼音">
  </div>
  <div 
    class="search-content" 
    ref="wrapper"
    v-show="keyword"
    >
    <ul>
      <li
      class="search-item border-bottom"
      v-for="item of list" 
      :key="item.id"
      @click="handleCityClick(item.name)" 
      >{{item.name}}</li>
      <li 
      class="search-item border-bottom" 
      v-show="!listLength"
      >
        没有找到匹配数据
      </li>
    </ul>
  </div>
</div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: "CitySearch",
  props: {
    cities:Object
  },
  data() {
    return {
      keyword:'',
      list:[],
      timer:null
    }
  },
  methods: {
    handleCityClick (city){
      /* -- store.js文件省去actions部分，此处由dispatch改为commit -- */ 
      // this.$store.commit("changeCity",city)
      /* -- 等同于<roter-link to="/">标签 -- */ 
      this.$router.push("/")
      /* -- 等同于this.$store.commit(,) -- */
      this.changeCity(city)
    },
    ...mapMutations(['changeCity'])
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    keyword (){
      if(this.timer){
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100);
    }
  },
  computed: {
    listLength (){
        return this.list.length
    }
  },
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.search 
  height: 0.72rem
  background: $bgcolor
  padding: 0 0.2rem
  overflow: hidden
  .search-input 
    width: 100%
    height .62rem
    line-height .62rem
    border-radius .06rem
    color #666
    background-color: #fff
    text-align center
    box-sizing border-box
    padding 0 .2rem
  
.search-content 
  z-index 1
  overflow hidden
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  background #eee
  .search-item
    line-height .62rem
    background #fff
    color #777
    padding-left .2rem
</style>
