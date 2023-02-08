<template>
  <div class="box0">
    <div class="box1">
      <h2>Recipe_Detail</h2>
    </div>
    <div class="box2">
      <Side></Side>
      <div class="box3">
        <RecipeBox_detail2Vue></RecipeBox_detail2Vue>
      </div>
      <div class="box4">
        <div class="b5">
        <i class="bi bi-people"></i>
        <div id="a1">
          <b-icon icon="star-fill" animation="fade" font-scale="4"></b-icon>
          <p>3.5</p>
        </div>
        <div id="a1">
          <b-icon icon="clock" animation="spin-reverse" font-scale="4"></b-icon>
          <p>30min</p>
        </div>
        <div id="a1">
          <b-icon class="fs-5" icon="people"></b-icon>
          <p>2인분</p>
        </div>
        </div>
        <div class="b6">
          <Select></Select>
          <Select></Select>
          <Select></Select>
          <Select></Select>
        </div>
        <div class="b7"><h2>Total price : </h2></div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeBox_detail2Vue from '@/components/RecipeBox_detail2.vue'
import Select from '@/components/RecipeSelectBox.vue'
import Side from '@/components/Sidebar.vue'
export default {
  components:{
    RecipeBox_detail2Vue,
    Select,
    Side
  }  
}
</script>

<style>
#a1{
  position: flex;
  flex-direction: column;
}
.box0{
  
  position: flex;
  flex-direction: column;
  border: 1px;
  height: 100%;
  width: 100%;
}
.box1{
  height: 50px;
  color: white;
  background-color: #343a40;
}
.box2{
  background-color: rgb(92 83 29 / 46%);
  height: 690px;
  border: 1px solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box3{
  border: 1px;
}
.box4{
  border: 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 100px;
  width: 800px;
  
}
.b5{
  display: flex;
  border: 1px;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin-right: 100px;
}
.b6{
  margin-top:30px;
  border: 1px;
  flex-grow: 50%;
  height:300px
}
.b7{
  padding-top: 100px;
  border: 1px;
  flex-grow: 40%;
  height: 100px;
  margin-left: 100px;
}
</style>