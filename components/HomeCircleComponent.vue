<!-- Component used only in the home page
  It based on the CircleContainer component and it is composed of a circular 
  container for an image with a text underneath used to display the title of the object

It is used to display the areas of the company 

PROPS:
    - title: area name to be displayed below the circle
    - link: link to the corresponding area page 
    - imgUrl: path to the displayed image -->

<template>
    <div class="home-circle-container">
      <NuxtLink :to="link">
        <div class="home-circle">
          <img :src="imgUrl" alt="Immagine del topic">
        </div>
      </NuxtLink>
      <p class="home-title-center">{{ title }}</p>
    </div>
  </template>
  

<script setup>
    const props = defineProps(['title', 'link','imgUrl'])
</script>

<style>
.home-circle-container {
  text-align: center;
  margin: 40px;
}

.home-circle {
  position: relative;
  display: inline-block;
  box-shadow: 2px 2px 4px #252525;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  transition: transform 0.3s;
}

/* Animation of the image when hovering on it with the mouse*/
.home-circle:hover {
  transform: scale(1.1);
  box-shadow: 4px 4px 8px #252525;
}

.home-circle img {
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
.home-title-center{
  text-align: center;
  color: #252525;
  font-size: 22px;
}

</style>  