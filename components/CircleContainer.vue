<!-- Component used in all areas page, team pagte, and single person page
  It is composed of a circular container for an image with a text underneath used 
to display the title of the object

It is mainly used to display the areas of the company 

PROPS:
    - title: main information to display below the circle
    - link: link to the corresponding page 
    - imgUrl: path to the displayed image -->

<template>
    <div class="circle-container">
      <NuxtLink :to="link">
        <div class="circle">
          <img :src="imgUrl" alt="Immagine del topic">
        </div>
      </NuxtLink>
      <p class="title-center">{{ modifiedTitle }}</p>
    </div>
  </template>
  

<script setup>
    const props = defineProps(['title', 'link','imgUrl'])
    const modifiedTitle = computed(() => props.title.replace(/\+/g, ' '));
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

/* Animation of the image when hovering on it with the mouse*/
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
  color: black;
}

</style>  