<template>
    <div class="circle-container">
      <NuxtLink :to="link">
        <div class="circle">
          <img :src="imgUrl" alt="Immagine del topic">
        </div>
      </NuxtLink>
      <p class="title-center">{{ title }}</p>
    </div>
  </template>
  

<script setup>
    const props = defineProps(['title', 'link','imgUrl'])
</script>

<style>
.circle-container {
  text-align: center;
  margin: 40px;
}

.circle {
  position: relative;
  display: inline-block;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  transition: transform 0.3s;
}

.circle:hover {
  transform: scale(1.1);
}

.circle img {
  width: 100%;
  height: 100%;
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
.title-center{
  text-align: center;
  font-size: 22px;
  color: white;
}

</style>  