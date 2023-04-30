
자바스크립트에서 service api 쓰는 법.


App.vue

```js
<script>
export default {
  methods:{
    getmypos() {
      // making bridge setting
      let bridge = new WebOSServiceBridge();
      let url = 'luna://com.sscart.app.service/mypos';
      let params = '{}';
      //call back func (if get scanned rssi data, it works)
      bridge.url = url;
      bridge.onservicecallback = this.getmyposcallback;
      setInterval(() => {
        bridge.call(url, params);
      }, 500);
    },
    getmyposcallback(msg) {
      let myx = JSON.parse(msg).x;
      let myy = JSON.parse(msg).y;
      this.$store.commit('SET_POS', {
        x: myx,
        y: myy
      })
    }
  },
  mounted() {
    this.getmypos();
  }
}
</script>
```

MYpage/ Main.Vue

```js
<script>
...
import MartMap from "@/components/MartMap.vue"
...

export default {
  data(){
    return{
...
    }
  },
  components:{
...
},
  methods:{
...
  },
  mounted(){
    // console.log(this.$store.state.cart_x + this.$store.state.cart_y );
    var movingtarget = document.getElementById("cart-icon");
    setInterval(() => {
      movingtarget.style.top = `${7.5*this.$store.state.cart_x+8}%`
      movingtarget.style.left = `${6.4*this.$store.state.cart_y-4}%`
    }, 1000);
  },
}
</script>
```


Hosted webApp
``` js
<!--
 *
 * ChangYong Ahn.
 * SSAFY 08th, A102 first project.
 * 
 *
-->

<!DOCTYPE html>
<html>
<head>
    <script>location.href='Hosted webPage URL';</script>
</head>
<body>
</body>
</html>
```


JS Service
```js
/*
 * ChangYong Ahn.
 * SSAFY 08th, A102 first project.
 * 
 */


// eslint-disable-next-line import/no-unresolved
const pkgInfo = require('./package.json');
const Service = require('webos-service');

// Create service by service name on package.json
const service = new Service(pkgInfo.name); 
const logHeader = "[" + pkgInfo.name + "]";

...

// MAKE APP SERVICE ACTIVE BACKGROUND.
service.activityManager.create('keepAlive', (activity) => {
    keepAliveActivity = activity;
    console.log('created activity');
})

// CHECK IF BLUETOOTH SERVICE POSSIBLE.
service.call('luna://com.webos.service.bluetooth2/adapter/setState', {"powered":true},function(msg) {
    console.log(JSON.stringify(msg));
    myrsp = JSON.stringify(msg);
});


...

//Other API Subsribe

//BLE Beacon Data Subscribtion
var sub = service.subscribe("luna://com.webos.service.bluetooth2/le/startScan", {"subscribe": true, "name":"ESP32"});

...



service.register("mypos",function(message){
    //console.log(logHeader, "SERVICE_METHOD_CALLED:/mypos");
    //console.log("In mypos callback");

    message.respond({
        returnValue: true,
        x:curx,
        y:cury
    });
});


...

//////만약에, 타 Service를 Subscribe 하는 Service를 만들었다면,
//////반드시, Quit으로 해당 subscribe를 꺼줄것
//////////////////Customized quit///////////////////
//////////////////////////////////////
service.register("quit", function(){
    sub.cancel();

    service.activityManager.complete(keepAliveActivity, (activity) => {
        keepAliveActivity = null;
        console.log('completed activity');
    });
});
```

