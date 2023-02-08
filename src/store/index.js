import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title:"SSAFY MART",
    list:"3",
    carts:[
      {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
        },
        {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
        },
        {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
        },
        {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
        },
        {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
        },
    ],
    
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
