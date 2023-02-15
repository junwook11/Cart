<template>
  <div >

  </div>
</template>

<script>
export default {
    // 별점넣는 부분 나중에 db로 받을 때 배열로 받아서 넣어야함 https://bootstrap-vue.org/docs/components/form-rating
    data() {
      return {
        value: 3.5
      }
    },
    methods:{
        gotoDetail2(data){
            this.$router.push(`/recipe/list/${data}`)
        }
    }
}
</script>

<style>

</style>