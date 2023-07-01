<template>
    <div class="project-card">
      <NuxtLink :to="link" class="link-box">
        <div class="proj-card">
            <div class="img-container">
                <img class="img" :src="imgUrl" alt="Immagine del progetto"/>
            </div>
            <p class="card-title">{{ title }}</p>
        </div>
      </NuxtLink>
    </div>
  </template>

<script setup>
    const props = defineProps(['title', 'imgUrl', 'link'])
</script>

<style>
    .project-card{
        border-radius: 20px;
    }
    
    .project-card:hover{
        transform: scale(1.1);
        box-shadow: 4px 4px 6px #3a4740;
        transition-duration: 100ms;
    }
    .img-container{
        display: flex;
        justify-content: center;
        border-radius: 10px;
        padding: 2px;
        width: 250px;
        height: 200px;
    }

    .img{
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        height: auto;
        width: auto;
        margin: auto;
    }

    .proj-card{
        display: flex;
        flex-flow: column;
        align-content: center;
        box-shadow: 2px 2px 4px #3a4740;
        background-color: #b0bfc2;
        padding: 5px;
        border-radius: 20px;
        width: fit-content;
        height: fit-content;
    }

    .card-title{
        font-size: 1.7em;
        font-weight: bolder;
        text-align: center;
        color: black;
    }

    .link-box{
        text-decoration: none;
    }
    
</style>