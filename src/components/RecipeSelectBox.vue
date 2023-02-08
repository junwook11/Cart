<template>
    <div>
      <b-form-select v-model="selected" :options="options" size="5"></b-form-select>
      <div class="mt-3">Price: <strong>{{ selected }}</strong></div>
    </div>
  </template>
  
  <script>
    export default {
      
      data() {
        return {
          selected: null,
          options: [
            { value: null, text: 'Please select some item' },
            { value: '2500원', text: '백설밀가루 1kg 2500원' },
            { value: '8000원', text: '곰표밀가루 1.2kg 8000원' },
            { value: '7500원', text: '오뚜기밀가루 800g 7500원' },
            { value: '5000원', text: '삼립밀가루 700g 5000원', disabled: true }
          ],
        }
      },
      
    }
  </script>