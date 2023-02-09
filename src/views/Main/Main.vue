<template>
  <div class="Main_vue_box1">
    <div class="Main_vue_box2">
      <div class="Main_vue_AD1"><AD></AD></div>
      <div class="Main_vue_parking">parking</div>
      <div class="Main_vue_user">
        <div class="Main_vue_info">회원정보</div>
        <div class="Main_vue_logout" @click="logout">로그아웃</div>
      </div>
    </div>
    <div class="Main_vue_box3">
      <div class="Main_vue_kita">
        <div ></div>
        <div>clock</div>
      </div>
      <div class="Main_vue_shopping" @click="gotoMap">shopping</div>
      <div class="Main_vue_jang" @click="gotoList">shopping product</div>
    </div>
    <BarcodeInput @showModal="showThis"></BarcodeInput>
    <BarcodeModal :show="show" @hide="show = false"></BarcodeModal>
  </div>
</template>

<script>
import Clock from '@/components/Clock.vue'
import BarcodeModal from '@/components/Modals/BarcodeModal.vue'
import BarcodeInput from '@/components/BarcodeInput.vue'
import AD from '@/components/AD.vue'
export default {
  data(){
    return{
      show:false
    }
  },
  components: { Clock,BarcodeInput,AD,BarcodeModal },
  methods: {
    gotoMap() {
      this.$router.push("/map")
    },
    gotoList() {
      this.$router.push(`/list/detail/${this.$store.state.list}`)
    },
    logout() {
      this.$router.push('/')
    },
    gotocart() {
      this.$router.push('/shopcart')
    },
    showThis() {
      this.show = true
    }

  }
}
</script>

<style scoped>
.Main_vue_box1{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 100vh;
  /* min-width: fit-content; */
  /* background: brown; */
}
.Main_vue_box2{
  /* padding: 9%; */
  border-top: 5px solid brown;
  border-left: 5px solid brown;
  border-right: 5px solid brown;
  height: 50vh;
  display: flex;
}
.Main_vue_AD1{
  /* flex-grow: 3; */
  width: 40vw;
  border: 5px solid brown;

}
.Main_vue_parking{
  flex-grow: 3;
  border: 5px solid brown;

}
.Main_vue_user{
  flex-grow: 1;
  border: 5px solid brown;

}
.Main_vue_box3{
  /* padding: 12%; */
  border: 5px solid brown;
  display:flex;
  height: 50vh;

}
.Main_vue_kita{
  /* flex-grow: 1; */
  
  border: 5px solid brown;

}
.Main_vue_shopping{
  border: 5px solid brown;
  flex-grow: 2;

}
.Main_vue_jang{
  border: 5px solid brown;
  flex-grow: 1;

}
.Main_vue_info{
height: 50%;
}
.Main_vue_logout{
  height: 50%;
}
</style>