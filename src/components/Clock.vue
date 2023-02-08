<template>
  <div onload="showClock">
    {{now}}
  </div>
</template>

<script>
export default {
    data(){
        return{
            now:""
        }
    },
    methods:{
        showClock(){
            const date = new Date()

            this.now = `${date.getHours}:${date.getMinutes}:${date.getSeconds}`
            setTimeout(() => {
               this.showClock() 
            }, 1000);
        }
    }
}
</script>

<style>

</style>