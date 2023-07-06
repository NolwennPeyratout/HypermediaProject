<!--

import RectangleTitle from '~/components/RectangleTitle.vue';

import CircleContainer from '~/components/CircleContainer.vue';
    All Area Pages
-->
<template>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <main>
        <div id="top-team">
            <h1 id="team-title">Our team members</h1>
            <p id="team-page-description"> On this page we take pride in our exceptional team of professionals. 
                With a team of highly skilled and dedicated individuals, we bring a wealth of knowledge and expertise 
                to the table. Our diverse team of ten professionals is equipped with the experience and preparation 
                needed to navigate the dynamic world of venture capital. Join us as we introduce the talented individuals
                 who drive our firm's success and support innovative entrepreneurs on their journey to greatness.</p>
        </div>
        
        <div id="rectangle-container">
            <RectangleTitle v-for = "person in persons" :title = "person.name" :link = "'/team/' + person.name" :img-url="'/_nuxt/assets/img/team/'+person.name+'.jpeg'" :subtitle="person.introduction" />
        </div>
    </main>
</template>

<script>
    export default defineNuxtComponent({
    async asyncData() {
        // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
        const persons = await $fetch(useRuntimeConfig().baseURL + "/server/team");
        return { persons };
    }
    
})
    
</script>

<style>
   #rectangle-container
    {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        gap: 5%;
    }
    #top-team{
        width: 95%;
        margin: 4% 2.5% ;
    }
    #team-page-description
    {
        color: #202622;
        text-align: justify;
        margin-top: 1%;
        margin-block-end: 0%;
    }
    #top-team > h1{
        color: #202622;
        font-size: 40px;
        margin-bottom: 1%;
    }

    @media only screen and (max-width: 700px) {
        .rectangleTitle-container {
            width: 40%;
        }
    }

    @media only screen and (max-width: 500px) {
        .rectangleTitle-container {
            width: 95%;
        }
        #title{
            width: 64%;
            margin-left: auto;
            margin-right: auto;
        }
        .rectangleTitle img {
            width: 70%;
            margin-left: auto;
            margin-right: auto;
        }
        
    }

</style>