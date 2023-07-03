<!--
    import { ProjectCard } from '~/.nuxt/components';
    All Project Page
-->
<template>
    <main>
        <div class="IT-pageTop">
            <h1 id="IT-page-title">IT Projects</h1>
        </div>
        <div id="IT-projects-container">
            <ProjectCard v-for = "project in projects" :title = "project.name" :link = "'/projects/' + project.name" :img-url="'/_nuxt/assets/img/projects/'+ project.name +'1.jpg'"/>
        </div>
    </main>
</template>

<script>
    export default defineNuxtComponent({
    async asyncData() {
        const projects = await $fetch(useRuntimeConfig().baseURL + "/server/projects/byarea/IT");
        return { projects };
    }
})
</script>


<style>
    #IT-page-title
    {
        font-weight: bolder;
        color: #202622;
        text-align: start;
        font-size: 2.5em;
        margin: 10px 0px 10px 0px;
    }

    #IT-projects-container
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

</style>