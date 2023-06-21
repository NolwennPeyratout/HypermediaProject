<!--
    All Project Pages
-->
<template>
    <main>
        <h1> Projects </h1>
        <div id="card-container">
            <Card v-for = "project in projects" :title="project.name" :subtitle = "project.name" 
            :link="'/projects/'+ project.name"/>

        </div>

    </main>
</template>

<script>
    export default defineNuxtComponent({
        async asyncData() {
            const projects = await
            $fetch(useRuntimeConfig().baseURL + '/server/projects')

            return{projects}
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
</style>