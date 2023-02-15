<template>
    <div>
      <!-- <img :src=urls[addId].url alt="img" style="height: 350px; "> -->
      <p>{{ addId }}</p>
      <p>{{ addName }}</p>
      <p>수량</p>
      <Stocks></Stocks>
    </div>
  </template>
  
  <script>
  import {api} from '@/utils/axios'
  import Stocks from '@/components/Buttons/Stock.vue'
  export default {
    data(){
      return{
      }
    },
    components:{
      Stocks
    },
    props:[
      "addId", "addName"
    ],
    async created(){

    }
  }
  </script>
  
  <style>
  
  </style>