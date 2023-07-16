<!--
    Page description for a single person.
-->
<template>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <main>
      <!--There are all the personal information of one person, with its role, img, name and cv-->
        <div id = "info-group">
          <div id="container-img-person">
            <img id = "img-person" :src = "'/~/assets/img/team/'+data[0].name+'.jpeg'"  />
          </div>
          <div id="presentation-person">
            <h1 id="person-name" class = "data"> <span>{{ data[0].name }}</span></h1>
            <h3 id="person-role" class = "data"><span>{{ data[0].role }}</span></h3>
            <p id="person-cv" class = "data-person">CV</p>
            <p id="cv">{{ data[0].cv }}</p>
          </div>
        </div>
        <!--This part is shown only if the person is the supervisor of one project, and we show it to avoid the carousel
        <div v-if="data[1].length == 1" id="container-project">
          <NuxtLink :to="'/projects/' + data[1][0].project_name" class="link-box">
                <div id="textImage-project">
                  <p>Project: {{ data[1][0].project_name }}</p>
                </div>
                <div id="image-project">
                  <img :src="'/~/assets/img/projects/'+ data[1][0].project_name +'1.jpg'" />
                </div>
              </NuxtLink>
        </div>
        This carousel is shown only if the person is the supervisor of more than one project
        <div v-else id="carousel-container-person">
          <Carousel id="carousel-person" :autoplay="4000" :wrap-around="true" :items-to-show="1.8" :mouse-drag="false">
            <Slide v-for="project in data[1]" :key="project" id="slide-carousel">
              <NuxtLink :to="'/projects/' + project.project_name" class="link-box">
                <div id="textImage-project">
                  <p>Project: {{project.project_name }}</p>
                </div>
                <div id="image-project">
                  <img :src="'/~/assets/img/projects/'+ project.project_name +'1.jpg'" class="carousel__item_person" :class="{ 'responsive-image': true }"/>
                </div>
              </NuxtLink>
              </Slide>
            <template #addons>
              <Pagination />
            </template>
          </Carousel>
        </div>
        This part define circle Container where we place specifics area of a person
        <div id="container-area-person">
            <CircleContainer id="CircleContainer-person-area" v-for = "area in data[2]" :key="area.area_name" :title = "area.area_name" :link = "'/areas/' + area.area_name" :img-url="'/~/assets/img/' + area.area_name + '_area/' + area.area_name + '1.jpg'" />
        </div>
      -->
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
            const route = useRoute()
            const data = []
            const id = route.params.id
            data= await $fetch( '/api/team/' + id)  
            //data[0] = to get all the information about a precise member of the company            
            //data[1] to get all the project of a specific member of the company
            //data[2] to get all the area where this specific member work on ( it's related to his / her project)
            console.log(data)
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
    margin-top: 60px;
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
    font-size: 4.5vw;
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
    font-size: 1.2vw;
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

/* Page layout made responsive. In this block the settings are set for screens up to 800px wide */
@media only screen and (max-width: 800px) {
  #container-area-person > .circle-container .circle {
    width: 150px;
    height: 150px;
  }
  #container-area-person{
    margin-top: 5%;
    width:100%;
  }

  #container-area-person .circle-container{
    margin:10px;
    width:40%;
  }

  #info-group{
    width:85%;
  }

  #container-project{
    width: 85%;
  }
  #img-person{
    max-width: 300px;
    max-height: 300px;
  }
  #container-img-person{
    width: fit-content;
  }

  #person-name{
    font-size: 5vw;
  }

  #cv{
    font-size: 1.6vw;
  }

  .carousel__slide, .carousel__viewport, #carousel-container-person, #carousel-person, .responsive-image{
    height: 300px;
  }

}

/* Page layout made responsive. In this block the settings are set for screens up to 600px wide */
@media only screen and (max-width: 600px) {
  #container-area-person .circle-container{
    margin:10px;
    width:40%;
  }

  #container-area-person > .circle-container .circle {
    width: 100px;
    height: 100px;
  }
  #container-area-person{
    margin-top: 5%;
    width:100%;
  }

  #info-group{
    display: block;
    width: 80%;
  }

  #presentation-person{
    width: auto;
  }

  #container-project{
    width: 80%;
    height: 200px;
  }

  #container-project img {
    height: 200px;
  }

  .carousel__slide, .carousel__viewport, #carousel-container-person, #carousel-person, .responsive-image{
    height: 200px;
  }

  #textImage-project {
    bottom: 5%;
  }
  #person-name span{
    font-size: 5.5vw;
  }
  #person-role span, #person-role{
    font-size: 3.5vw;
  }
  .data-person{
    font-size: 12pt;
  }
  #cv{
    font-size: 2.5vw;
  }

  #container-area-person > .circle-container .title-center{
    font-size: 20px;
  }

}

</style>