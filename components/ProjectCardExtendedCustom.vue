<!-- Component used in the single area pages
  It is a rectangular container for an image and few information,
  which are used to display the image of a project regarding a certain area and its information.

  It is a variant of the component "ProjectCardExtended.vue" used to make the area project
  more interesting  and dynamic with different shapes.

PROPS:
    - title: project name to be displayed below the image
    - link: link to the corresponding project page 
    - imgUrl: path to the displayed image  
    - product: product offered by the displayed project  
    - date: date of the displayed project
    - location: location of the displayed project  -->

<template>
    <div class="project-card_custom">
      <NuxtLink :to="link" class="link-box_custom">
        <div class="proj-card_custom">
          <div class="grid-container_custom">
            <div class="text-container_custom">
              <div class="info-cont_custom">
                <p id="card-title_custom">{{ title }}</p>
                <p id="card-product_custom">Product / Service: {{ product }}</p>
                <p id="card-date_custom">Date: {{ date }}</p>
                <p id="card-location_custom">Location: {{ location }}</p>
              </div>
            </div>
            <div class="img-container_custom">
              <img :src="imgUrl" alt="Immagine del progetto" />
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </template>
  

<script setup>
  const props = defineProps(['title', 'imgUrl', 'link', 'product', 'date', 'location'])
</script>

<style>
  .proj-card_custom {
    display: flex;
    align-items: center;
    background-color: transparent;
    padding: 1vw;
    width: fit-content;
    height: fit-content;
  }

  .grid-container_custom {
    display: grid;
    grid-template-columns: 30vw auto ;
    grid-column-gap: 2vw;
    background-color: transparent;
  }

  .text-container_custom {
    background-color: #c0cdd0;
    border-radius: 0.5vw 0.5vw 0.5vw 10vw;
  }

  .info-cont_custom{
    margin-right: 2vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10%;
  }
  

  .project-card_custom {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 5%;
  }

  .project-card_custom:hover #card-title_custom{
    text-decoration: underline;
  }

  .img-container_custom {
    display: flex;
    justify-content: center;
    padding: 0px;
    aspect-ratio: 16/9;
    width: 30vw;
    height: auto;
    margin-left: 0;
    margin-right: 0;
    border-radius: 0.5vw;
  }

  .img-container_custom img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5vw;
    border: 2px solid rgba(141, 160, 164, 0.9);
  }

  #card-title_custom {
    font-size: 3vw;
    text-align: right;
    margin: 0;
    font-weight: bold;
    color: #3a4740;
    background-color: transparent;
  }

  #card-product_custom,
  #card-date_custom,
  #card-location_custom {
    margin: 0 0 0 0;
    text-align: right;
    color: #3a4740;
    font-size: 1.2vw;
  }

  .link-box_custom {
    text-decoration: none;
  }
</style>


