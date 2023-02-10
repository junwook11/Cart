import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: "",
    list: "",
    carts: [],
    barcodeItem: {
      "product_seq": 0,
      "product_name": "",
      "company_seq": 0,
      "area_seq": 0,
      "weight": "",
      "product_info": "",
      "price": 0,
      "discount_price": 0,
      "discount_rate": 0,
      "stock": 0,
      "imageInfos": null,
      "_deleted": false,
      "full_name":""
    }
  },
  getters: {
  },
  mutations: {
    SET_LIST_NUM(state, data) {
      state.list = data
    },
    ADD_CART_MENU(state, data) {
      state.carts.append(data)
    },
    CHANGE_BARCODE_ITEM(state, data) {
      state.barcodeItem = data
    },
    SET_COMPANY_NAME(state,data){
      state.barcodeItem.full_name = data
    },
    ADD_ITEM(state, data) {
      state.carts.push(data)
    },

  },
  actions: {
  },
  modules: {
  }
})
