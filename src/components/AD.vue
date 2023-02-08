<template>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000;"
    fade
    indicators
    img-width="100%"
    img-height="100%"
  >
    <b-carousel-slide
      caption="First Slide"
      img-src="https://picsum.photos/600/360/?image=10"
      style="object-fit:contain;"
      
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Second Slide"
      img-src="https://picsum.photos/600/360/?image=12"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Third Slide"
      img-src="https://picsum.photos/600/360/?image=22"
    ></b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {

}
</script>

<style>

</style>