<template>
  <b-modal ref="barcode-modal" hide-footer hide-title size="xl">
    <div class="d-block text-center">
      <AddItem :addId="$store.state.barcodeItem.product_seq" :addName="$store.state.barcodeItem
      .full_name"></AddItem>
    </div>
    <div>

    </div>
    <div class="btn-container">
      <b-button class="mt-3" variant="outline-danger" block @click="putCart">카트에 담기</b-button>
      <b-button class="mt-3" variant="outline-danger" block @click="gotoRecipe">레시피 보기</b-button>
    </div>
  </b-modal>
</template>

<script>
import AddItem from '@/components/Boxes/AddItem.vue'
export default {
  data(){
    return{
      compare:[]
    }
  },
  components: {
    AddItem
  },
  props: ["show"],
  methods: {
    showModal() {
      this.$refs['barcode-modal'].show()
      this.$emit('hide', false)
    },
    hideModal() {
      this.$refs['barcode-modal'].hide()
      this.$emit('hide', false)
    },
    gotoRecipe(){
      this.$router.push('/recipe')
    },
    putCart(){
      this.$store.commit('ADD_ITEM',{
        id:this.$store.state.barcodeItem.product_seq,
        title:this.$store.state.barcodeItem.product_name
      })
      console.log(this.$store.state.carts)
      this.hideModal()
      this.$router.push('/shopcart')
    }
  },
  async created(){

  },
  watch: {
    show(newShow) {
      if (newShow === true) {
        this.showModal()
      }
    }
  }
}
</script>

<style>

</style>