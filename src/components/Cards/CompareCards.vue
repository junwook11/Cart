<template>
  <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
  {{ item }}
  </b-card>
</template>

<script>
export default {
  props:["item"]
}
</script>

<style>

</style>