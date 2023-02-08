<template>
    <div class="sset">
  <b-container fluid class="p-3 bg-dark">
  <b-row>
    <b-col @click="gotoDetail2(1)">
        <img src="@/assets/chicken.jpg" alt="" width="500">
        <br>
        <b-alert show variant="bg-dark text-white" width="300">"바삭하게 조리한 치킨에 백종원 선생님의 비법소스"</b-alert>
        <div>
            <b-form-rating v-model="value" variant="warning" class="bg-dark"></b-form-rating>
            <!-- <p class="mt-2 text-white" >{{ value }} 점</p> -->
        </div>
    </b-col>
    
    <b-col @click="gotoDetail2(2)">
        <img src="@/assets/chicken.jpg" alt="" width="500">
        <br>
        <b-alert show variant="bg-dark text-white" width="300">"바삭하게 조리한 치킨에 백종원 선생님의 비법소스"</b-alert>
        <div>
            <b-form-rating v-model="value" variant="warning" class="bg-dark"></b-form-rating>
            <!-- <p class="mt-2 text-white" >{{ value }} 점</p> -->
        </div>
    </b-col>
    <b-col @click="gotoDetail2(3)">
        
        <div id="set">
            <img id="set2" src="@/assets/112.jpg" alt="">
        </div>
        <br>
        <b-alert show variant="bg-dark text-white" width="300">"달달한 양념의 닭 볶음탕"</b-alert>
        <div>
            <b-form-rating v-model="value" variant="warning" class="bg-dark"></b-form-rating>
            <!-- <p class="mt-2 text-white" >{{ value }} 점</p> -->
        </div>
    </b-col>
  </b-row>
  <b-row>
    <b-col></b-col>
    <b-col></b-col>
    <b-col></b-col>
  </b-row>
</b-container>
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
.sset{
    padding-top: 0%;
    padding-bottom: 90px;
}
#set{
    border: 0px solid;
    height: 300px;
    widows: 300px;
}
#set2{
    border-radius: 50%;

    height: 100%;
    widows: 100%;
}
</style>