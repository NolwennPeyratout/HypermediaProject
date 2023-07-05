<!--
    import { ProjectCard } from '~/.nuxt/components';
    All Project Page
-->
<template>
    <main>
        <div id="pageTop">
            <h1 id="page-title"> Our projects </h1>
            <p id="projects-page-description">On this page we proudly present a comprehensive display of our global 
                success stories across three key areas: Food, Health, and IT. Explore the extraordinary projects
                 that have captured the world's attention and redefined their respective industries. From revolutionary 
                 advancements in food technology to groundbreaking healthcare solutions and cutting-edge IT innovations, 
                 these projects exemplify our commitment to nurturing visionary entrepreneurs and driving transformative 
                 change on a global scale. Join us as we celebrate the impact these projects have made and discover the 
                 future of innovation in these vital sectors.</p>
        </div>
        <div id="projects-container">
            <ProjectCard v-for = "project in projects" :title = "project.name" :link = "'/projects/' + project.name" 
            :img-url="'/_nuxt/assets/img/projects/'+ project.name +'1.jpg'" class="card-element"/>
        </div>
        <NuxtLink to="/projects/MostRelevant" id="mostRelevant-button">
            <div id="mostRelevant-link">MOST RELEVANT PROJECTS</div></NuxtLink>
    </main>
</template>

<script>
    export default defineNuxtComponent({
    async asyncData() {
        const projects = await $fetch(useRuntimeConfig().baseURL + "/server/projects");
        return { projects };
    }
})
</script>


<style>

    #page-title
    {
        font-weight: bolder;
        color: #202622;
        text-align: start;
        font-size: 3vw;
    }

    #projects-page-description
    {
        color: #202622;
        text-align: justify;
        margin-top: 1%;
        margin-block-end: 0%;
        margin-inline-end: 5%;
    }

   #projects-container
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
        width: 95%;
    }

    .card-element{
        margin-bottom: 1.5%;
    }

    #pageTop{
        width: 100%;
        margin: 4% 0% 1% 5%;
    }

    #mostRelevant-button{
        display: flex;
        background-color: #3A4740;
        text-decoration: none;
        border-radius: 0.5vw;
        justify-content: center;
        align-items: center;
        width: 25vw;
        height: 2vw;
        margin-top: 1%;
        margin-bottom: 2%;
    }

    #mostRelevant-link{
        text-decoration: none;
        color: white;
        text-align: center;
        font-size: 1.5vw;
    }

</style>