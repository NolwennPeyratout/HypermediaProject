<!-- Component used in the team page
  It is a rectangular container for an image and few information,
  which are used to display the image of a team member, his/her name and a short CV.

PROPS:
    - title: person name to be displayed below the image
    - link: link to the corresponding person page 
    - imgUrl: path to the displayed person image  
    - subtitle: person short CV to be displayed under the name -->

<template>
    <div class="rectangleTitle-container">
      <NuxtLink :to="link" class="link-rectangleTitle">
        <div class="rectangleTitle">
            <img class="img-rectangleTitle" :src="url" :alt="title">
            <p id="title">{{ modifiedTitle }}</p>
        </div>
      </NuxtLink>
      
      <p class="subtitle">{{ subtitle }}</p>
    </div>
  </template>
  

<script setup>
    const props = defineProps(['title', 'link','imgUrl','subtitle'])
    const modifiedTitle = computed(() => props.title.replace(/\+/g, ' '));

    const parts = props.imgUrl.split("/");
    const lastPart = parts[parts.length - 1];
    const url = await supabase.storage.from('images').getPublicUrl(lastPart);
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

/* Animation of the rectangle component when hovering on it with the mouse*/
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
    font-size: 1.2vw;
}

</style>  