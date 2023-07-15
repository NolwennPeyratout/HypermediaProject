<!--
    import { ProjectCard } from '~/.nuxt/components';
    
    Page containing all the projects of the company concerning the IT area, displayed through a card-like component
-->
<template>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <main>

        <div class="IT-pageTop">
            <h1 id="IT-page-title">IT Projects</h1>
            <p id="ITproj-page-description">On this page we proudly present our portfolio of impactful IT sector projects. 
                Discover the importance of these ventures as they revolutionize the digital landscape and drive technological 
                advancements. From satellite-based routers connecting the unconnected to immersive VR visors and advanced 
                security firmware, these projects embody our commitment to pushing the boundaries of innovation. Join us in 
                exploring these transformative initiatives that are shaping the future of technology and redefining industries.</p>
        </div>
        <div id="IT-projects-container">
            <!-- Card component repeated as many times as the number of IT-concerning projects -->
            <ProjectCard v-for = "project in projects" :title = "project.name" :link = "'/projects/' + project.name" 
            :img-url="'~/assets/img/projects/'+ project.name +'1.jpg'" class="card-element"/>
        </div>
    </main>
</template>

<script>
    /* Data to be displayeed are retrieved here*/
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
        font-size: 4.5vw;
    }

    #ITproj-page-description
    {
        color: #202622;
        text-align: justify;
        margin-top: 1%;
        font-size: 1.2vw;
        margin-block-end: 0%;
        margin-inline-end: 5%;
    }

    #IT-projects-container
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
    .IT-pageTop{
        width: 100%;
        margin: 4% 0% 1% 5%;
    }

    /* Page layout made responsive. In this block the settings are set for screens up to 700px wide */  
    @media only screen and (max-width: 700px) {
        #IT-page-title
        {
            font-size: 5vw;
        }

        #ITproj-page-description
        {
            font-size: 1.6vw;
        }
        .IT-pageTop{
            margin-top: 7%;
        }
    }
    
    /* Page layout made responsive. In this block the settings are set for screens up to 500px wide */  
    @media only screen and (max-width: 500px) {
        #IT-page-title
        {
            font-size: 5.5vw;
        }

        #ITproj-page-description
        {
            font-size: 2.5vw;
        }
        .IT-pageTop{
            margin-top: 8%;
        }
    }

</style>