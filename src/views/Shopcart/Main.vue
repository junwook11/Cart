<template>
  <div>
    <BackMain id="back-button"></BackMain>
    Shop Cart
    <CartBox></CartBox>
    <BarcodeInput @showModal="showThis"></BarcodeInput>
    <BarcodeModal :show="show" @hide="show = false"></BarcodeModal>  </div>
</template>

<script>
import CartBox from '@/components/CartBox.vue'
import BackMain from '@/components/Buttons/BackMain.vue'
import BarcodeInput from '@/components/BarcodeInput.vue'
export default {
    methods:{
    gotoMain(){
      this.$router.push('/main')
    }
  },
  components:{
    BackMain,CartBox,
    BarcodeInput
  }
}
</script>

<style>
#cart-box{
}
#back-button{
  position: absolute;
  top: 0;
}
</style>