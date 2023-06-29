<!--
    Page description for a single person.
-->
<template>
    <main>
        <div class = "info-group">
          <div id="container-img-person">
            <img id = "img-person" :src = "'/_nuxt/assets/img/team/'+data[0].name+'.jpeg'"  />
          </div>
          <div id="presentation-person">
            <h1 id="person-name" class = "data"> <span>{{ data[0].name }}</span></h1>
            <h3 id="person-role" class = "data"><span>{{ data[0].role }}</span></h3>
            <p id="person-cv" class = "data-person">CV</p>
            <p id="cv">{{ data[0].cv }}</p>
          </div>
        </div>
        
        <div class="info-project">
          <div id="projects-container">
            <ProjectCard v-for = "project in data[1]" :title = "project.project_name" :link = "'/projects/' + project.project_name" :img-url="data[0].imgUrl"/>
          </div>
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
            const id = route.params.id
            data[0] = await $fetch(useRuntimeConfig().baseURL + '/server/team/' + id)
            data[1] = await $fetch(useRuntimeConfig().baseURL + '/server/team/' + id + '/project')
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

  .data-person {
    font-weight: bolder;
    font-size: 15pt;
  }

  .data-person span {
    font-weight: 100;
    font-size: 10pt;
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

  #img-person{
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  }

  #container-img-person{
    margin-left: auto;
    margin-right: auto;
  }

  #presentation-person{
    width:49%;
  }

  #person-cv{
    margin-bottom: 0%;
    margin-top: 4%;
  }

  #person-name span{
    font-weight: bolder;
    font-size: 20pt;
  }

  #person-name{
    margin-bottom: 0%;
  }

  #person-role{
    margin-top: 0%;
    margin-bottom: 0%;
  }

  #person-role span{
    font-weight: bolder;
  }

  #cv{
    text-align: justify;
    margin-top: 0%;
    width: 50%;
  }
</style>