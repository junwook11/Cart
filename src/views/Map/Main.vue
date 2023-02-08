<template>
  <div>
    Map
    <div id="map-container">
      <div id="mart-map">
        <MartMap id="mart-map"></MartMap>
      </div>
      <div>
        <div id="buttons">
          <GoCart style="width:50%"></GoCart>
          <BackMain style="width:50%"></BackMain>
        </div>
        <div>
          List{{ $store.state.list }}
          <ShoppingBox></ShoppingBox>
        </div>
      </div>
    </div>
    <BarcodeInput @showModal="showThis"></BarcodeInput>
    <BarcodeModal :show="show" @hide="show = false"></BarcodeModal>  </div>
</template>

<script>
import MartMap from "@/components/MartMap.vue"
import ShoppingBox from '@/components/ShoppingBox.vue'
import GoCart from '@/components/Buttons/GoCart.vue'
import BackMain from "@/components/Buttons/BackMain.vue"
import BarcodeInput from '@/components/BarcodeInput.vue'
import BarcodeModal from '@/components/Modals/BarcodeModal.vue'
export default {
  components:{
    MartMap,BackMain,
    ShoppingBox,GoCart,
    BarcodeInput,BarcodeModal
  },
  methods:{
    showThis(){
      this.show = true
    }
  }
}
</script>

<style>
#map-container{
  display: flex;
  justify-content: space-between;
}
#mart-map{
  width: 100%;
  height: 100%;
}
#buttons{
  display: flex;

}
</style>