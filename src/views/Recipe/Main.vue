<template>
  <div style="height:100%">
    <div id="title-size">
      <BackMain id="back-button"></BackMain>
      <h1 id="title-name">Select Theme</h1>
    </div>
    <div class="bb2">
      <div class="box3">
        <div v-for="(th,index) in theme" :key="index" id="inner-s-box">
          <div @click="gotoDetail(index)"><p class="mainfont">{{ th }}</p></div>
          <RecipeBox :list="th"></RecipeBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeBox from '@/components/RecipeBox.vue'
import BackMain from '@/components/Buttons/BackMain.vue'
import { api } from '@/utils/axios'
export default {
    data(){
      return{
        lists:[],
        theme:[],
      }
    },
    
    methods:{
      gotoDetail(data){
        this.$router.push(`/recipe/detail/${data+1}`)
        // this.$router.push({name:"컴포넌트 이름", params:{id:`${data+1}`}})
      }
    },
    components:{
      BackMain,RecipeBox
    },
    async created(){
      var recipe = await api.cartdata.getRecipebyItem(this.$store.state.barcodeItem.product_seq)
      for(let i in recipe.data){
        var thm = recipe.data[i].theme_seq
        if(!this.theme.includes(thm)){
          this.theme.push(thm)
        }
      }
      console.log(this.lists)
    }
}
</script>

<style scoped>

#container{
  /* position: flex;
  flex-direction: column; */
}
.box3{
  display: flex;
  margin-left:30px;
  overflow-x: scroll;
  height: 100%;
}
.bb2{
  background-color: rgb(92 83 29 / 46%);
  height: 86%;
}
.mainfont{
  font-size: 40px;
  font-family: 'Staatliches', cursive;
  letter-spacing: 5px;
}
#inner-s-box{
  height: 100%;
  min-width: 35%;
  border: 5px solid black;
}
#inner-img{
  height: 80%;
  width: 85%;
}
</style>