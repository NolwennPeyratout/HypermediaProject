<!--

import CircleContainer from '~/components/CircleContainer.vue';
    All Area Pages
-->
<template>
    <main>
        <div id="areas-container">
            <CircleContainer v-for = "area in areas" :title = "area.name" :link = "'/areas/' + area.name" />
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
        gap: 40px;
    }

    main
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
        gap: 10px;
        height: 100vh;
        background-color:aliceblue;
    }

</style>