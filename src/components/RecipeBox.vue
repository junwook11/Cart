<template>
<div>
  <img :src=imgurl alt="">
</div>  
</template>

<script>
import { api } from '@/utils/axios';
import RecipeMenu from './RecipeMenu.vue';
export default {
   components:{RecipeMenu,},
   data(){
    return{
        imgurl:""
    }
   },
   methods:{
    gotoDetail(){
        this.$router.push(`/recipe/detail/${this.imgindex+1}`)
      }
   },
   props:["list"],
   async created(){
    var img = await api.cartdata.getRecipeImg(this.list.recipe_seq)
    // console.log(img)
   }
}
</script>

<style>
#shop-menu{
  margin:10px;
  display: flex;
  justify-content: space-between;

}
</style>