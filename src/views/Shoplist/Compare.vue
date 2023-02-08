<template>
  <div id="container">
    Shop Compare
    <div id="com-box">
      <div id="s-box">
        <ShoppingBox :compMenu="true"></ShoppingBox>
      </div>
      <div id="c-list">
        <CartList></CartList>
      </div>
    </div>
    <BarcodeInput></BarcodeInput>
  </div>
</template>

<script>
import ShoppingBox from '@/components/ShoppingBox.vue';
import CartList from '@/components/CartList.vue';
import BarcodeInput from '@/components/BarcodeInput.vue'
export default {
  components:{
    CartList,ShoppingBox,BarcodeInput
  }
}
</script>

<style>
#container{
  width: 100%;
}
#com-box{
  display: flex;
  width: 100%;
}
#s-box{
  width: 50%;
}
#c-list{
  width: 50%;
}
</style>