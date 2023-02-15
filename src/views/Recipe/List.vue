<template>
  <div class="box0">
    <div id="title-size">
      <BackMain id="back-button"></BackMain>
      <h1 id="title-name">Recipe_Detail</h1>
    </div>
    <div class="box2">
      <Side></Side>
      <div id="show-recipe-box">
        <RecipeBox_detail2Vue></RecipeBox_detail2Vue>
        <b-sidebar id="sidebar-1" title="Recipe" shadow width="40%">
          <div id="side-bar-1" >
            <img src="@/assets/baek.jpg" alt="" width="250px" height="300px">
            <p>
              1. 닭을 손질한다.<br>
              2. 닭을 손질하는 건 귀찮은 일이다.<br>
              3. 치킨은 사서 드세요 아ㅋㅋ
            </p>
          </div>
            <b-button v-b-toggle.sidebar-1 id="recipe-close-button" variant="danger">레시피 닫기</b-button>
        </b-sidebar>
        <b-button v-b-toggle.sidebar-1 id="recipe-button">레시피 보기</b-button>
      </div>
      <div class="box4">
        <div class="b5">
          <div id="a1">
            <b-icon icon="clock" font-scale="5"></b-icon>
            <p>30min</p>
          </div>
          <div id="a1">
            <b-icon class="fs-5" icon="people" font-scale="5"></b-icon>
            <p>2인분</p>
          </div>
        </div>
        <div class="b6">
          <Select></Select>
          <Select></Select>
          <Select></Select>
          <Select></Select>
        </div>
        <div class="b7">
          <h2>Total price : </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeBox_detail2Vue from '@/components/RecipeBox_detail2.vue'
import Select from '@/components/RecipeSelectBox.vue'
import Side from '@/components/Sidebar.vue'
import BackMain from '@/components/Buttons/BackMain.vue'
export default {
  components: {
    RecipeBox_detail2Vue,
    Select,
    Side,
    BackMain
  }
}
</script>

<style>
#a1 {
  position: flex;
  flex-direction: column;
}

.box0 {

  position: flex;
  flex-direction: column;
  border: 1px;
  height: 100%;
  width: 100%;
}

.box1 {
  height: 50px;
  color: white;
  background-color: #343a40;
}

.box2 {
  background-color: rgb(92 83 29 / 46%);
  height: 86%;
  border: 1px solid;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.box4 {
  border: 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 5%;

}

.b5 {
  display: flex;
  border: 1px;
  justify-content: space-around;
  align-items: center;

}
.b6{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.b7 {
  padding-top: 100px;
  border: 1px;
}

#show-recipe-box {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#recipe-button {
  height: 15%;
  width: 100%;
}

#a1>p {
  font-size: 50px;
}
#side-bar-1{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
}
#recipe-close-button{
  width: 100%;
  height: 10%;
}
</style>