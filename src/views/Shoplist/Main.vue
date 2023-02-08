<template>
  <div id="app">
    <BackMain id="back-button"></BackMain>
    <h3>Shopping Main</h3>
    <div id="container">
      <div id="s-box">
        <div v-for="(list, index) in lists" :key="index" id="inner-s-box">
          <div @click="gotoDetail(index)">List{{ list }}</div>
          <ShopBox :showDel="false"></ShopBox>
        </div>
      </div>
      <BarcodeInput @showModal="showThis"></BarcodeInput>
      <BarcodeModal :show="show" @hide="show = false"></BarcodeModal>
    </div>
  </div>
</template>

<script>
import ShopBox from '@/components/ShoppingBox.vue'
import BackMain from '@/components/Buttons/BackMain.vue'
import BarcodeInput from '@/components/BarcodeInput.vue'
import BarcodeModal from '@/components/Modals/BarcodeModal.vue'
export default {
  data() {
    return {
      lists: [1, 2, 3, 4, 5, 6, 7],
      show: false
    }
  },
  components: {
    ShopBox, BackMain, BarcodeInput, BarcodeModal
  },
  methods: {
    gotoDetail(data) {
      this.$router.push(`/list/detail/${data + 1}`)
      this.$store.commit("SET_LIST_NUM", data + 1)
    },
    showThis() {
      this.show = true
    }
  }

}
</script>

<style>

#s-box {
  display: flex;
}

#back-button {
  position: absolute;
  left: 0;
  top: 0;
}

#inner-s-box {
  min-width: 60%;
}

#container {
  overflow-x: scroll;
}
</style>