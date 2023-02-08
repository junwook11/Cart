<template>
  <div class="back">
    <h3 style="color:white">Select Dish</h3>
   <Detail id="container"></Detail>
  </div>

</template>

<script>
import BackMain from '@/components/Buttons/BackMain.vue'
import Detail from '@/components/RecipeBox_detail.vue'
export default {
  data(){
    return{
      list:[1,2,3]
    }
  },
  components:{
    BackMain,Detail

  },
  gotorecipe(data){
    this.$router.push(`/recipe/list/${data+1}`)
  }
}
</script>

<style>
#back-button{
  position: absolute;
  top: 0;
}
#container{
  height : 200%;
  width : 100%;
}
.back{
  background-color: rgb(92, 83, 83);
}
</style>