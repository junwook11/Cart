<template>
  <div>
    <b-card
    title="Card Title"
    :img-src=img
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 card-margin"
  >
    <b-card-text>
        {{ Name }}
    </b-card-text>
  </b-card>
  </div>
</template>

<script>
export default {
    props:["Name","Id","img"],
    data(){
        return{
        }
    }
}
</script>

<style>
.card-margin{
    margin: 0px 10px;
}
</style>