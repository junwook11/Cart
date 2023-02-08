<template>
  <b-list-group id="menubox">
    <b-card-body border="1px"
        ref="content"
      >
        <img @click="gotoDetail" :src="require('@/assets/' + imgURL)" width="400" height="470">
  
    </b-card-body>
  </b-list-group>
</template>

<script>
import RecipeMenu from './RecipeMenu.vue';
export default {
   components:{RecipeMenu},
   data(){
    return{
        
    }
   },
   methods:{
    gotoDetail(){
        this.$router.push(`/recipe/detail/${this.imgindex+1}`)
      }
   },
   props:["imgindex","imgURL"]
}
</script>

<style>
#menubox{
  display: flex;
  flex-direction: column;
}

#shop-menu{
  margin:10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>