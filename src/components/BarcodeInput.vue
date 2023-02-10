<template>
  <input id="b-input" type="text" 
  @keyup.enter="pressEnter" 
  ref="barcode" 
  inputmode="none"
  style="border:none; outline: none;">
</template>

<script>
import {api} from '../utils/axios'
export default {
    data(){
        return{
            inputData:""
        }
    },
    methods:{
        async pressEnter(){
            var inputD = this.$refs.barcode.value
            var iteminfo = await api.cartdata.getItembyId(inputD)
            var itemData = iteminfo.data
            var companyinfo = await api.cartdata.getCompbyId(itemData.company_seq)
            console.log(itemData)
            this.$store.commit('CHANGE_BARCODE_ITEM',itemData)
            this.$store.commit('SET_COMPANY_NAME',`${companyinfo.data.company_name} ${itemData.product_info} ${itemData.price} 원`)
            this.$refs.barcode.value = ""
            this.$emit('showModal',true)

        }
    },
    mounted(){
        setInterval(() => {
            this.$refs.barcode.focus()
        },1000)
    },

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