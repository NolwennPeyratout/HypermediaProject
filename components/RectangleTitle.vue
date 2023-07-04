<template>
    <div class="rectangleTitle-container">
      <NuxtLink :to="link" class="link-rectangleTitle">
        <div class="rectangleTitle">
            <img class="img-rectangleTitle" :src="imgUrl" :alt="title">
            <p id="title">{{ title }}</p>
        </div>
      </NuxtLink>
      
      <p class="subtitle">{{ subtitle }}</p>
    </div>
  </template>
  

<script setup>
    const props = defineProps(['title', 'link','imgUrl','subtitle'])
</script>

<style>
.rectangleTitle-container {
  text-align: center;
  width: 20%;
  margin-bottom: 4%;
}

.rectangleTitle {
  position: relative;
  display: inline-grid;
}

.rectangleTitle:hover {
  transform: scale(1.1);
}

.rectangleTitle img {
    width: 100%;
  object-fit: cover;
}

.topic-name {
  margin-top: 10px;
}

.topic-link {
  display: block;
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
}

#title{
  margin-block-end: 0.1em;
  text-align: center;
  color: white;
  font-size: 2em;
  font-weight: bold;
  background-color:#B0BFC2;
  margin-top: 0%;
  padding: 3%;
}

.link-rectangleTitle{
    color: black;
}
.subtitle{
    text-align: justify;
}

</style>  