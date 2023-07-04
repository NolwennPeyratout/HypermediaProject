<!--
    Page description for a single person.
-->
<template>
    <main>
        <div id = "info-group">
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

        <div v-if="data[1].length == 1" id="container-project">
          <NuxtLink :to="'/projects/' + data[1][0].project_name" class="link-box">
                <div id="textImage-project">
                  <p>Project: {{ data[1][0].project_name }}</p>
                </div>
                <div id="image-project">
                  <img :src="'/_nuxt/assets/img/projects/'+ data[1][0].project_name +'1.jpg'" />
                </div>
              </NuxtLink>
        </div>
 
        <div v-else id="carousel-container-person">
          <Carousel id="carousel-person" :autoplay="4000" :wrap-around="true" :items-to-show="1.8">
            <Slide v-for="project in data[1]" :key="project" id="slide-carousel">
              <NuxtLink :to="'/projects/' + project.project_name" class="link-box">
                <div id="textImage-project">
                  <p>Project: {{project.project_name }}</p>
                </div>
                <div id="image-project">
                  <img :src="'/_nuxt/assets/img/projects/'+ project.project_name +'1.jpg'" class="carousel__item_person" :class="{ 'responsive-image': true }"/>
                </div>
              </NuxtLink>
              </Slide>
            <template #addons>
              <Pagination />
            </template>
          </Carousel>
        </div>

        <div id="container-area-person">
            <CircleContainer id="CircleContainer-person-area" v-for = "area in data[2]" :title = "area.area_name" :link = "'/areas/' + area.area_name" :img-url="'/_nuxt/assets/img/' + area.area_name + '_area/' + area.area_name + '1.jpg'" />
        </div>
    </main>
</template>

<script>
    import { Carousel, Pagination, Slide } from 'vue3-carousel'
    
    import 'vue3-carousel/dist/carousel.css'
   /*
        The defineNuxtComponent gets us access to the asyncData property.
        This is the first function that is called by nuxt when the page is called.
        We can use this to pre-load the data to make it available to the user.
    */
    export default defineNuxtComponent({
      name: 'Autoplay',
      components: {
        Carousel,
        Slide,
        Pagination,
      },
        async asyncData() {
            // Despite using the options API, this.$route is not available in asyncData.
            const route = useRoute()
            const data = []
            const id = route.params.id
            data[0] = await $fetch(useRuntimeConfig().baseURL + '/server/team/' + id)
            data[1] = await $fetch(useRuntimeConfig().baseURL + '/server/team/' + id + '/project')
            data[2] = await $fetch(useRuntimeConfig().baseURL + '/server/team/' + id + '/project/area')
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

  #project-container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        gap: 40px;
    }

  #info-group {
    width: 65%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-bottom: 6%;
    background-color: #B0BFC2;
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
   width: 100%;
  }

  #container-img-person{
    margin-left: auto;
    margin-right: auto;
    display:inherit;
    width: inherit;
  }

  #presentation-person{
    color:white;
    padding: 3%;
    width: 70%;
  }

  #person-cv{
    margin-bottom: 0%;
    margin-top: 4%;
  }

  #person-name span{
    font-weight: bolder;
    font-size: 40px;
  }

  #person-name{
    margin-bottom: 0%;
  }

  #person-role{
    margin-top: 0%;
    margin-bottom: 0%;
    font-size: 25px;
  }

  #person-role span{
    font-weight: bolder;
  }

  #cv{
    text-align: justify;
    margin-top: 0%;
    margin-bottom: 0%;
  }

  #carousel-container-person {
  width: 105%;
  margin: 0;
  align-content: center;
  z-index: 2;
  margin-bottom: 6%;
  height: 400px;
}

#carousel-person {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  margin: 0;
  align-content: center;
  height:400px;
}

#project-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  gap: 40px;
  margin-top: 20px; 
}

.carousel__item_person {
  min-height: 150px; 
  width: 100%;  
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
}

.carousel__slide {
  padding: 0px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  width: 100%;
  border: 5px solid white;
}

.responsive-image {
  max-width: 100%;
  height: 350px;
  object-fit:contain;
  background-color: white;
}

#container-area-person{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  gap: 20px;
}

#container-area-person > .circle-container .title-center{
  color: black;
}

#container-project img{
  width:100%;
  margin-left: auto;
  margin-right: auto;
  display: block;
  height: 300px
}

#container-project:hover{
        transform: scale(1.1);
        box-shadow: 4px 4px 6px #3a4740;
        transition-duration: 100ms;
}

#container-project{
  position: relative;
  height: 300px;
  width: 50%;
}

#textImage-project, #image-project{
  position:absolute;
  left:0;
  z-index: 11;
}

#image-project{
  top:0;
  z-index:10;
  width: 100%;
}

#textImage-project{
  width: 100%;
  bottom: 0%
}

#textImage-project p{
  text-align: center;
  background-color:rgba(91,116,112,0.5);
  color: white;
  width: 45%;
  margin-left: auto;
  margin-right: auto;
  padding: 2% 0%;
  margin:0%;
  width:100%;
  font-size: large;
}

.carousel__viewport{
  height:400px;
}

.carousel__slide{
  height: 400px;
}

#textImage-project p:hover{
  background-color:rgba(91,116,112,0.8);
}

</style>