<template>
  <div class="box">
    <div class="box_inner">
        <img src="@/assets/chicken.jpg" alt="" width="700px">
    </div>
    <div class="info">
        <h4>Baek's chicken</h4>
        <div class="like">
            <p id="like2">좋아요:86</p>
        </div>
        <div class="review">
            "바삭바삭 크리스피 올리브치킨"<br>
            "어디서도 못 볼 백종원의 비법"<br>
        </div>
        <div class="review2">
        </div>
        <div class="sum">
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.box{

}
.box_inner{

}
.info{
color: white;
}
.like{
    border-bottom: 1px solid white;
    width: 500px;
    display: flex;
    justify-content: center;
    margin-left: 105px;
}
#like2{
    color: red;
    margin-left: 400px;
    margin-bottom: -2px;
}
.review{
    color: white;
}
.review2{

}
.sum{

}
</style>