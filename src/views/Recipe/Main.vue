<template>
  <div>
    <div class="box1">
      <h3>Select Theme</h3>
    </div>
    <div class="bb2">
      <div class="box3">
        <div v-for="(list,index) in lists" :key="index" id="inner-s-box">
          <div @click="gotoDetail(index)"><p class="mainfont">{{ list }}</p></div>
          <RecipeBox @click="gotoDetail(index)" :imgURL="lists2[index]" :imgindex="index"></RecipeBox>  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeBox from '@/components/RecipeBox.vue'
import BackMain from '@/components/Buttons/BackMain.vue'
export default {
    data(){
      return{
        
        lists:["백종원 요리비책","Cookstargram",`_Season_`],
        lists2:[`11.png`,"111.jpg","season.jpg"],
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
    }
}
</script>

<style>
#back-button{
  position: absolute;
  top: 0;
}
#container{
  overflow-x: scroll;
  /* position: flex;
  flex-direction: column; */
}
.box3{
  width:800px;
  display: flex;
  margin-left:30px;
}
.bb2{
  padding-top : 30px;
  background-color: rgb(92 83 29 / 46%);
  height: 670px;
  padding-left: 22px;
}
.mainfont{
  font-size: x-large;
  font-family: 'Staatliches', cursive;
  letter-spacing: 5px;
}

</style>