<template>
  <b-modal ref="barcode-modal" hide-footer hide-title size="lg">
    <div class="d-block text-center">
      <AddItem :addId="$store.state.barcodeId"></AddItem>
    </div>
    <div class="btn-container">
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
      <b-button class="mt-3" variant="outline-danger" block @click="gotoRecipe">레시피 보기</b-button>
    </div>
  </b-modal>
</template>

<script>
import AddItem from '@/components/Boxes/AddItem.vue'
export default {
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
    }
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