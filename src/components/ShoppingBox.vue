<template>
  <b-list-group id="menubox" >
    <b-card-body
        id="nav-scroller"
        ref="content"
      >
      <div v-for="(menu,index) in menus" :key="index" id="shop-box">
        <ShoppingMenu 
        :compMenu="compMenu" 
        :menuName="menu.title" 
        :menuId="menu.id" 
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
    }
  },
  props:
  ["showDel","compMenu"],
  components: { ShoppingMenu },
  methods:{

  },
  async created(){
    const result = await api.jsonplaceholder.findAll()
    this.menus = result.data
  },
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
}
#menubox{
  display: flex;
  flex-direction: column;
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