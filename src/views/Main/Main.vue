<template>
  <div id="main-container">
    <div class="buttons-container">
      <div id="ad-container">
        <AD></AD>
      </div>
        <b-button variant="outline-secondary" id="bb">Parking</b-button>
      <div class="inner-container">
        <div id="bb-2" class="b-b-b">
          <b-button variant="outline-secondary" id="bb-3" @click="gotocart">Cart</b-button>
        </div>
        <div id="bb-2" class="b-b-b">
          <b-button variant="outline-secondary" id="bb-3" @click="logout">Logout</b-button>
        </div>
      </div>
    </div>
    <div class="buttons-container">
      <b-button variant="outline-secondary" @click="gotoMap" class="wide-bb">Map</b-button>
      <b-button variant="outline-secondary" @click="gotoList" id="bb">List</b-button>
    </div>
    <BarcodeInput @showModal="showThis"></BarcodeInput>
    <BarcodeModal :show="show" @hide="show = false"></BarcodeModal>
  </div>
</template>

<script>
import Clock from '@/components/Clock.vue'
import BarcodeInput from '@/components/BarcodeInput.vue'
import AD from '@/components/AD.vue'
import BarcodeModal from '@/components/Modals/BarcodeModal.vue'
export default {
  data(){
    return {
      show: false
    }
  },
  components: { Clock,BarcodeInput,AD,BarcodeModal },
  methods: {
    gotoMap() {
      this.$router.push("/map")
    },
    gotoList() {
      this.$router.push('/list')
    },
    logout() {
      this.$router.push('/')
    },
    gotocart() {
      this.$router.push('/shopcart')
    },
    showThis(){
      this.show = true
    }

  }
}
</script>

<style>
.buttons-container {
  height: 50vh;
  display: flex;
  justify-content: space-between;
}
#ad-container{
  width:600px;
  height: 340px;
}
.inner-container {
  display: flex;
  flex-direction: column;
}

#bb {
  flex-grow: 2;
  padding : -10px
}

#bb-2 {
  height: 50%;
}

.wide-bb {
  flex-grow: 2;
}

#bb-3 {
  height: 100%;
  width: 100%;
}
</style>