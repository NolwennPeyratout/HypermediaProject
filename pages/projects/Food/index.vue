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
            <ProjectCard v-for = "project in projects" :title = "project.name" :link = "'/projects/' + project.name" :img-url="'/_nuxt/assets/img/projects/'+ project.name +'1.jpg'"/>
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
        font-size: 2.5em;
        margin: 10px 0px 10px 0px;
    }

    #food-projects-container
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
        padding: 25px 20px 25px 20px;
    }
    .food-pageTop{
        margin-top: 60px;
    }

</style>