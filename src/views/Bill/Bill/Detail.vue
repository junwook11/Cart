<template>
  
  <div id="detailb">
    <div>
    <Checkout :show="showDel" :delId="itemId" :delName="itemName" @hide="hideThis"></Checkout>
  </div>
    <div>
      <CartList></CartList>
    </div>
    <div>
      <div>
        <h2>Total Price</h2>
        <input type="text" class="totalprice">
      </div>
      <div>
        <h2>Discount</h2>
        <input type="text" class="totalprice">
      </div>
      <div>
        <h2>Final Price</h2>
        <input type="text" class="totalprice">
      </div>
      <div id="pppp">
      </div>
    </div>
  </div>
</template>

<script>
import CartList from '@/components/CartList.vue';
import Checkout from '@/components/Modals/BillModal.vue'
export default {
    components:{
      CartList,Checkout
    },
    data() {
      return{
        showDel: false,
        show:false,
        itemId: 0,
        itemName: "nothing"
      }
    },
    methods:{
    moveCompare() {
      this.$router.push('/list/compare')
    },
    hideThis() {
      this.show = this.hideThis
    },
    modalData(event){
      this.showDel = true
      this.itemId = event[0] + 1
      this.itemName = event[1]
    },
    showThis(){
      this.show = true
    }
  }
}
</script>
<style scoped>

#pppp{
  display: flex;
}
#detailb{
  margin-top: 5%;
  display: flex;
  justify-content: space-around;
  height: 100%;
}
#c-list2{
  display: flex;
  flex-direction: column;
  margin-right: 0%;
}
.totalprice{
  border: 1px solid black;
  border-radius: 1%;
  height: 10vh;
  width: 30vw;
}
</style>