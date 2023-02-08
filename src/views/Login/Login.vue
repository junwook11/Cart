<template>
  <div>
    <div id="app">
    <div>
      <div>
        <p>Time</p>
      </div>
      <div id="login">
        <div>
          <p>ID:</p> <input type="email">
          <br>
          <p>PSWD:</p> <input type="passwd">
        </div>
        <button @click="gotoHome">Login</button>
      </div>
      </div> 
  </div>
  </div>
</template>

<script>
export default {
    methods:{
    gotoHome(){
      this.$router.push('/main')
    }
  }
}
</script>

<style>
header,footer{
  border-top: 2px solid gray;
  border-bottom: 2px solid gray;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#login{
  display: flex;
  text-align: center;
}

#app>header{
  text-align: center;
}

#app>div{
  flex:1;
}
#app>footer{
  text-align: center;
}
</style>