<!--
    Page description for a single area.
    commit a caso
-->
<template>
  <main> 
    <div id="carousel-container">
      <Carousel id="carousel" :autoplay="2000" :wrap-around="true" :items-to-show="1.1">
        <Slide v-for="slide in slides" :key="slide">
          <img :src="slide" class="carousel__item" :class="{ 'responsive-image': true }"/>
        </Slide>
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
    
    <div id="project-container">
      <CircleContainer v-for="project of data[1]" :link="'/projects/' + project.id" :title="project.name" />
    </div>
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
      async asyncData() {
        const route = useRoute()
        const data = []
        data[0] = await $fetch(useRuntimeConfig().baseURL + '/server/areas/' + route.params.id)
        data[1] = await $fetch(useRuntimeConfig().baseURL + '/server/projects/byarea/' + route.params.id)
      
        const slides = [
          "/_nuxt/assets/img/food_area/bee.jpg",
          "/_nuxt/assets/img/food_area/fresh-bread.jpg",
          "/_nuxt/assets/img/food_area/orange.jpg"
        ]
      
        return {
          data,
          slides
        }
      },
})
</script>

<style>

main {
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  overflow-x: visible;
}

.breadcrump{
  z-index: 5;
}

#carousel-container {
  position: relative;
  top: -55px;
  width: 100%;
  margin: 0;
  align-content: center;
  z-index: 1;
}

#carousel {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 120%;
  margin: 0;
  align-content: center;
  pointer-events: none;
}

#project-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  gap: 40px;
  margin-top: 20px; 
  z-index: 2;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}

.carousel__item {
  /*min-height: 150px; */
  height: 10%;
  width: 100%;  
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
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

</style>