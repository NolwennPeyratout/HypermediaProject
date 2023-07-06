<!--
    import { ProjectCard } from '~/.nuxt/components';
    All Project Page
-->
<template>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <main>

        <div class="mrp-pageTop">
            <h1 id="mrp-page-title">Our most relevant projects</h1>
            <p id="mrp-page-description">On this page we proudly display the most relevant projects addressed by our company in the past years</p>
        </div>
        <div id="mr-projects-container">
            <ProjectCard class="card-element" :title = "'Apple Visor'" :link = "'/projects/Apple Visor'" :img-url="'/_nuxt/assets/img/projects/Apple Visor1.jpg'"/>
            <ProjectCard class="card-element" :title = "'Nutella'" :link = "'/projects/Nutella'" :img-url="'/_nuxt/assets/img/projects/Nutella1.jpg'"/>
            <ProjectCard class="card-element" :title = "'Glucometer'" :link = "'/projects/Glucometer'" :img-url="'/_nuxt/assets/img/projects/Glucometer1.jpg'"/>
            <ProjectCard class="card-element" :title = "'Starlink'" :link = "'/projects/Starlink'" :img-url="'/_nuxt/assets/img/projects/Starlink1.jpg'"/>
            <ProjectCard class="card-element" :title = "'BioVegan Smoothies'" :link = "'/projects/BioVegan Smoothies'" :img-url="'/_nuxt/assets/img/projects/BioVegan Smoothies1.jpg'"/>
        </div>
    </main>
</template>

<style>
    #mrp-page-title
    {
        font-weight: bolder;
        color: #202622;
        text-align: start;
        font-size: 3vw;
    }

    #mr-projects-container
    {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        gap: 1.5%;
        background-color: #8da0a4;
        border-radius: 1.5vw;
        padding: 2% 0% 0.5% 0%;
        margin-bottom: 2%;
        width: 95%;
    }
    .mrp-pageTop{
        width: 100%;
        margin: 4% 0% 1% 5%;
    }

    #mrp-page-description
    {
        color: #202622;
        text-align: justify;
        margin-top: 1%;
        margin-block-end: 0%;
        margin-inline-end: 5%;
    }

    @media only screen and (max-width: 800px) {
        #mrp-page-title{
            font-size: 5vw;
        }
    }

    @media only screen and (max-width: 600px) {
        #mrp-page-title{
            font-size: 7vw;
        }

    }

    @media only screen and (max-width: 400px) {
        #mrp-page-title{
            font-size: 9vw;
        }
    }
</style>