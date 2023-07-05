<!--
    import { ProjectCard } from '~/.nuxt/components';
    All Project Page
-->
<template>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <main>

        <div class="health-pageTop">
            <h1 id="health-page-title">Health Projects</h1>
            <p id="healthproj-page-description">On this page we showcase our impactful projects in the Health sector. 
                Explore the significance of these ventures as they make a profound difference in society's well-being. 
                From breakthrough cancer treatments to innovative glucose detectors and life-saving 3D-printed heart 
                valves, these projects embody our commitment to advancing healthcare. Join us in discovering these 
                transformative initiatives that are revolutionizing medical technology and improving lives around the world.</p>
        </div>
        <div id="health-projects-container">
            <ProjectCard v-for = "project in projects" :title = "project.name" :link = "'/projects/' + project.name" 
            :img-url="'/_nuxt/assets/img/projects/'+ project.name +'1.jpg'" class="card-element"/>
        </div>
    </main>
</template>

<script>
    export default defineNuxtComponent({
    async asyncData() {
        const projects = await $fetch(useRuntimeConfig().baseURL + "/server/projects/byarea/Health");
        return { projects };
    }
})
</script>


<style>
    #health-page-title
    {
        font-weight: bolder;
        color: #202622;
        text-align: start;
        font-size: 3vw;
    }

    #healthproj-page-description
    {
        color: #202622;
        text-align: justify;
        margin-top: 1%;
        margin-block-end: 0%;
        margin-inline-end: 5%;
    }

    #health-projects-container
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
    .health-pageTop{
        width: 100%;
        margin: 4% 0% 1% 5%;
    }

</style>