<template>
    <div class="project-card">
      <NuxtLink :to="link" class="link-box">
        <div class="proj-card">
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
  .proj-card {
    display: flex;
    align-items: center;
    background-color: #f7f7f7;
    padding: 10px;
    border-radius: 8px;
    width: 75%;
    height: fit-content;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .grid-container {
    display: grid;
    grid-template-columns: auto 250px;
    grid-column-gap: 20px;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .project-card {
    border-radius: 20px;
    width: 100%;
  }

  .project-card:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
  }

  .card-title {
    font-size: 1.7em;
    text-align: left;
    margin: 0;
    font-weight: bold;
    color: #3a4740;
  }

  .link-box {
    text-decoration: none;
  }
</style>


