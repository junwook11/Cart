<template>
  <div id="menubox">
    <b-card-body
        id="nav-scroller"
        ref="content"
        style="position:relative; height:500px; margin: 20px; overflow-y:scroll;" 
      >
      <div v-for="(cart,index) in $store.state.carts" :key="index" id="shop-box">
        <CartListMenu :Cartnum="index" id="shop-menu"></CartListMenu>
      </div>
    </b-card-body>
  </div>
</template>

<script>
import CartListMenu from './CartListMenu.vue';
export default {
    components:{
        CartListMenu,
    },


}
</script>

<style>
#menubox{
  display: flex;
  flex-direction: column;
  height: 100%;
}
#shop-box{
  width: 100%;
}
#shop-menu{
  margin:10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>