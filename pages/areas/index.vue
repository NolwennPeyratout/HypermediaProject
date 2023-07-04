<!--

import CircleContainer from '~/components/CircleContainer.vue';
    All Area Pages
-->
<template>
    <main>
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
   #areas-container
    {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        gap: 20px;
        background-color: #5b7470;
        margin-bottom: 60px;
        margin-top: 60px;
        width: 95%;
    }

    .circle-container .title-center {
        color: white;
        font-size: 26px;
        font-weight: bold;
    }

</style>