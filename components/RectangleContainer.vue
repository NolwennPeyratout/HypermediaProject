<template>
    <div class="rectangle-container">
      <NuxtLink :to="link" class="link-rectangle">
        <div class="rectangle">
            <img class="img-rectangle" :src="imgUrl" alt="Immagine del topic">
            <p class="title">{{ title }}</p>
            <p class="role">{{ role }}</p>
        </div>
      </NuxtLink>
      
      <p class="subtitle">{{ subtitle }}</p>
    </div>
  </template>
  

<script setup>
    const props = defineProps(['title', 'link','imgUrl','subtitle','role'])
</script>

<style>
.rectangle-container {
  text-align: center;
  width: 45%;
  margin-bottom: 2%;
}

.rectangle {
  position: relative;
  display: inline-block;
  width: 40%;
}

.img-rectangle:hover {
  transform: scale(1.1);
}

.rectangle img {
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

.role{
  font-size: 1.5em;
  font-weight: bold;
  margin-block-start:0.2em;
  text-align: left;
  color: #202622;
}
.title{
  margin-block-end: 0.1em;
  text-align: left;
  color: #202622;
  font-size: 2em;
  font-weight: bold;
}

.link-rectangle{
    color: black;
}
.subtitle{
    text-align: justify;
}

</style>  