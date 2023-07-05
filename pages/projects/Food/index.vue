<!--
    import { ProjectCard } from '~/.nuxt/components';
    All Project Page
-->
<template>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <main>

        <div class="food-pageTop">
            <h1 id="food-page-title">Food Projects</h1>
            <p id="foodproj-page-description">On this page we present our portfolio of impactful food sector projects. 
                Discover the importance of these ventures as they cater to diverse palates and lifestyles. From 
                nutritious snacks for both kids and adults to innovative vegan products and revolutionary advancements 
                in alternative meat, these projects embody our commitment to reshaping the way we eat. Join us in exploring 
                these transformative initiatives that contribute to a sustainable and inclusive food future.</p>
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
    }

    #foodproj-page-description
    {
        color: #202622;
        text-align: justify;
        margin-top: 1%;
        margin-block-end: 0%;
        margin-inline-end: 5%;
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
        width: 100%;
        margin: 4% 0% 1% 5%;
    }

</style>