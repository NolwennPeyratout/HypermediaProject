<!--

import RectangleTitle from '~/components/RectangleTitle.vue';

import CircleContainer from '~/components/CircleContainer.vue';
    All Area Pages
-->
<template>
    <main>
        <div id="top-team">
            <h1>Our team members</h1>
            <b>Team introduction: </b> our team is made up of {{persons.length }} people.
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
        width: 100%;
        margin: 4% 0% 1% 5%;
    }
    #top-team > h1{
        color: #202622;
        font-size: 40px;
        margin-bottom: 1%;
    }

</style>