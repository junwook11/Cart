<template>
    <b-button @click="gotoMain" id="go-back">GoBack</b-button>
</template>

<script>
export default {
    methods:{
    gotoMain(){
      this.$router.go(-1)
    }
  },
}
</script>

<style>
#go-back{
  height: 100px;
}
</style>