<!--
    Page description for a single person.
-->
<template>
    <main>
        <h1> {{ data[0].name }}</h1>
        <div class = "info-group">
            <img id = "main-img" src = "~/assets/img/home-image.jpg" />
        </div>
        <div id = "project-container">
            <CircleContainer v-for = "person of data[1]" :link = "'/team/' + person.id" :title = "person.name"/>
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
            const data = []
            data[0] = await $fetch(useRuntimeConfig().baseURL + '/server/team/' + route.params.id)

            return {
                data
            }
        }
    })    
    
</script>

<style>
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

  #project-container
    {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        gap: 40px;
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
    font-size: 20pt;
  }

  .data span {
    font-weight: 100;
    font-size: 15pt;
  }

  #description {
    padding: 0 20px 0 20px;
    font-size: 15pt;
  }

  .footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>