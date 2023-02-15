<template>
  <div id="app">
    <Transition name="fade">
      <router-view></router-view>
    </Transition>
  </div>
</template>

<script>
export default {
  methods:{
    getmypos() {
      var myx = 0;
      var myy = 0;
      // making bridge setting
      var bridge = new WebOSServiceBridge();

      if(bridge){

      }
      var url = 'luna://com.testui.app.service/mypos';
      var params = '{}';

      //call back func (if get scanned rssi data, it works)
      function callback(msg) {
        myx = JSON.parse(msg).x;
        myy = JSON.parse(msg).y;
        this.$store.commit('SET_POS', {
          x: myx,
          y: myy
        })
      }

      bridge.url = url;
      bridge.onservicecallback = callback;
      setInterval(() => {
        bridge.call(url, params);
      }, 1000);
    }
  },
  mounted() {

    this.$store.commit('SET_POS', {
      x: 4,
      y: 4
    })
    // function getmypos() {
    //   // making bridge setting
    //   var bridge = new WebOSServiceBridge();

    //   if(bridge){

    //   }
    //   var url = 'luna://com.testui.app.service/mypos';
    //   var params = '{}';

    //   //call back func (if get scanned rssi data, it works)
    //   function callback(msg) {
    //     myx = JSON.parse(msg).x;
    //     myy = JSON.parse(msg).y;
    //     this.$store.commit('SET_POS', {
    //       x: myx,
    //       y: myy
    //     })
    //   }

    //   bridge.url = url;
    //   bridge.onservicecallback = callback;
    //   setInterval(() => {
    //     bridge.call(url, params);
    //   }, 1000);
    // }

    getmypos();

  }
}
</script>

<style scoped>
#app{
  text-align: center;
  height: 100vh;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}


</style>