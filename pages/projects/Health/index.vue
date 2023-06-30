<!--
    import { ProjectCard } from '~/.nuxt/components';
    All Project Page
-->
<template>
    <main>
        <div class="health-pageTop">
            <h1>Health Projects</h1>
        </div>
        <div id="health-projects-container">
            <ProjectCard v-for = "project in projects" :title = "project.name" :link = "'/projects/' + project.name" :img-url="'/_nuxt/assets/img/projects/'+ project.name +'.jpg'"/>
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
    #health-projects-container
    {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        gap: 20px;
        margin-bottom: 5px;
    }

</style>