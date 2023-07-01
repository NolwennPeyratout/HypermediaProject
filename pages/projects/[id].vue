<!--
    Page description for a single project.
-->
<template>
    <main>
        <div class = "project-presentation-page">
          <div class = "project-info-container">
            <h1 id="project-name" class = "data-name"> <span>{{ data[0].name }}</span></h1>
            <p id="project-presentation" class = "data-presentation"> <span class="data-category"> Project presentation:</span> {{ data[0].presentation }}</p>
            <p id="project-location" class = "data-location"> <span class="data-category">Project location:</span> {{ data[0].location }}</p>
            <p id="project-date" class = "data-timestamp"> <span class="data-category">Project date:</span> {{ data[0].date }}</p>
            <p id="project-startup" class = "data-startup"> <span class="data-category">Startup managing the project:</span> {{ data[0].start_up }}</p>
            <p id="project-product" class = "data-product"> <span class="data-category">Product offered:</span> {{ data[0].product_service }}</p>
            <p id="cv">{{ data[0].cv }}</p>
          </div>
          <div class="bubbles-container">
            <div class="supervisor-bubble">
                <SmallCircleContainer :title="'Supervisor: ' + data[2].person_name" :link="'/team/' + data[2].person_name" 
                :img-url="'/_nuxt/assets/img/team/' + data[2].person_name + '.jpeg'"/>
            </div>
            <div class="area-bubble">
                <SmallCircleContainer :title="'Project Area: ' + data[1].area_name" :link="'/areas/' + data[1].area_name" 
                :img-url="'/_nuxt/assets/img/' + data[1].area_name + '_area/' + data[1].area_name + '1.jpg'"/>
            </div>
          </div>
        </div>
        
        <div class = "project-images">
            <img class = "image" :src = "'/_nuxt/assets/img/projects/'+ data[0].name +'.jpg'"  />
            <img class = "image" :src = "'/_nuxt/assets/img/projects/'+ data[0].name +'.jpg'"   />
            <img class = "image" :src = "'/_nuxt/assets/img/projects/'+ data[0].name +'.jpg'"   />
            <img class = "image" :src = "'/_nuxt/assets/img/projects/'+ data[0].name +'.jpg'"   />
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
            data[0] = await $fetch(useRuntimeConfig().baseURL + '/server/projects/' + route.params.id)
            data[1] = await $fetch(useRuntimeConfig().baseURL + '/server/projects/' + route.params.id + '/area')
            data[2] = await $fetch(useRuntimeConfig().baseURL + '/server/projects/' + route.params.id + '/supervisor')

            return {
                data
            }
        }
    })       
    
</script>

<style>
.project-presentation-page{
    display: flex;
    flex-direction: row;
    background-color: #5B7470;
    border-radius: 2%;
}

.project-info-container{
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 30px;
    margin-right: 50px;
    font-size: 18px;
    color: white;
}

.bubbles-container{
    flex: 1; 
    margin:0% 2%; 
}

#project-name{
    font-size: 3em;
    color: white;
    text-shadow: 3px 3px 5px #3a4740;
    margin-top: 15px;
    margin-bottom: 10px;
}

#project-location{
    margin-top: 5px;
    margin-bottom: 10px;
}

#project-startup{
    margin-top: 5px;
    margin-bottom: 10px;
}

#project-presentation{
    margin-top: 5px;
    margin-bottom: 10px;
    text-align: justify;
}

#project-date{
    margin-top: 5px;
    margin-bottom: 10px;
}

#project-product{
    margin-top: 5px;
    margin-bottom: 10px;
}

.project-images{
    margin-top: 30px;
    display:flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
}

.image{
    max-width: 500px;
    max-height: 500px;
    width: auto;
    height: auto;
    margin: 10px;
}

.data-category{
    text-decoration: underline;
    font-weight: bolder;
}

</style>
