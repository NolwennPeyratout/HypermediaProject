<!--

import CircleContainer from '~/components/CircleContainer.vue';
    All Area Pages
-->
<template>  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <main>
        <div id="AreaTop">
            <h1 id="area-page-title"> Our working areas</h1>
            <p id="areas-page-description">On this page, you will find a comprehensive overview of our various working areas, each meticulously designed to support, nurture, 
                and propel groundbreaking ideas and ambitious entrepreneurs forward. We understand that innovation knows no bounds, and we are committed to providing a diverse 
                range of resources and expertise to fuel the success of ventures across industries. Whether you're an entrepreneur seeking funding or a startup enthusiast looking 
                to explore the frontiers of innovation, our working areas offer a wealth of opportunities.</p>
        </div>
        <div id="areas-container">
            <CircleContainer id="circle-container" v-for = "area in areas" :title = "area.name" :link = "'/areas/' + area.name" 
            :img-url="'/_nuxt/assets/img/' + area.name + '_area/' + area.name + '1.jpg'" />
        </div>
    </main>
</template>

<script>

    export default defineNuxtComponent({
    async asyncData() {
        // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
        const areas = await $fetch(useRuntimeConfig().baseURL + "/server/areas");
        return { areas };
    },
})
    
</script>

<style>    

    #AreaTop
    {
        width: 100%;
        margin: 4% 0% 1% 5%;
    }
    #area-page-title{
        font-weight: bolder;
        color: #202622;
        text-align: start;
        font-size: 3vw;
    }
    #areas-page-description
    {
        color: #202622;
        text-align: justify;
        margin-top: 1%;
        margin-block-end: 0%;
        margin-inline-end: 5%;
    }
    #areas-container
    {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        gap: 20px;
        background-color: #5b7470;
        margin-bottom: 2%;
        width: 95%;
    }

    .circle-container .title-center {
        color: white;
        font-size: 26px;
        font-weight: bold;
    }

    @media only screen and (max-width: 600px) {
        #area-page-title {
            position: relative;
            font-size: 6vw;
        }

        #areas-page-description {
            font-size: 14px;
            margin-inline-end: 5%;
        }

        #areas-container {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-bottom: 2%;
        }
    }

</style>