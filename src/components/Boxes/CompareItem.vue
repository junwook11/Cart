<template>
    <b-card-body
        id="nav-scroller"
        ref="content"
      >
      <div v-for="(item,index) in comps" :key="index" id="compare-cards">
        <CompareCards :item="item"></CompareCards>
      </div>
    </b-card-body>
</template>

<script>
import CompareCards from '../Cards/CompareCards.vue'
import { api } from '@/utils/axios'
export default {
  components: { CompareCards },
  data(){
    return{
      comps:[]
    }
  },
  async created(){
    var arr = await api.cartdata.getItembyName(this.$store.state.barcodeItem.product_name)
    // console.log(arr)
    this.comps.push(arr.data.product_name)
  }
}
</script>

<style scoped>
#nav-scroller{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
}
#compare-cards{
  height: 100%;
  min-width: 30%;
  margin: 1%;
}
</style>