<template>
  <div style="height: 100vh;background-color: #4a3838;">
      <b-button variant="danger" @click="gotocart" id="back-button">GoBack</b-button>
    <div id="container">
      <h4 style="color:white">결제 수단을 선택해주세요</h4>
      <div id="card" style="justify-content: space-around; width: 100%; height: 90%;" @click="gotodetail()">
        <b-button variant="outline-secondary" style="width:100%;background-color: gray;border-radius: 3%;margin: 4% 2% 4% 6%;">
          <img src="@/assets/credit.png" style="height: 50%;width: 50%;">
          <h1 style="font-size:150;color: white;">신용 카드</h1>
        </b-button>
        <b-button variant="outline-secondary" style="width: 100%;padding: 0%;;margin: 4% 6% 4% 2%;">
            <img src="@/assets/1231.jpg" style="width:100%;height:100%;border-radius: 3%">
        </b-button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    gotocart(){
      this.$router.push('/shopcart')
    },
    gotodetail(){
      this.$router.push('/bill/detail')
    }
  }
}
</script>

<style scoped>
/* #app {
  display: flex;
  border: 10px solid black;
  flex-direction: column;
  justify-content: center;
} */
#card{
  display: flex;
  justify-content: center;
}
#back-button{
  position: inherit;
}
#container{
  text-align: center;
  height: 96%;
}
</style>