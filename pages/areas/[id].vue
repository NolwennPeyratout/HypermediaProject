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
          <img :src="image_urls_area[slide-1]" class="carousel__item_area" :class="{ 'responsive-image': true }"/>
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
      <template v-for="index in data[1].data.length">
        <ProjectCardExtended v-if="index % 2 === 0"
          :key="data[1][index-1]"
          :link="'/projects/' + data[1][index-1].name"
          :title="data[1][index-1].name"
          :img-url="image_urls_proj_area[index-1]"
          :product="data[1][index-1].product_service"
          :date="data[1][index-1].date"
          :location="data[1][index-1].location"
        />
        <ProjectCardExtendedCustom v-else
          :key="data[1][index-1].name"
          :link="'/projects/' + data[1][index-1].name"
          :title="data[1][index-1].name"
          :img-url="image_urls_proj_area[index-1]"
          :product="data[1][index-1].product_service"
          :date="data[1][index-1].date"
          :location="data[1][index-1].location"
        />
      
      </template>
    </div>
    
  </main>
</template>


<script>
    import { Carousel, Pagination, Slide } from 'vue3-carousel'
    
    import 'vue3-carousel/dist/carousel.css'

    import img1 from '~/assets/img/Food1.jpg';
    import img2 from '~/assets/img/Food2.jpg';
    import img3 from '~/assets/img/Food3.jpg';
    import img4 from '~/assets/img/Health1.jpg';
    import img5 from '~/assets/img/Health2.jpg';
    import img6 from '~/assets/img/Health3.jpg';
    import img7 from '~/assets/img/IT1.jpg';
    import img8 from '~/assets/img/IT2.jpg';
    import img9 from '~/assets/img/IT3.jpg';

    import img_proj_1 from '~/assets/img/projects/Apple+Visor1.jpg';
    import img_proj_2 from '~/assets/img/projects/BioVegan+Smoothies1.jpg';
    import img_proj_3 from '~/assets/img/projects/Cancer+Destroyer1.jpg';
    import img_proj_4 from '~/assets/img/projects/DetectionSystem1.jpg';
    import img_proj_5 from '~/assets/img/projects/Doriano+Crackers1.jpg';
    import img_proj_6 from '~/assets/img/projects/Glucometer1.jpg';
    import img_proj_7 from '~/assets/img/projects/Heartless1.jpg';
    import img_proj_8 from '~/assets/img/projects/Knox1.jpg';
    import img_proj_9 from '~/assets/img/projects/Lidar+Scanner1.jpg';
    import img_proj_10 from '~/assets/img/projects/Nutella1.jpg';
    import img_proj_11 from '~/assets/img/projects/Paracetamolo1.jpg';
    import img_proj_12 from '~/assets/img/projects/Ringo1.jpg';
    import img_proj_13 from '~/assets/img/projects/Starlink1.jpg';
    import img_proj_14 from '~/assets/img/projects/The+Next+Hamburger1.jpg';
    import img_proj_15 from '~/assets/img/projects/VotaMi1.jpg';

    const image_urls_food = [img1, img2, img3];
    const image_urls_health = [img4, img5, img6];
    const image_urls_it = [img7, img8, img9];

    const image_urls_proj_food = [img_proj_2, img_proj_5, img_proj_10, img_proj_12, img_proj_14];
    const image_urls_proj_health = [img_proj_1, img_proj_4, img_proj_8, img_proj_13, img_proj_15];
    const image_urls_proj_it = [img_proj_3, img_proj_6, img_proj_7, img_proj_9, img_proj_11];
    
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
        let image_urls_area=[]
        let image_urls_proj_area=[]
        data[0]= await $fetch( '/api/areas/' + route.params.id)
        data[1]= await $fetch( '/api/areas/concern/' + route.params.id);

        if(route.params.id === 'Food'){
          image_urls_area = image_urls_food;
          image_urls_proj_area = image_urls_proj_food;
        } else if(route.params.id === 'Health'){
          image_urls_area = image_urls_health;
          image_urls_proj_area = image_urls_proj_health;
        } else{
          image_urls_area = image_urls_it;
          image_urls_proj_area = image_urls_proj_it;
        }

        return {
          data
        }
  },
      beforeDestroy() {
        const mainElement = document.querySelector('main');
        mainElement.classList.remove('custom-background_area');
  }
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