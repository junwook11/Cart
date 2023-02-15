<template>
  <div class="back123">
    <div id="container">
      <div id="title-size">
        <BackMain id="back-button"></BackMain>
        <h1 id="title-name">Shop Compare</h1>
      </div>
      <transition appear appear-active-class="animated fadeInUp">
        <div id="com-box">
          <div id="c-list">
            <CartList></CartList>
          </div>
          <div id="s-box">
            <ShoppingBox :list="this.$store.state.list" :compMenu="true"></ShoppingBox>
          </div>
        </div>
      </transition>

    </div>
  </div>
</template>

<script>
import ShoppingBox from '@/components/ShoppingBox.vue';
import CartList from '@/components/CartList.vue';
import BarcodeInput from '@/components/BarcodeInput.vue'
import BarcodeModal from '@/components/Modals/BarcodeModal.vue';
import BackMain from "@/components/Buttons/BackMain.vue"
export default {
  data() {
    return {
      show: false
    }
  },
  components: {
    CartList, ShoppingBox, BarcodeInput, BarcodeModal, BackMain
  },
  methods: {
    showThis() {
      this.show = true
    }
  }
}
</script>

<style>
.back123 {
  background-image: url('@/assets/background.jpg');
  position: relative;
  background-size: cover;
}

#container {
  width: 100%;
  height: 100vh;
}

#com-box {
  display: flex;
  width: 100%;
  height: 86%;
}

#s-box {
  width: 50%;
}

#c-list {
  width: 50%;
}

#title-size {
  height: 14%;
  color: white;
  background-color: #343a40;
  display: flex;
  justify-content: center;
  align-items: center;
}

#title-name {
  height: fit-content;
  margin: auto;
}
</style>