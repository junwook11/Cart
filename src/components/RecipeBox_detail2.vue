<template>
  <div style="height: 100%;">
    <div class="box_inner">
        <img src="@/assets/chicken.jpg" alt="" width="700px">
    </div>
    <div class="box_inner">
        <h2>Baek's chicken</h2>
        <div class="like">
            <p id="like2" class="review">좋아요:86</p>
        </div>
        <div class="review">
            "바삭바삭 크리스피 올리브치킨"<br>
            "어디서도 못 볼 백종원의 비법"<br>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.info{
color: white;
}
.like{
    border-bottom: 1px solid white;
    display: flex;
    justify-content: center;

}
#like2{
    color: red;
    margin-bottom: -2px;
}
.review{
    color: white;
    font-size: 30px;
}
.box_inner{
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>