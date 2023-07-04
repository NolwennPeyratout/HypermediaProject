<!--
    import { ProjectCard } from '~/.nuxt/components';
    All Project Page
-->
<template>
    <main>
        <div id="pageTop">
            <h1 id="page-title"> Projects </h1>
        </div>
        <div id="projects-container">
            <ProjectCard v-for = "project in projects" :title = "project.name" :link = "'/projects/' + project.name" :img-url="'/_nuxt/assets/img/projects/'+ project.name +'1.jpg'"/>
        </div>
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
        font-size: 2.5em;
        margin: 10px 0px 10px 0px;
    }

   #projects-container
    {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        gap: 20px;
        margin-bottom: 25px;
        background-color: #8da0a4;
        border-radius: 20px;
        padding: 25px 10px 25px 10px;
    }
    #pageTop{
        margin-top: 60px;
    }

</style>