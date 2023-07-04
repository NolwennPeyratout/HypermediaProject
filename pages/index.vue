<!--
    Home page
-->
<template>
    <main>
        <div id="home-intro-container">
            <div id="left-intro">
                <!-- CONTENT TO BE CHANGED-->
                <h1 class="big-text">Find the best funds for your career</h1>
                <p class="little-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Fuga dicta exercitationem sint aut minima voluptatibus vero fugit quaerat, expedita, 
                    veniam id iusto ab magni itaque quos molestias deserunt harum! Laborum.</p>
                <NuxtLink to="/about" id="intro-link">
                    <div id="home-about-link">ABOUT US</div></NuxtLink>
            </div>
            <div class="right-intro">
                <!-- IMAGE TO BE CHANGED-->
                <img src="/_nuxt/assets/img/home-image.jpg" alt="home page image">
            </div>
        </div>
        <div id="home-areas-container">
            <h1 class="big-text" id="areas-head">Our areas</h1>
            <!-- CONTENT TO BE CHANGED-->
            <p class="little-text" id="areas-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Fuga dicta exercitationem sint aut minima voluptatibus vero fugit quaerat, expedita, 
                    veniam id iusto ab magni itaque quos molestias deserunt harum! Laborum.</p>
            <div id="areas-circles-container">
                <HomeCircleComponent class="areas-circles" :title = "'Food'" :link = "'/areas/Food'" :img-url="'/_nuxt/assets/img/Food_area/Food1.jpg'" />
                <HomeCircleComponent class="areas-circles" :title = "'IT'" :link = "'/areas/IT'" :img-url="'/_nuxt/assets/img/IT_area/IT1.jpg'" />
                <HomeCircleComponent class="areas-circles" :title = "'Health'" :link = "'/areas/Health'" :img-url="'/_nuxt/assets/img/Health_area/Health1.jpg'" />
            </div>
        </div>
        <div id="absolute-container">
            <div id="home-awards-container">
                <div class="left-awards">
                <!-- IMAGE TO BE CHANGED-->
                <img src="/_nuxt/assets/img/home-image.jpg" alt="home page image">
                </div>
                <div id="right-awards">
                    <!-- CONTENT TO BE CHANGED-->
                    <h1 class="big-text" id="awards-big-text">Awarded as 2023 Best Venture Capital Firm</h1>
                    <p class="little-text" id="awards-little-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Fuga dicta exercitationem sint aut minima voluptatibus vero fugit quaerat, expedita, 
                        veniam id iusto ab magni itaque quos molestias deserunt harum! Laborum.</p>
                </div>
                <!-- CONTENT TO BE CHANGED-->
                <div id="awards-square">
                    <div class="square-el">
                        <h1 id="square-head">2022</h1>
                        <p id="square-body">Best firm</p>
                    </div>
                    <div class="vert-line"></div>
                    <div class="square-el">
                        <h1 id="square-head">#1</h1>
                        <p id="square-body">Best firm</p>
                    </div>
                    <div class="vert-line"></div>
                    <div class="square-el">
                        <h1 id="square-head">World</h1>
                        <p id="square-body">Best firm</p>
                    </div>

                </div>
            </div>    
        </div> 
        <div id="home-team-container">
            <div id="left-team">
                <h1 id="team-head">Our Team</h1>
                <p id="team-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Repellat quia esse ipsum perferendis recusandae porro, modi eveniet, eligendi voluptate tenetur 
                    dolores minus a veritatis architecto ea qui quo aliquam non!</p>
                <NuxtLink to="/team " id="team-button">
                    <div id="team-link">SEE MORE</div></NuxtLink>
            </div>
            <div id="right-team">
                
                <!-- TEAM MEMBERS CAROUSEL -->
                <!--<Carousel id="carousel" :autoplay="3000" :wrap-around="true" :items-to-show="2.5">
                    <Slide v-for="slide in 3" :key="slide">
                        ELEMENTS!!!
                    </Slide>
                    <template #addons>
                      <Pagination />
                    </template>
                </Carousel>-->
            </div>
        </div>
        <div id="home-projects-container">

        </div>
        <div id="home-button-container">

        </div>
        <div id="home-prefooter-container">

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
            data[0] = await $fetch(useRuntimeConfig().baseURL + '/server/team')
        return { data }
        },
    })
