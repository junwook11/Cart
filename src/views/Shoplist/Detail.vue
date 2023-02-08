<template>
  <div>
    <BackMain id="back-button"></BackMain>
    Shop Detail
    <DeleteModal :show="show" :delId="itemId" :delName="itemName" @hide="hideThis">
    </DeleteModal>
    <div>
      <h3>List{{ this.$store.state.list }}</h3>
      <ShopBox :showDel="true" @showModal="modalData">
      </ShopBox>
    </div>
    <button @click="moveCompare">button</button>
    <BarcodeInput></BarcodeInput>
  </div>
</template>

<script>
import BackMain from '@/components/Buttons/BackMain.vue'
import ShopBox from '@/components/ShoppingBox.vue'
import BarcodeInput from '@/components/BarcodeInput.vue'
import DeleteModal from '@/components/Modals/DeleteModal.vue'
export default {
  data() {
    return {
      show: false,
      itemId: 0,
      itemName: "nothing"
    }
  },
  components: {
    BackMain, ShopBox, BarcodeInput,
    DeleteModal,
  },
  methods: {
    moveCompare() {
      this.$router.push('/list/compare')
    },
    hideThis() {
      this.show = this.hideThis
    },
    modalData(event){
      this.show = true
      this.itemId = event[0] + 1
      this.itemName = event[1]
    }
  }
}
</script>

<style>
#back-button {
  position: absolute;
  top: 0;
}
</style>