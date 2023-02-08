<template>
  <b-list-group-item id="name-box">
    <div id="menu-id">
      {{ CartId }}
    </div> 
    <div id="menu-name">
      {{ CartName }}
    </div>

  </b-list-group-item>
</template>

<script>
export default {
  props:["CartName","CartId"]
}
</script>

<style>

</style>