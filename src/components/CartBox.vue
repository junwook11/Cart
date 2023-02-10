<template>
  <div>
    <h4>CartMenu</h4>
    <div id="cart-box" style="height:600px; border: 1px solid grey; padding: 10px;">
        <div v-for="(item,index) in this.$store.state.carts" :key="index" id="card">
            <CartMenu :Name="item.title" :Id="item.id" :img="Imgs[index].url"></CartMenu>
            <div>{{ index }}</div>
        </div>
    </div>
  </div>
</template>

<script>
import CartMenu from './CartMenu.vue'
import {api} from '../utils/axios'
export default {
  components: { CartMenu },
  data(){
    return{
      Imgs:[],
      
    }
  },
  async created(){

  }
}

</script>

<style>
#cart-box{
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    height: 600px;
}
#card{
    width: 25%;
}

</style>