<template>
    <div class="project-card">
      <NuxtLink :to="link" class="link-box">
        <div class="proj-card_custom">
          <div class="grid-container">
            <div class="text-container">
              <div class="project-details">
                <p class="card-title">{{ title }}</p>
                <p class="card-product">Product / Service: {{ product }}</p>
                <p class="card-date">Date: {{ date }}</p>
                <p class="card-location">Location: {{ location }}</p>
              </div>
            </div>
            <div class="img-container">
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
    background-color: #c0cdd0;
    padding: 10px;
    width: fit-content;
    height: fit-content;
    border-radius: 20% 2% 2% 20%;
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
    background-color: transparent;
  }
  

  .project-card {
    border-radius: 20px;
    width: 100%;
  }

  .project-card:hover {
    transform: scale(1.02);
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

  .link-box {
    text-decoration: none;
  }
</style>


