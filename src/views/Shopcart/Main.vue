<template>
  <div class="cart-box">
    <div id="title-size">
      <BackMain id="back-button"></BackMain>
      <h1 id="title-name">
        Shop Cart
      </h1> 
      <Gobill id="back-button2"></Gobill>
    </div>
    <div id="shop-cart-box">
      <CartBox style="width: 95%; height: 95%; margin: 3%;"></CartBox>
    </div>
  </div>
</template>

<script>
import Gobill from '@/components/Buttons/GoBill.vue'
import CartBox from '@/components/CartBox.vue'
import BackMain from '@/components/Buttons/BackMain.vue'
import BarcodeInput from '@/components/BarcodeInput.vue'
import BarcodeModal from '@/components/Modals/BarcodeModal.vue'
export default {
  data(){
    return{
      show:false,
    }
  },
    methods:{
    gotoMain(){
      this.$router.push('/main')
    },
    showThis() {
      this.show = true
    }
  },
  components:{
    BackMain,CartBox,
    BarcodeInput,Gobill,BarcodeModal
  }
}
</script>

<style>
.cart-box{
  background-image: url('@/assets/background.jpg');
  background-size: cover;
  height: 100%;
}
#back-button{
  left: 0;
  height: 13%;
  width: 200px;
  position: absolute;
}
#back-button2{
  position: absolute;
  right: 0;
  height: 13%;
  width: 200px;
}
#shop-cart-box{
  height: 80%;
}
</style>