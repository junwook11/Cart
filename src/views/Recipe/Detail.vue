<template>
  <div style="height: 100%;">
    <div id="title-size">
      <BackMain id="back-button"></BackMain>
      <h1 id="title-name">Select Dish</h1>
    </div>
    <div class="bb2">
      <div class="box3">
        <div v-for="(list,index) in lists" :key="index" id="inner-s-box">
          <div @click="gotorecipe(index)">List {{ list }}</div>
          <Detail @click="gotorecipe(index)"></Detail>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import BackMain from '@/components/Buttons/BackMain.vue'
import Detail from '@/components/RecipeBox_detail.vue'
export default {
  data(){
    return{
      lists:[1,2,3]
    }
  },
  components:{
    BackMain,Detail

  },
  methods:{
    gotorecipe(data){
      this.$router.push(`/recipe/list/${data+1}`)
      console.log("clicked")
    }
  }
}
</script>

<style scoped>

#container{
  
}

</style>