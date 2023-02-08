import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title:"SSAFY MART",
    list:"3",
    carts:[],
    barcodeId:"",
    
    
  },
  getters: {
  },
  mutations: {
    SET_LIST_NUM(state,data){
      state.list = data
    },
    ADD_CART_MENU(state,data){
      state.carts.append(data)
    }
  },
  actions: {
  },
  modules: {
  }
})
