<template>
  <div class="pp">
    <div style="height: 16%;">
      <h3 style="padding-top:3%">안녕하세요 {{ }}님! 장바구니를 선택해주세요!</h3>
    </div>
    <transition appear
	appear-active-class="animated fadeInRight">
    <div id="container">
      <div id="s-box">
        <div v-for="(list, index) in lists" :key="index" id="inner-s-box" @click="gotoMain(list)">
          <div>{{ list.cart_name }}</div>
          <ShopBox :list="list" :showDel="false"></ShopBox>
        </div>
      </div>

    </div>
  </transition>
  </div>
</template>

<script>
import {api} from '@/utils/axios'
import ShopBox from '@/components/ShoppingBox.vue'
import BackMain from '@/components/Buttons/BackMain.vue'
import BarcodeInput from '@/components/BarcodeInput.vue'
import BarcodeModal from '@/components/Modals/BarcodeModal.vue'
export default {
  data() {
    return {
      lists: [],
      show: true
    }
  },
  components: {
    ShopBox, BackMain, BarcodeInput, BarcodeModal
  },
  methods: {
    gotoMain(data) {
      this.$router.push(`/main`)
      this.$store.commit("SET_LIST",data)
    },
    showThis() {
      this.show = true
    }
  },
  async created(){
    var result = await api.cartdata.getList(this.$store.state.userId)
    var user = await api.cartdata.findUserbyId(this.$store.state.userId) 
    console.log(user.data)
    this.lists = result.data

  },
  mounted(){

  }

}
</script>

<style scoped>
.pp{
  background-image: url('@/assets/background.jpg');
  background-size: cover;
  height: 100%;
}

#s-box {
  display: flex;
}

#inner-s-box {
  min-width: 60%;
}

#container {
  overflow-x: scroll;
  height: 84%;
  width: 100%;
}
</style>