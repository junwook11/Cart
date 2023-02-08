<template>
  <div id="app">
      <b-button variant="danger" @click="gotocart" id="back-button">GoBack</b-button>
    <div id="container">
      <h4>결제 수단을 선택해주세요</h4>
      <div id="card">
        <b-button variant="outline-secondary">신용 카드</b-button>
        <b-button variant="outline-secondary">카카오 페이</b-button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    gotocart(){
      this.$router.push('/shopcart')
    }
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#card{
  display: flex;
  justify-content: center;
}
#back-button{
  position: inherit;
}
#container{
  text-align: center;
}
</style>