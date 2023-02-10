<template>
    <div>
      <!-- <img :src=urls[addId].url alt="img" style="height: 350px; "> -->
      <p>{{ addId }}</p>
      <p>{{ addName }}</p>
    </div>
  </template>
  
  <script>
  import {api} from '@/utils/axios'
  export default {
    data(){
      return{
        urls:[]
      }
    },
    props:[
      "addId", "addName"
    ],
    async created(){
      var image = await api.cartdata.getItembyId(this.$store.state.barcodeId)
      this.urls = image.data
    }
  }
  </script>
  
  <style>
  
  </style>