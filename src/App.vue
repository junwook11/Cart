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
      var url = 'luna://com.testui.app.service/mypos';
      var params = '{}';

      //call back func (if get scanned rssi data, it works)

      bridge.url = url;
      bridge.onservicecallback = this.callback2;
      setInterval(() => {
        bridge.call(url, params);
      }, 1000);
    },

    callback2(msg) {
      var myx = JSON.parse(msg).x;
      var myy = JSON.parse(msg).y;
      this.$store.commit('SET_POS', {
        x: myx,
        y: myy
      })
    }

  },
  mounted() {


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
    this.getmypos();
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