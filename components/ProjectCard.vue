<template>
    <div class="project-card-1">
      <NuxtLink :to="link" class="link-box-1">
        <div class="proj-card-1">
            <div class="img-container-1">
                <img :src="imgUrl" alt="Immagine del progetto"/>
            </div>
            <p class="card-title-1">{{ title }}</p>
        </div>
      </NuxtLink>
    </div>
  </template>

<script setup>
    const props = defineProps(['title', 'imgUrl', 'link'])
</script>

<style>
    .project-card-1{
        border-radius: 20%;
    }
    
    .project-card-1:hover{
        transform: scale(1.1);
        box-shadow: 4px 4px 6px #3a4740;
        transition-duration: 100ms;
    }
    .img-container-1{
        display: flex;
        justify-content: center;
        padding: 2px;
        width: 250px;
        height: 200px;
    }

    .img-container-1 img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5%;
    }

    .proj-card-1{
        display: flex;
        flex-direction: column;
        align-content: center;
        box-shadow: 2px 2px 4px #3a4740;
        background-color: #b0bfc2;
        padding: 5px;
        border-radius: 20px;
        width: fit-content;
        height: fit-content;
    }

    .card-title-1{
        font-size: 1.7em;
        margin: 0.5em 0em 0.5em 0em;
        font-weight: bolder;
        text-align: center;
        color: #3a4740;
    }

    .link-box-1{
        text-decoration: none;
    }
    
</style>