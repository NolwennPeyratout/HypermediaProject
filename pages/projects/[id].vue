<!--
    Page description for a single project.
-->
<template>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

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
            <img class = "image" :src = "'/_nuxt/assets/img/projects/'+ data[0].name +'1.jpg'"  />
            <img class = "image" :src = "'/_nuxt/assets/img/projects/'+ data[0].name +'2.jpg'"   />
            <img class = "image" :src = "'/_nuxt/assets/img/projects/'+ data[0].name +'3.jpg'"   />
            <img class = "image" :src = "'/_nuxt/assets/img/projects/'+ data[0].name +'4.jpg'"   />
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
    border-radius: 1.5vw;
    margin-top: 3%;
    width: 95%;
}

.project-info-container{
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 1.9vw;
    margin-right: 3.2vw;
    font-size: 1.2vw;
    color: white;
}

.bubbles-container{
    flex: 1; 
    margin: 1% 2%; 
}

#project-name{
    font-size: 3.5vw;
    color: white;
    text-shadow: 0.2vw 0.2vw 0.3vw #3a4740;
    margin-top: 1%;
    margin-bottom: 1%;
}

#project-location{
    margin-top: 0.8%;
    margin-bottom: 0.8%;
}

#project-startup{
    margin-top: 0.8%;
    margin-bottom: 0.8%;
}

#project-presentation{
    margin-top: 0.8%;
    margin-bottom: 0.8%;
    text-align: justify;
}

#project-date{
    margin-top: 0.8%;
    margin-bottom: 0.8%;
}

#project-product{
    margin-top: 0.8%;
    margin-bottom: 0.8%;
}

.project-images{
    margin-top: 2%;
    justify-content: center;
    display:flex;
    flex-wrap: wrap;
    margin-bottom: 2%;
    width: 95%;
}

.image{
    aspect-ratio: 16 / 9;
    width: 45%;
    height: auto;
    margin: 1%;
    box-shadow: 0.2vw 0.2vw 0.6vw #3a4740;
}

.data-category{
    text-decoration: underline;
    font-weight: bold;
}

@media only screen and (max-width: 700px) {
        .circle-title{
            font-size: 1.55vw;
        }
        .small-circle-container {
            width: 85%;
        }
        .data-presentation, .data-timestamp, .data-startup, .data-location, .data-product{
            font-size: 1.8vw;
        }
        #project-name{
            font-size: 5vw;
        }
        .project-presentation-page{
            margin-top: 6%;
        }
    }

    @media only screen and (max-width: 500px) {
        .circle-title{
            font-size: 1.55vw;
        }
        .small-circle-container {
            width: 95%;
        }
        .data-presentation, .data-timestamp, .data-startup, .data-location, .data-product{
            font-size: 2.1vw;
        }
        #project-name{
            font-size: 6.5vw;
        }
        .project-info-container{
            margin-right: 0.5vw;
        }
        .project-presentation-page{
            margin-top: 9%;
        }
    }

    /* Responsiveness for images*/
@media only screen and (max-width: 600px) {
    .image{
        width: 75%;
    }
}
</style>
