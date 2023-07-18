<!-- Component used in the home page and in all the project-related pages
  It is a rectangular container for an image and a text underneath
  which are used to display the name of a project and its name.

As the name suggests, it is used as a card link for the projects addressed by the company

PROPS:
    - title: project name to be displayed below the image
    - link: link to the corresponding project page 
    - imgUrl: path to the displayed image  -->

<template>
    <div class="project-card-1">
      <NuxtLink :to="link" class="link-box-1">
        <div class="proj-card-1">
            <div class="img-container-1">
                <img :src="'~/assets/img/projects/Apple Visor1.jpg'" alt="Immagine del progetto"/>
            </div>
            <p class="card-title-1">{{ modifiedTitle }}</p>
        </div>
      </NuxtLink>
    </div>
  </template>

<script setup>
    const props = defineProps(['title', 'imgUrl', 'link'])
    const modifiedTitle = computed(() => props.title.replace(/\+/g, ' '));
</script>

<style>
    .project-card-1{
        border-radius: 1.3vw;
        width: 18%;
    }
    
    /* Animation of the whole component when hovering on it with the mouse*/
    .project-card-1:hover{
        transform: scale(1.1);
        box-shadow: 0.2vw 0.2vw 0.4vw #3a4740;
        transition-duration: 100ms;
    }
    .img-container-1{
        display: flex;
        justify-content: center;
        padding: 0.13vw;
        aspect-ratio: 5/4;
        width: 97%;
        height: auto;
    }

    .img-container-1 img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 1.3vw;
    }

    .proj-card-1{
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0.13vw 0.13vw 0.26vw #3a4740;
        background-color: #b0bfc2;
        padding: 1.5%;
        border-radius: 1.3vw;
        width: fit-content;
        height: fit-content;
    }

    .card-title-1{
        font-size: 1.5vw;
        margin: 0.5vw 0 0.5vw 0;
        font-weight: bolder;
        text-align: center;
        color: #3a4740;
    }

    .link-box-1{
        text-decoration: none;
    }

</style>