</script>

<style>

    #home-intro-container{
        background-color: #252525;
        width: 100%;
        padding: 5%;
        display: flex;
        flex-direction: row;
        gap: 5%;
    }

    #left-intro{
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-left: 5%;
        gap: 5%;
        align-items: center;
    }

    .big-text{
        color: white;
        font-size: 4.5em;
        font-weight: bold;
    }
    .little-text{
        color: white;
        font-size: 1em;
    }
    #intro-link{
        display: flex;
        background-color: #3A4740;
        text-decoration: none;
        border-radius: 10px;
        width: 30%;
        height: 8%;
        align-items: center;
        justify-content: center;
    }
    #home-about-link{
        text-decoration: none;
        color: white;
        font-size: 1.5em;
    }
    .right-intro{
        flex: 1;
        background-color: white;
        aspect-ratio: 16/15;
        min-width: 30%;
        min-height: 30%;
        height: auto;
        width: auto;
        margin-right: 5%;
        border-radius: 2% 2% 2% 35%;
        overflow: hidden;
    }
    .right-intro img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    #home-areas-container{
        background-color: white;
        margin: 2% 5% 0% 5%;
        display: flex;
        flex-direction: column;
        align-items: center;

    }
    #areas-head{
        color: #252525;
    }
    #areas-text{
        color: #252525;
        text-align: center;
        width: 60%;
    }

    #areas-circles-container{
        display: flex;
        flex-direction: row;
    }
    #absolute-container{
        position: relative;
        margin-bottom: 5%;
    }
    
    #home-awards-container{
        display: flex;
        flex-direction: row;
        width: 100%;
        background-color: white;
    }
    .left-awards{
        flex: 1;
        background-color: #252525;
        aspect-ratio: 16/15;
        min-width: 30%;
        min-height: 30%;
        height: auto;
        width: auto;
        margin: 5% 0% 5% 10%;
        border-radius: 35% 2% 2% 2%;
        overflow: hidden;
    }

    .left-awards img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    #right-awards{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 5%;
        margin: 5% 5% 5% 5%;
        align-items: center;
    }

    #awards-big-text{
        color: #252525;
    }
    #awards-little-text{
        color: #252525;
        text-align: justify;
    }

    #awards-square{
        position: absolute;
        display: flex;
        flex-direction: row;
        background-color: rgba(176, 191, 194, 0.5);
        width: 55%;
        height: 30%;
        top: 70%;
        right: 5%;
        box-shadow: 2px 2px 4px #252525;
    }
     .square-el{
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: center;
        align-items: center;
        text-align: center;
     }
    
    #square-head{
        color: #252525;
        font-size: 4em;
    }
    #square-body{
        color: #252525;
        margin-block-start: 0px;
        margin-block-end: 0px;
        font-size: 2em;
    }

    .vert-line{
        border-left: 2px solid #252525;
        margin: 5% 0% 5% 0%;
    }
    
    #home-team-container{
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: 5%;
        background-color: #B0BFC2;
        padding: 5% 5% 5% 5%;
    }

    #left-team{
        display: flex;
        flex-direction: column;
        margin-left: 5%;
        flex: 1;
        justify-content: center;
        align-items: center;
    }

    #team-head{
        color: white;
        font-size: 4.5em;
        font-weight: bold;
    }

    #team-body{
        color: white;
        font-size: 1em;
        text-align: justify;
    }

    #team-button{
        display: flex;
        background-color: #3A4740;
        text-decoration: none;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 2em;
    }
    #team-link{
        text-decoration: none;
        color: #B0BFC2;
        text-align: center;
        font-size: 1.5em;
    }

    #right-team{
        flex: 2;
    }

    #home-projects-container{
        background-color: white;
    }

    #home-prefooter-container{
        background-color: #3A4740;
    }
</style>
