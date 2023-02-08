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
    <BarcodeInput @showModal="showThis"></BarcodeInput>
    <BarcodeModal :show="show" @hide="show = false"></BarcodeModal>  </div>
</template>

<script>
import ShoppingBox from '@/components/ShoppingBox.vue';
import CartList from '@/components/CartList.vue';
import BarcodeInput from '@/components/BarcodeInput.vue'
import BarcodeModal from '@/components/Modals/BarcodeModal.vue';
export default {
  data(){
    return{
      show:false
    }
  },
  components:{
    CartList,ShoppingBox,BarcodeInput,BarcodeModal
  },
  methods:{
    showThis(){
      this.show = true
    }
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