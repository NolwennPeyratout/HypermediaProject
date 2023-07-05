<!--
    import { ProjectCard } from '~/.nuxt/components';
    All Project Page
-->
<template>
    <main>
        <div class="food-pageTop">
            <h1 id="food-page-title">Food Projects</h1>
        </div>
        <div id="food-projects-container">
            <ProjectCard v-for = "project in projects" :title = "project.name" :link = "'/projects/' + project.name" 
            :img-url="'/_nuxt/assets/img/projects/'+ project.name +'1.jpg'" class="card-element"/>
        </div>
    </main>
</template>

<script>
    export default defineNuxtComponent({
    async asyncData() {
        const projects = await $fetch(useRuntimeConfig().baseURL + "/server/projects/byarea/Food");
        return { projects };
    }
})
</script>


<style>
    #food-page-title
    {
        font-weight: bolder;
        color: #202622;
        text-align: start;
        font-size: 3vw;
        margin: 1% 0% 2% 0%;
    }

    #food-projects-container
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
    .food-pageTop{
        margin-top: 4%;
    }

</style>