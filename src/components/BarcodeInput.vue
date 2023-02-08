<template>
  <input id="b-input" type="text" @keyup.enter="pressEnter" ref="barcode" style="border:none; outline: none;">
</template>

<script>
export default {
    data(){
        return{
            inputData:""
        }
    },
    methods:{
        pressEnter(){
            var inputD = this.$refs.barcode.value
            console.log(inputD)
            this.$store.state.carts.push({
                'id':999,
                'title':inputD
            })
            console.log(this.$store.state.carts)
            this.$refs.barcode.value = ""
            this.$router.push("/shopcart")
        }
    },
    mounted(){
        setInterval(() => {
            this.$refs.barcode.focus()
        },1000)
    }
}
</script>

<style>
#b-input{
color: transparent;
  text-shadow: 0 0 0 #2196f3;
  overflow: hidden;
  border: 0;
  width: 1px;
  height: 1px;
  clip: rect(1px, 1px, 1px, 1px);
  /* 추가 */
  clip-path: inset(50%);
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
}
</style>