<!--
    All Area Pages
-->
<template>
    <main>
        <h1> Areas </h1>
        <div id="card-container">
            <Card v-for = "area in areas" :title = "area.name" :subtitle = "area.name" :link = "'/areas/' + area.name" />
        </div>
    </main>
</template>

<script>

    export default defineNuxtComponent({
        async asyncData() {
            // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
            const areas = await $fetch(useRuntimeConfig().baseURL + '/server/areas')

            return { areas }
        }
    })
    
</script>

<style>
   #card-container
    {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-content: flex-start;
        gap: 20px;
    }

    main
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
        gap: 10px;
    }

    #form-container {
        width: 90%;
        border-radius: 10px;
        border: 2px solid brown;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-content: flex-start;
        gap: 20px;

        background-color: burlywood;
        padding: 20px;
    }
</style>