<!-- Component used in single projects page and used to display both the project 
  concerning area and its supervisor.
  It is composed of a circular container for an image with a text underneath used 
to display the title of the object

Its appeareance is based on the CircleContainer.vue component, with smaller dimensions
to fit better in the project page

PROPS:
    - title: main information to display below the circle
    - link: link to the corresponding page 
    - imgUrl: path to the displayed image -->

<template>
    <div class="small-circle-container">
      <NuxtLink :to="link" class="circle-link">
        <div class="small-circle">
          <img :src="imgUrl" alt="Immagine del topic">
        </div>
        <p class="circle-title">{{ title }}</p>
      </NuxtLink>
    </div>
  </template>
  

<script setup>
    const props = defineProps(['title','link','imgUrl'])
</script>

<style>
.small-circle-container {
  text-align: center;
  margin: 20px;
}

.small-circle {
  position: relative;
  display: inline-block;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  transition: transform 0.3s;
}

.small-circle:hover {
  transform: scale(1.1);
  box-shadow: 4px 4px 6px #3a4740;
}

.small-circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.topic-name {
  margin-top: 2px;
}

.circle-title{
  font-size: 18px;
  font-weight: bolder;
  color: white;
  text-align: center;
}

/* Animation of the component when hovering on it with the mouse*/
.circle-link:hover{
  text-shadow: 4px 4px 6px #3a4740;
  transform: scale(1.1);
}

.circle-link:active{  text-decoration: none;}
.circle-link:visited{  text-decoration: none;}
.circle-link:hover{  text-decoration: none;}
.circle-link:focus{  text-decoration: none;}
.circle-link{ text-decoration: none;}

.topic-link {
  display: block;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
}



</style>  