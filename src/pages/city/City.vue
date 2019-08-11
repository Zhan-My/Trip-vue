<template>
    <div>
        <city-header></city-header>
        <city-search
        :cities = "cities">
        </city-search>
        <city-list
        :hotCities = "hotCities"
        :cities = "cities"
        :letter = "letter"
        ></city-list>
        <city-alphabet
        :cities = "cities"
        @change = "handleLetterChange"></city-alphabet>
    </div>
</template>
<script>
import CityHeader from "./components/Header"
import CitySearch from "./components/Search"
import CityList from "./components/List"
import CityAlphabet from "./components/Alphabet"
export default {
    name:"City",
    data() {
        return {
            hotCities:[],
            cities:{},
            letter:''
        }
    },
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    methods:{
        getCityInfo() {
            this.$http.get('/api/city.json').then(res => {
                res = res.data
                if (res.ret && res.data) {
                    let data = res.data
                    console.log(data);
                    this.hotCities = data.hotCities
                    this.cities = data.cities
                }
            })
        },
        handleLetterChange(letter){
            this.letter = letter
        }
    },
    mounted() {
        this.getCityInfo()
    },
}
</script>
<style lang="stylus" scoped>

</style>
