<!--
    Home page
-->
<template>
    <div class = 'page'>
        <TheHeader />
        <div id="home-content-page">
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
                        <!-- CONTENT TO BE CHANGED-->
                        <p id="team-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Repellat quia esse ipsum perferendis recusandae porro, modi eveniet, eligendi voluptate tenetur 
                            dolores minus a veritatis architecto ea qui quo aliquam non!</p>
                        <NuxtLink to="/team" id="team-button">
                            <div id="team-link">SEE MORE</div></NuxtLink>
                    </div>
                    <div id="right-team">
                        <!-- TEAM MEMBERS CAROUSEL TO BE FIXED -->
                        <Carousel id="team-carousel" :autoplay="0" :wrap-around="true" :items-to-show="1" :items-to-scroll="2" :pause-autoplay-on-hover="true">
                            <Slide v-for="person in data[0]" :key="person">
                                <HomeRectangleComponent class="team-carousel-item" :title="person.name" 
                                :subtitle="'Role: '+person.role" :link="'/team/'+person.name" :img-url="'/_nuxt/assets/img/team/'+person.name+'.jpeg'"/>
                            </Slide>
                            <template #addons>
                            <Pagination />
                            </template>
                        </Carousel>
                    </div>
                </div>
                <div id="home-projects-container">
                    <h1 id="projects-head">Our Projects</h1>
                    <!-- CONTENT TO BE CHANGED-->
                    <p id="projects-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero dolor architecto eum saepe aut accusantium 
                    praesentium exercitationem, eos, nesciunt maiores adipisci a unde recusandae dolores iste laboriosam sunt, alias assumenda?</p>
                    <div id="home-projects-grid">
                        <ProjectCard class="home-card" :title = "'Apple Visor'" :link = "'/projects/Apple Visor'" :img-url="'/_nuxt/assets/img/projects/Apple Visor1.jpg'"/>
                        <ProjectCard class="home-card" :title = "'Nutella'" :link = "'/projects/Nutella'" :img-url="'/_nuxt/assets/img/projects/Nutella1.jpg'"/>
                        <ProjectCard class="home-card" :title = "'Glucometer'" :link = "'/projects/Glucometer'" :img-url="'/_nuxt/assets/img/projects/Glucometer1.jpg'"/>
                        <ProjectCard class="home-card" :title = "'Starlink'" :link = "'/projects/Starlink'" :img-url="'/_nuxt/assets/img/projects/Starlink1.jpg'"/>
                        <ProjectCard class="home-card" :title = "'BioVegan Smoothies'" :link = "'/projects/BioVegan Smoothies'" :img-url="'/_nuxt/assets/img/projects/BioVegan Smoothies1.jpg'"/>
                    </div>
                    <NuxtLink to="/projects" id="home-projects-button">
                            <div id="home-projects-link">SEE MORE</div></NuxtLink>
                    <NuxtLink to="/contact" id="home-contacts-button">
                            <div id="home-contacts-link">CONTACT US</div></NuxtLink>
                </div>
                <div id="home-prefooter-container">
                    <p id="prefooter-body1">Follow us on:</p>
                    <div id="social-icons">
                        <img class="social-icon" src="/_nuxt/assets/img/twitter-logo.png" alt="Twitter logo">
                        <img class="social-icon" src="/_nuxt/assets/img/facebook-logo.png" alt="Facebook logo">
                        <img class="social-icon" src="/_nuxt/assets/img/linkedin-logo.png" alt="LinkedIn logo">
                    </div>
                    <!-- CONTENT TO BE CHANGED-->
                    <p id="prefooter-body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla perferendis eaque expedita veritatis enim labore consequatur.
                     Velit error earum debitis, neque, commodi harum eius similique maiores praesentium, saepe eligendi repellendus!</p>
                </div>
            </main>
        </div>
        <TheFooter />
    </div>
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
            const data = []
            data[0] = await $fetch(useRuntimeConfig().baseURL + '/server/team')
        return { data }
        },
    })
    definePageMeta({
        layout: false
    })
</script>

<style>
    #home-content-page{
      width:100%;
      margin-left: 0px;
      margin-right: 0px;
    }
    #home-intro-container{
        background-color: #252525;
        padding: 2% 5% 5% 5%;
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
        width: 100%;
        background-color: white;
        padding-top: 5%;
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
        width: 100%;
        padding-bottom: 5%;
        background-color: white;
    }
    
    #home-awards-container{
        display: flex;
        flex-direction: row;
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
        top: 65%;
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
        gap: 5%;
        background-color: #B0BFC2;
        padding: 5% 5% 5% 5%;
    }

    #left-team{
        display: flex;
        flex-direction: column;
        margin-left: 5%;
        gap: 5%;
        flex: 1;
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
        margin-top: 15%;
    }

    #team-link{
        text-decoration: none;
        color: #B0BFC2;
        text-align: center;
        font-size: 1.5em;
    }

    #right-team{
        flex: 2;
        overflow: hidden;
    }

    #team-carousel{
        height: 100%;
    }

    .team-carousel-item{
        height: 400px; 
        width: 400px;

    }
    .carousel__slide {
      padding: 0px;
    }

    .carousel__track{
        margin-right: 0px;
    }

    .carousel__prev,
    .carousel__next {
        box-sizing: content-box;
        width: 100%;
        border: 5px solid white;
    }

    #home-projects-container{
        background-color: white;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2% 0% 3% 0%;
    }

    #projects-head{
        color: #252525;
        font-size: 4.5em;
        font-weight: bold;
    }

    #projects-body{
        color: #252525;
        font-size: 1em;
        width: 50%;
        text-align: justify;
        margin-bottom: 2%;
    }

    #home-projects-grid{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        gap: 1.5%;
    }

    .home-card{
        margin-bottom: 1.5%;
    }

    #home-contacts-button, #home-projects-button{
        display: flex;
        background-color: #3A4740;
        text-decoration: none;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        width: 20%;
        height: 3vw;
        margin-top: 5%;
    }

    #home-projects-button{
        margin-top: 0%;
        width: 10%;
        height: 2vw;
    }

    #home-contacts-link{
        text-decoration: none;
        color: white;
        text-align: center;
        font-size: 2vw;
    }

    #home-projects-link{
        text-decoration: none;
        color: white;
        text-align: center;
        font-size: 1.5vw;
    }

    #home-prefooter-container{
        display: flex;
        flex-direction: column;
        padding-top: 2%;
        padding-bottom: 2%;
        align-items: center;
        background-color: #3A4740;
        width: 100%;
    }

    #prefooter-body1, #prefooter-body2{
        color: white;
        margin: 0px 0px 0px 0px;
        text-align: center;
        max-width: 50%;
    }

    #social-icons{
        display: flex;
        flex-direction: row;
        gap: 1%;
        justify-content: center;
        margin: 1% 0% 1% 0%;
    }

    .social-icon{
        width: 2%;
        height: 2%;
    }
</style>
