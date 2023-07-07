<!--
    import { ProjectCard } from '~/.nuxt/components';
    Page conaining all the projects of the company, displayed through card-like elements
-->
<template>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

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
            <!-- Card component repeated as many times as the number of projects -->
            <ProjectCard v-for = "project in projects" :title = "project.name" :link = "'/projects/' + project.name" 
            :img-url="'/_nuxt/assets/img/projects/'+ project.name +'1.jpg'" class="card-element"/>
        </div>
        <!-- Button-like link that leads the user to the most relevant projects of the company-->
        <NuxtLink to="/projects/MostRelevant" id="mostRelevant-button">
            <div id="mostRelevant-link">MOST RELEVANT PROJECTS</div></NuxtLink>
    </main>
</template>

<script>
    //Data to be displayeed are retrieved here
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
        font-size: 4.5vw;
    }

    #projects-page-description
    {
        color: #202622;
        text-align: justify;
        font-size: 1.2vw;
        margin-top: 1%;
        margin-block-end: 0%;
        margin-inline-end: 5%;
    }

    #pageTop{
        width: 100%;
        margin: 4% 0% 1% 5%;
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

    #mostRelevant-button{
        display: flex;
        background-color: #3A4740;
        text-decoration: none;
        border-radius: 0.7vw;
        justify-content: center;
        align-items: center;
        width: 30%;
        height: 2.7vw;
        margin-top: 2%;
        margin-bottom: 2%;
    }

    #mostRelevant-link{
        text-decoration: none;
        color: white;
        text-align: center;
        font-size: 1.6vw;
    }

    /* Page layout made responsive. In this block the settings are set for screens up to 800px wide */
    @media only screen and (max-width: 800px) {
        .project-card-1{
            width: 23%;
        }
        .card-title-1{
            font-size: 2.0vw;
        }
    }

    /* Page layout made responsive. In this block the settings are set for screens up to 700px wide */
    @media only screen and (max-width: 700px) {
        #page-title
        {
            font-size: 5vw;
        }

        #pageTop{
            margin-top: 7%;
        }

        #projects-page-description
        {
            font-size: 1.6vw;
        }
        #mostRelevant-button{
            width: 35%;
            height: 3.2vw;
        }

        #mostRelevant-link{
            font-size: 2vw;
        }
    }

    /* Page layout made responsive. In this block the settings are set for screens up to 600px wide */
    @media only screen and (max-width: 600px) {
        .project-card-1{
            width: 30%;
        }
        .card-title-1{
            font-size: 2.6vw;
        }
    }

    /* Page layout made responsive. In this block the settings are set for screens up to 500px wide */
    @media only screen and (max-width: 500px) {
        #page-title
        {
            font-size: 5.5vw;
        }

        #projects-page-description
        {
            font-size: 2.5vw;
        }
        #mostRelevant-button{
            width: 40%;
            height: 3.7vw;
        }
        #mostRelevant-link{
            font-size: 2.5vw;
        }
        #pageTop{
            margin-top: 8%;
        }
    }

    /* Page layout made responsive. In this block the settings are set for screens up to 400px wide */
    @media only screen and (max-width: 400px) {
        .project-card-1{
            width: 48%;
        }
        .card-title-1{
            font-size: 3.5vw;
        }
        #mostRelevant-button{
            width: 55%;
        }
        #mostRelevant-link{
            font-size: 3.5vw;
        }
    }

</style>