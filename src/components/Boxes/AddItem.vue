<template>
    <div>
      <!-- <img :src=urls[addId].url alt="img" style="height: 350px; "> -->
      <p>{{ $store.state.barcodeId }}</p>
      <p>{{ $store.state.barcodeId }}</p>
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
      var image = await api.jsonplaceholder.findImg()
      this.urls = image.data
      console.log(urls)
      console.log(this.$store.state.barcodeId)
    }
  }
  </script>
  
  <style>
  
  </style>