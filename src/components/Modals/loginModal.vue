<template> 
      <b-modal
        id="modal-prevent-closing"
        ref="login_modal"
        title="Sign in"
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleOk"
      >
      <p style="text-align: center;">
        <img src="@/assets/favicon.png" alt="">
      </p>
        <form ref="form" @submit.stop.prevent="handleSubmit" >
          <b-form-group
            label="Name"
            label-for="name-input"
            invalid-feedback="Name is required"
            :state="nameState"
          >
            <b-form-input
              id="name-input"
              v-model="name"
              :state="nameState"
              required
            ></b-form-input>
          </b-form-group>
        </form>
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group
            label="Password"
            label-for="password-input"
            invalid-feedback="password is required"
            :state="hidden"
          >
            <b-form-input
              id="password-input"
              v-model="password"
              :state="hidden"
              required
              type="password"
            ></b-form-input>
          </b-form-group>
        </form>
      </b-modal>
  </template>
  
  <script>
    export default {
      data() {
        return {
          name: '',
          nameState: null,
          submittedNames: []
        }
      },
      props:[
        "show"
      ],
      methods: {
        showModal(){
            this.$refs['login_modal'].show()
            this.$emit('hide',false)
        },
        hideModal(){
            this.$refs['login_modal'].hide()
            this.$emit('hide',false)
        },
        checkFormValidity() {
          const valid = this.$refs.form.checkValidity()
          this.nameState = valid
          return valid
        },
        resetModal() {
          this.name = ''
          this.nameState = null
        },
        handleOk(bvModalEvent) {
          // Prevent modal from closing
          bvModalEvent.preventDefault()
          // Trigger submit handler
          this.handleSubmit()
        },
        handleSubmit() {
          // Exit when the form isn't valid
          if (!this.checkFormValidity()) {
            return
          }
          // Push the name to submitted names
          this.submittedNames.push(this.name)
          // Hide the modal manually
          this.$nextTick(() => {
            this.$bvModal.hide('modal-prevent-closing')
            this.$router.push('/main')
          })
        }
      },
      watch:{
        show(newShow){
          if(newShow===true){
            this.showModal()
          }
        }
      }
    }
  </script>
  <style>
</style>