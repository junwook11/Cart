<template>
  <b-modal ref="barcode-modal" hide-footer hide-title size="lg">
    <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
    <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">Toggle Me</b-button>
  </b-modal>
</template>

<script>
export default {
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