<!-- Component used only in the home page
  It is composed of a rectangular container for an image with a text and a subtext underneath
  which are used to display the name of a team person and his/her role in the company.

It is used in the team carousel in the home page to diusplay all the company members

PROPS:
    - title: person name to be displayed below the rectangle
    - link: link to the corresponding person page 
    - imgUrl: path to the displayed image 
    - subtitle: person role to be displayed under the person name -->

<template>
  <div class="homeRect-container">
    <NuxtLink :to="link" class="homeRect-link">
      <div class="homeRect">
          <img class="homeRect-img" :src="imgUrl" :alt="title">
          <p id="homeRect-title">{{ modifiedTitle }}</p>
          <p class="homeRect-subtitle">{{ subtitle }}</p>
        </div>
    </NuxtLink>

  </div>
</template>


<script setup>
  const props = defineProps(['title', 'link','imgUrl','subtitle'])
  const modifiedTitle = computed(() => props.title.replace(/\+/g, ' '));
</script>

<style>

.homeRect{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 0px;
    height: 100%;
}

.homeRect img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
}

#homeRect-title{
  text-align: start;
  color: #252525;
  font-size: 1.8vw;
  font-weight: bold;
  background-color: white;
  margin: 5% 0% 3% 3%;
  text-decoration: none;
}

.homeRect-link{
  text-decoration: none;
  color: #252525;
}
.homeRect-subtitle{
  text-align: start;
  font-size: 1.4vw;
  text-decoration: none;
  background-color: white;
  margin: 0% 0% 3% 3%;
}

</style>  