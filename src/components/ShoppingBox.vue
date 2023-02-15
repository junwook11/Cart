<template>
  <b-list-group id="menubox" >
    <b-card-body
        id="nav-scroller"
        ref="content"
      >
      <div v-for="(menu,index) in list.products" :key="index" id="shop-box">
        <ShoppingMenu 
        :compMenu="compMenu" 
        :menuId="menu.product_seq" 
        :menuPrice="menu.price"
        :menuStock="menu.cnt" 
        :showDel="showDel"
        @showModal="$emit('showModal',[index,menu.title])"
        id="shop-menu">
        </ShoppingMenu>
      </div>
    </b-card-body>
  </b-list-group>
</template>

<script>
import ShoppingMenu from './ShoppingMenu.vue'
import {api} from '../utils/axios'
export default {
  data(){
    return{
      menus:[],
      listnumber:0
    }
  },
  props:
  ["showDel","compMenu","list"],
  components: { ShoppingMenu },
  methods:{

  },
  async created(){
    console.log(this.$store.state.userId)
    const result = await api.cartdata.getList(this.$store.state.userId)
    // this.listnumber=result.data.length
    // console.log(result)
    // console.log(this.listnumber)
    var result_size = result.data[0].products.length
    console.log(result_size)
    console.log(this.$store.state.userId)
    
    this.menus = result.data[0]
  },
  mounted(){
    console.log(this.$store.state.userID)
  }
}
</script>

<style>
#nav-scroller{
  position:relative; 
  height:500px; 
  margin: 20px; 
  overflow:auto;
  border: 1px solid grey;
  border-radius: 5px;
  background-color: white;
  opacity: 0.9;
}

#shop-box{
  width: 100%;
}
#shop-menu{
  margin:10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>