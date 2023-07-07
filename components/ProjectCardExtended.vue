<!-- Component used in the single area pages
  It is a rectangular container for an image and few information,
  which are used to display the image of a project regarding a certain area and its information.

PROPS:
    - title: project name to be displayed below the image
    - link: link to the corresponding project page 
    - imgUrl: path to the displayed image  
    - product: product offered by the displayed project  
    - date: date of the displayed project
    - location: location of the displayed project  -->

<template>
  <div class="project-card">
    <NuxtLink :to="link" class="link-box">
      <div class="proj-card">
        <div class="grid-container">
          <div class="img-container">
            <img :src="imgUrl" alt="Immagine del progetto" />
          </div>
          <div class="text-container">
            <div class="project-details">
              <div class="contact-info">
                <p class="card-title">{{ title }}</p>
                <p class="card-product">Product / Service: {{ product }}</p>
                <p class="card-date">Date: {{ date }}</p>
                <p class="card-location">Location: {{ location }}</p>
              </div>
            </div>
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

  .proj-card {
    display: flex;
    align-items: center;
    background-color: transparent;
    padding: 10px;
    width: fit-content;
    height: fit-content;
  }

  .grid-container {
    display: grid;
    grid-template-columns: auto 250px;
    grid-column-gap: 20px;
    background-color: transparent;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #c0cdd0;
    border-radius: 2% 2% 50% 2%;
  }

  .project-card {
    display: fit-content;
    border-radius: 20px;
    width: 100%;
  }

  
  .project-card:hover .card-title{
    text-decoration: underline;
  }
  

  .img-container {
    display: flex;
    justify-content: center;
    padding: 10px;
    width: 350px;
    height: 200px;
    margin-left: 0;
    margin-right: 100px;
  }

  .img-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    border: 2px solid rgba(141, 160, 164, 0.9);
  }

  .text-container .project-details {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 20px;
    background-color: transparent;
  }

  .card-title {
    font-size: 1.7em;
    text-align: left;
    margin: 0;
    font-weight: bold;
    color: #3a4740;
    background-color: transparent;
  }

  .contact-info {
    background-color: #f7f7f7;
    padding: 10px;
    border-radius: 8px;
    background-color: transparent;
  }

  .card-product,
  .card-date,
  .card-location {
    margin: 0;
    color: #3a4740;
  }

  .link-box {
    text-decoration: none;
  }
</style>



