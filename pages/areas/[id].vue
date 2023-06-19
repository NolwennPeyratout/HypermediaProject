<!--
    Page description for a single area.
-->
<template>
    <main>
        <div class = "info-group">
            <img id = "main-img" src = "~/assets/img/home-image.jpg" />
            <div id = "data-container">
                <p class = "data">Name: <span>{{ area.name }}</span></p>
                <p class = "data">City: <span>{{ area.name }}</span></p>
            </div>
        </div>
        <div id = "dog-card-container">
            <SmallCard v-for = "dog of area.name" :link = "'/areas/' + area.name" :title = "area.name" :subtitle = "area.name"/>
        </div>
    </main>
</template>

<script>
    /*
        The defineNuxtComponent gets us access to the asyncData property.
        This is the first function that is called by nuxt when the page is called.
        We can use this to pre-load the data to make it available to the user.
    */
    export default defineNuxtComponent({
        async asyncData() {
            // Despite using the options API, this.$route is not available in asyncData.
            const route = useRoute()
            const area = await $fetch(useRuntimeConfig().baseURL + '/server/areas/' + route.params.id)

            return {
                area
            }
        }
    })
    
</script>

<style>
    #dog-card-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px
    }

    #main-img {
    width: 30%;
    height: auto;
    }

    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .info-group {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 40px;
    }

    .data {
        font-weight: bolder;
        font-size: 20pt
    }

    .data span {
        font-weight: 100;
        font-size: 15pt;
    }

    #description {
        padding: 0 20px 0 20px;
        font-size: 15pt;
    }
</style>