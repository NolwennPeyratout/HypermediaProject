<!--
    import { ProjectCard } from '~/.nuxt/components';
    All Project Page
-->
<template>
    <main>
        <div class="mrp-pageTop">
            <h1 id="mrp-page-title">Most Relevant Projects</h1>
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
        margin: 1% 0% 2% 0%;
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
        margin-top: 4%;
    }

</style>