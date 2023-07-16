<!--
    Page description for a single project, containing all its information, its supervisor and concerning area. 
    On the bottom part of the page are displayed 4 relevant images for the project
-->
<template>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <main>
        <div class = "project-presentation-page">
            
            <!-- Part of the page containing all the info regarding the displayed project -->
          <div class = "project-info-container">
            <h1 id="project-name" class = "data-name"> <span>{{ data[0][0].name }}</span></h1>
            <p id="project-presentation" class = "data-presentation"> <span class="data-category"> Project presentation:</span> {{ data[0][0].presentation }}</p>
            <p id="project-location" class = "data-location"> <span class="data-category">Project location:</span> {{ data[0][0].location }}</p>
            <p id="project-date" class = "data-timestamp"> <span class="data-category">Project date:</span> {{ data[0][0].date }}</p>
            <p id="project-startup" class = "data-startup"> <span class="data-category">Startup managing the project:</span> {{ data[0][0].start_up }}</p>
            <p id="project-product" class = "data-product"> <span class="data-category">Product offered:</span> {{ data[0][0].product_service }}</p>
            <p id="cv">{{ data[0][0].cv }}</p>
          </div>
          <!-- Right part of the page in which the supervisor and concering area information is displayed through circular components -->
          <div class="bubbles-container">
            <div class="supervisor-bubble">
                <SmallCircleContainer :title="'Supervisor: ' + data[0][2].person_name" :link="'/team/' + data[0][2].person_name" 
                :img-url="'~/assets/img/team/' + data[0][2].person_name + '.jpeg'"/>
            </div>
            <div class="area-bubble">
                <SmallCircleContainer :title="'Project Area: ' + data[0][1].area_name" :link="'/areas/' + data[0][1].area_name" 
                :img-url="'~/assets/img/' + data[0][1].area_name + '_area/' + data[0][1].area_name + '1.jpg'"/>
            </div>
          </div>
        </div>
        
        <!-- Part of the screen in which are displayed the 4 relevant images for the project -->
        <div class = "project-images">
            <img class = "image" :src = "'~/assets/img/projects/'+ data[0][0].name +'1.jpg'"  />
            <img class = "image" :src = "'~/assets/img/projects/'+ data[0][0].name +'2.jpg'"   />
            <img class = "image" :src = "'~/assets/img/projects/'+ data[0][0].name +'3.jpg'"   />
            <img class = "image" :src = "'~/assets/img/projects/'+ data[0][0].name +'4.jpg'"   />
        </div>
        {{ data }}
    </main>
</template>

<script>
    export default defineNuxtComponent({
        async asyncData() {
            /* Data to be displayeed are retrieved here*/
            const route = useRoute()
            const data = []
            data[0] = await $fetch( '/api/projects/' + route.params.id)
            data[1] = await $fetch( '/api/projects/concern/' + route.params.id)
            data[2] = await $fetch( '/api/projects/supervise/' + route.params.id)
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
    margin-top: 4%;
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
    font-size: 4.5vw;
    color: white;
    text-shadow: 0.2vw 0.2vw 0.3vw #3a4740;
    margin-top: 1%;
    margin-bottom: 1%;
}

#project-location, #project-startup, 
#project-presentation, #project-date, #project-product{
    margin-top: 0.8%;
    margin-bottom: 0.8%;
    font-size: 1.2vw;
}

#project-presentation{
    text-align: justify;
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

/* Page layout made responsive. In this block the settings are set for screens up to 700px wide */
@media only screen and (max-width: 700px) {
        .circle-title{
            font-size: 1.55vw;
        }
        .small-circle-container {
            width: 85%;
        }
        #project-location, #project-startup, 
        #project-presentation, #project-date, #project-product{
            margin-top: 1.5%;
            margin-bottom: 1.5%;
            font-size: 1.6vw;
        }
        #project-product{
            margin-bottom: 5%;
        }
        #project-name{
            font-size: 5vw;
            margin-top: 5%;
        }
        .project-presentation-page{
            margin-top: 7%;
        }
    }
/* Page layout made responsive. In this block the settings are set for screens up to 500px wide */
    @media only screen and (max-width: 500px) {
        .circle-title{
            font-size: 1.55vw;
        }
        .small-circle-container {
            width: 95%;
        }
        #project-location, #project-startup, 
        #project-presentation, #project-date, #project-product{
            font-size: 2.5vw;
        }
        #project-name{
            font-size: 5.5vw;
        }
        .project-info-container{
            margin-right: 0.5vw;
        }
        .project-presentation-page{
            margin-top: 8%;
        }
    }

/* Responsiveness for images*/
@media only screen and (max-width: 600px) {
    .image{
        width: 75%;
    }
}
</style>
