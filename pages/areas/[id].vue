<!--
    Page description for a single area.
-->
<template>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Carousel displaying three relevant images regarding the single area
    It displays one picture at a time and moves automatically between them
  -->
  <main class="custom-background_area"> 
    
    <div id="carousel-container_area">
      <Carousel id="carousel_area" :autoplay="2000" :wrap-around="true" :items-to-show="1.1">
        <Slide v-for="slide in 3" :key="slide">
          <img :src="'~/assets/img/' + data[0][0].name + '_area/' + data[0][0].name + slide + '.jpg'" class="carousel__item_area" :class="{ 'responsive-image': true }"/>
        </Slide>
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
    
    <!--
      Part of the page displaying all the projects concerning the area. 
      The projects are displayed in two ways: the odd ones are displayed on the
      left part of the page, the even ones are displayed on the right, with two 
      symmetric layouts-->
   
    <div id="project-container_area">
      <div id="top-single-area">
            <h1 id="singlearea-title">{{data[0][0].name}}</h1>
            <p id="singlearea-page-description"> {{data[0][0].description}}</p>
        </div>
      <template v-for="(project, index) in data[0][1]">
        <ProjectCardExtended v-if="index % 2 === 0"
          :key="project"
          :link="'/projects/' + project.name"
          :title="project.name"
          :img-url="'~/assets/img/projects/' + project.name + '1.jpg'"
          :product="project.product_service"
          :date="project.date"
          :location="project.location"
        />
        <ProjectCardExtendedCustom v-else
          :key="project.name"
          :link="'/projects/' + project.name"
          :title="project.name"
          :img-url="'~/assets/img/projects/' + project.name + '1.jpg'"
          :product="project.product_service"
          :date="project.date"
          :location="project.location"
        />
      
      </template>
    </div>
    {{ data }}
  </main>
</template>


<script>
    import { Carousel, Pagination, Slide } from 'vue3-carousel'
    
    import 'vue3-carousel/dist/carousel.css'
    
    export default defineNuxtComponent({
      name: 'Autoplay',
      components: {
    Carousel,
    Slide,
    Pagination,
},
      /* Data to be displayeed are retrieved here*/
      async asyncData() {
        const route = useRoute()
        const data=[]
        data[0]= await $fetch( '/api/areas/' + route.params.id)
        data[1]= await $fetch( '/api/areas/concern/' + route.params.id)
        return {
          data
        }
      },
      beforeDestroy() {
        const mainElement = document.querySelector('main');
        mainElement.classList.remove('custom-background_area');
  },
  })
</script>

<style>
.custom-background_area {
  background-color: #8da0a4;
} 

#singlearea-title
{
    font-weight: bolder;
    color: #202622;
    text-align: start;
    font-size: 4.5vw;
}

#singlearea-page-description
{
    color: #202622;
    text-align: justify;
    font-size: 1.2vw;
    margin-top: 1%;
    margin-block-end: 0%;
    margin-inline-end: 5%;
}

#top-single-area{
    width: 95%;
    margin: 0% 5% 1% 5%;
}

main {
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  overflow-x: hidden;
}

#carousel-container_area {
  position: relative;
  top: -25px;
  left: -15px;
  width: 120%;
  height: 100%;
  margin: 0;
  align-content: center;
  z-index: 2;
}

#carousel_area {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  margin-bottom: 0px;
  align-content: center;
}

#project-container_area {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;
  margin-top: 30px; 
  margin-bottom: 30px;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}

.carousel__item_area {
  height: 430px; 
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

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  width: 100%;
  border: 5px solid white;
}

.responsive-image {
  width: 100%;
  max-height: 100%;
  object-fit:contain;
  background-color: white;
}

/* Page layout made responsive. In this block the settings are set for screens up to 700px wide */
@media only screen and (max-width: 700px) {
  #card-title, #card-title_custom {
    font-size: 4vw;
  }

  #card-product, #card-date, #card-location, 
  #card-product_custom, #card-date_custom, #card-location_custom {
    font-size: 1.6vw;
  }

  .img-container, .img-container_custom {
    width: 40vw;
    border-radius: 1vw;
  }

  .grid-container_custom {
    grid-template-columns: 40vw auto ;
  }

  .grid-container {
    grid-template-columns: auto 40vw;
  }
  #singlearea-title
  {
      font-size: 5vw;
  }

  #singlearea-page-description
  {
      font-size: 1.6vw;
  }
}

/* Page layout made responsive. In this block the settings are set for screens up to 500px wide */
@media only screen and (max-width: 500px) {
  #card-title, #card-title_custom {
    font-size: 5.5vw;
  }

  #card-product, #card-date, #card-location, 
  #card-product_custom, #card-date_custom, #card-location_custom {
    font-size: 2.5vw;
  }

  .img-container, .img-container_custom {
    width: 80vw;
    border-radius: 1vw;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 80vw;
    grid-template-rows: auto 25vw;
    row-gap: 2vw;
    grid-column-gap: 0;
  }

  .grid-container_custom {
    display: grid;
    grid-template-columns: 80vw;
    grid-template-rows: auto 25vw;
    row-gap: 2vw;
    grid-column-gap: 0;
  }

  .text-container_custom{
    grid-row: 2;
  }

  .img-container_custom{
    grid-row: 1;
  }

  .project-card{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 0%;
  }

  .project-card_custom {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-right: 0%;
  }

  #singlearea-title
  {
      font-size: 5.5vw;
  }

  #singlearea-page-description
  {
      font-size: 2.5vw;
  }
}

</style>