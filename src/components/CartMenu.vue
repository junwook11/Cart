<template>
  <div>
    <b-card
    :title="item.title"
    :img-src=img
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 card-margin"
  >
    <b-card-text>
        {{ item.title }}
        {{ item.price }}원
        {{ item.stock }}개
    </b-card-text>
  </b-card>
  </div>
</template>

<script>
import {api} from '@/utils/axios'
export default {
    props:["item"],
    data(){
        return{
          img:""
        }
    },
    mounted(){
      console.log(this.item)
    },
    async created(){
        this.img = `https://i8a102.p.ssafy.io/api/image/product/${this.item.id}`
        

    }
}
</script>

<style>
.card-margin{
    margin: 0px 10px;
}
</style>