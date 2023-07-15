<!--
    Home page of the website in which is contained all the relevant information that should be 
    immediately available to the user when he/she opens it.
-->
<template>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <div class = 'page'>
        <TheHeader />
        <div id="home-content-page">
            <main>
                <!-- First "area" of the home page, in which is displayed a little introduction about the company -->
                <div id="home-intro-container">
                    <div id="left-intro">
                        <h1 class="big-text">Find the best funds for your career</h1>
                        <p class="little-text">Welcome to our venture capital firm, where innovation meets opportunity. 
                            We are dedicated to fueling the growth of groundbreaking ventures across diverse industries. 
                            With a proven track record of success, our firm empowers visionary entrepreneurs with the 
                            resources and expertise they need to bring their ideas to fruition. Explore our portfolio 
                            of transformative projects, meet our talented team, and discover how we can collaborate to d
                            rive your venture to new heights. Join us on this exciting journey of innovation and investment, 
                            where possibilities become realities and dreams turn into extraordinary achievements.</p>
                        
                            <!-- link to the about us page-->
                            <NuxtLink to="/about" id="intro-link">
                            <div id="home-about-link">ABOUT US</div></NuxtLink>
                    </div>
                    <div class="right-intro">
                        <img src="~/assets/img/home1.jpg" alt="home page image">
                    </div>
                </div>
                <!-- Second part of the home page, in which are displayed the company working areas through a circular component-->
                <div id="home-areas-container">
                    <h1 class="big-text" id="areas-head">Our areas</h1>
                    <p class="little-text" id="areas-text">Our working areas are meticulously chosen to support, nurture, 
                    and propel groundbreaking ideas and ambitious entrepreneurs forward. We understand that innovation knows no bounds, and we are committed to providing a diverse 
                    range of resources and expertise to fuel the success of ventures across industries. Whether you're an entrepreneur seeking funding or a startup enthusiast looking 
                    to explore the frontiers of innovation, our working areas offer a wealth of opportunities.</p>
                    <div id="areas-circles-container">
                        <!-- A circular component is displayed for each working area (Food, Health and IT) -->
                        <HomeCircleComponent class="areas-circles" :title = "'Food'" :link = "'/areas/Food'" :img-url="'~/assets/img/Food1.jpg'" />
                        <HomeCircleComponent class="areas-circles" :title = "'IT'" :link = "'/areas/IT'" :img-url="'~/assets/img/IT1.jpg'" />
                        <HomeCircleComponent class="areas-circles" :title = "'Health'" :link = "'/areas/Health'" :img-url="'~/assets/img/Health1.jpg'" />
                    </div>
                </div>
                <!-- Third section of the home page in which the user is informed about the stats and awards received by the company -->
                <div id="absolute-container">
                    <div id="home-awards-container">
                        <div class="left-awards">
                        <img src="~/assets/img/home2.jpg" alt="home page image">
                        </div>
                        <div id="right-awards">
                            <h1 class="big-text" id="awards-big-text">Awarded as 2023 Best Venture Capital Firm</h1>
                            <p class="little-text" id="awards-little-text">Founded in 2000 with a vision to fuel innovation, our company 
                            embarked on a remarkable journey. Through years of unwavering dedication, hard work, and a commitment to 
                            excellence, our team forged a path of success. Together, we navigated the ever-evolving landscape, 
                            identifying groundbreaking startups and providing them with the resources they needed to thrive. It 
                            is with immense pride that in 2023, we stand as the recipient of the Best Venture Capital Firm award—a 
                            testament to the power of teamwork and the relentless pursuit of greatness.</p>
                        </div>
                        <!-- Little section in which the stats of the company are displayed-->
                        <div id="awards-square">
                            <div class="square-el">
                                <h1 id="square-head">2021</h1>
                                <p id="square-body">Best Health project award winner</p>
                            </div>
                            <div class="vert-line"></div>
                            <div class="square-el">
                                <h1 id="square-head">#1</h1>
                                <p id="square-body">IT Venture Capital in the world</p>
                            </div>
                            <div class="vert-line"></div>
                            <div class="square-el">
                                <h1 id="square-head">Italy</h1>
                                <p id="square-body">#2 Venture capital specialized in food</p>
                            </div>

                        </div>
                    </div>    
                </div> 
                <!-- Fourth section of the page in which the team is presented to the user through a self-reproducing carousel -->
                <div id="home-team-container">
                    <div id="left-team">
                        <h1 id="team-head">Our Team</h1>
                        <p id="team-body">With a team of highly skilled and dedicated individuals, we bring a wealth of knowledge and expertise 
                        to the table. Our diverse team of ten professionals is equipped with the experience and preparation 
                        needed to navigate the dynamic world of venture capital.</p>
                        <NuxtLink to="/team" id="team-button">
                            <div id="team-link">SEE MORE</div></NuxtLink>
                    </div>
                    <div id="right-team">
                        <!-- Carousel displaying the people working for the company-->
                        <Carousel id="team-carousel" :autoplay="2000" :wrap-around="true" :items-to-show="3" :transition="500" :mouse-drag="false">
                            <Slide v-for="person in data[0]" :key="person">
                                <HomeRectangleComponent class="team-carousel-item" :title="person.name" 
                                :subtitle="'Role: '+person.role" :link="'/team/'+person.name" :img-url="'~/assets/img/team/'+person.name+'.jpeg'"/>
                            </Slide>
                            <template #addons>
                            <Pagination />
                            </template>
                        </Carousel>
                    </div>
                </div>
                <!-- Fifth part of the home page displaying the most relevant project of the company. The user can also access the page containing all the other
                projects through an apposite button -->
                <div id="home-projects-container">
                    <h1 id="projects-head">Our Projects</h1>
                    <p id="projects-body"> We proudly work at extraordinary projects that have captured the world's attention 
                    and redefined their respective industries. From revolutionary advancements in food technology to 
                    groundbreaking healthcare solutions and cutting-edge IT innovations, these projects exemplify our
                    commitment to nurturing visionary entrepreneurs and driving transformative change on a global scale.</p>
                    <div id="home-projects-grid">
                        <ProjectCard class="home-card" :title = "'Apple Visor'" :link = "'/projects/Apple Visor'" :img-url="'~/assets/img/projects/Apple Visor1.jpg'"/>
                        <ProjectCard class="home-card" :title = "'Nutella'" :link = "'/projects/Nutella'" :img-url="'~/assets/img/projects/Nutella1.jpg'"/>
                        <ProjectCard class="home-card" :title = "'Glucometer'" :link = "'/projects/Glucometer'" :img-url="'~/assets/img/projects/Glucometer1.jpg'"/>
                        <ProjectCard class="home-card" :title = "'Starlink'" :link = "'/projects/Starlink'" :img-url="'~/assets/img/projects/Starlink1.jpg'"/>
                        <ProjectCard class="home-card" :title = "'BioVegan Smoothies'" :link = "'/projects/BioVegan Smoothies'" :img-url="'~/assets/img/projects/BioVegan Smoothies1.jpg'"/>
                    </div>
                    <!-- Button that leads the user to the page containing all the company projects-->
                    <NuxtLink to="/projects" id="home-projects-button">
                            <div id="home-projects-link">SEE MORE</div></NuxtLink>
                    <!-- Button that leads the user to the page containing the company contact information-->
                    <NuxtLink to="/contact" id="home-contacts-button">
                            <div id="home-contacts-link">CONTACT US</div></NuxtLink>
                </div>
                <div id="home-prefooter-container">
                    <p id="prefooter-body1">Follow us on:</p>
                    <div id="social-icons">
                        <img class="social-icon" src="~/assets/img/twitter-logo.png" alt="Twitter logo">
                        <img class="social-icon" src="~/assets/img/facebook-logo.png" alt="Facebook logo">
                        <img class="social-icon" src="~/assets/img/linkedin-logo.png" alt="LinkedIn logo">
                    </div>
                    <p id="prefooter-body2">The confidentiality of our website's content is of utmost importance to us,
                    and we strictly uphold the privacy of all information shared. Additionally, all rights for 
                    project and company names displayed on our website are reserved, ensuring their protection and 
                    preventing unauthorized use.</p>
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
    .page{
        font-family: 'Inter', sans-serif;
    }
    #home-content-page{
      width:100%;
      margin-left: 0;
      margin-right: 0;
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
        gap: 2%;
        align-items: center;
    }

    .big-text{
        color: white;
        font-size: 4.5vw;
        font-weight: bold;
    }
    .little-text{
        color: white;
        text-align: justify;
        font-size: 1.2vw;
    }
    #intro-link{
        display: flex;
        background-color: #3A4740;
        text-decoration: none;
        border-radius: 0.7vw;
        width: 40%;
        height: 2.7vw;
        align-items: center;
        justify-content: center;
        margin-top: 3.5%;
    }
    #home-about-link{
        text-decoration: none;
        color: white;
        font-size: 1.6vw;
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
        text-align: justify;
        width: 60%;
    }

    #areas-circles-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    #absolute-container{
        position: relative;
        width: 100%;
        padding-bottom: 5%;
        margin-bottom: 2%;
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
        gap: 2%;
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
        background-color: rgba(176, 191, 194, 0.8);
        width: 55%;
        height: 30%;
        top: 67.5%;
        right: 5%;
        box-shadow: 0.13vw 0.13vw 0.26vw #252525;
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
        font-size: 4.5vw;
    }
    #square-body{
        color: #252525;
        margin-block-start: 1vw;
        margin-block-end: 0;
        margin-inline-start: 0.6vw;
        margin-inline-end: 0.6vw;
        font-size: 1.6vw;
    }

    .vert-line{
        border-left: 0.13vw solid #252525;
        margin: 5% 0% 5% 0%;
    }
    
    #home-team-container{
        display: flex;
        flex-direction: row;
        gap: 5%;
        background-color: #B0BFC2;
        padding: 0% 5% 5% 5%;
        width: 100%;
    }

    #left-team{
        display: flex;
        flex-direction: column;
        margin-left: 5%;
        margin-top: 5%;
        gap: 5%;
        flex: 1;
        align-items: center;
        width: 50%;
    }

    #team-head{
        color: white;
        font-size: 4.5vw;
        font-weight: bold;
    }

    #team-body{
        color: white;
        font-size: 1.2vw;
        text-align: justify;
    }

    #team-button{
        display: flex;
        background-color: #3A4740;
        text-decoration: none;
        border-radius: 0.7vw;
        justify-content: center;
        align-items: center;
        width: 40%;
        height: 2.7vw;
        margin-top: 10%;
    }

    #team-link{
        text-decoration: none;
        color: #B0BFC2;
        text-align: center;
        font-size: 1.6vw;
    }

    #right-team{
        flex: 1;
        overflow: hidden;
        width: 50%;
    }

    #team-carousel{
        height: 100%;
    }

    .team-carousel-item{
        display: inline-block;
        height: 28vw; 
        width: 28vw;
        margin-left: 3%;
        margin-right: 3%;
        
    }
    .carousel__slide {
        width: 100%;
      padding: 0px;
    }

    .carousel__viewport{
        width: 100%;
        height: 80%;
    }
    

    .carousel__track{
        width: 100%;
    }

    .carousel__prev,
    .carousel__next {
        box-sizing: content-box;
        width: 100%;
        border: 0.3vw solid white;
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
        font-size: 4.5vw;
        font-weight: bold;
    }

    #projects-body{
        color: #252525;
        font-size: 1.2vw;
        width: 60%;
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
        border-radius: 0.7vw;
        justify-content: center;
        align-items: center;
        width: 20%;
        height: 2.7vw;
        margin-top: 5%;
    }

    #home-contacts-button{
        background-color: #b0bfc2;
    }

    #home-projects-button{
        margin-top: 0%;
        width: 20%;
        height: 2.7vw;
    }

    #home-contacts-link{
        text-decoration: none;
        color: white;
        text-align: center;
        font-size: 1.6vw;
    }

    #home-projects-link{
        text-decoration: none;
        color: white;
        text-align: center;
        font-size: 1.6vw;
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
        margin: 0 0 0 0;
        text-align: center;
        width: 60%;
    }

    #prefooter-body1{
        font-size: 1.2vw;
    }

    #prefooter-body2{
        font-size: 0.8vw;
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

    /* Page layout made responsive. In this block the settings are set for screens up to 700px wide */
    @media only screen and (max-width: 700px) {
        .big-text{
            font-size: 5.0vw;
        }
        .little-text{
            font-size: 1.6vw;
        }
        .right-intro{
            margin-top: 5%;
            margin-bottom: 5%;
            margin-right: 5%;
        }
        #areas-text{
            width: 80%;
        }
        .home-title-center{
            font-size: 2vw;
        }
        .home-circle-container {
            margin: 2%;
            width: 20%;
        }
        #absolute-container{
            margin-bottom: 7%;
        }
        
        #home-awards-container{
            display: flex;
            flex-direction: row;
            background-color: white;
        }
        .left-awards{
            margin: 5% 0% 5% 5%;
        }
        #right-awards{
            gap: 0%;
        }
        #awards-square{
            width: 50%;
            height: 25%;
            top: 84%;
            right: 25%;
        }        
        #square-body{
            font-size: 1.6vw;
        }
        .vert-line{
            border-left: 0.13vw solid #252525;
            margin: 2.8% 0.3% 2.8% 0%;
        }
        #left-team{
            margin-top: 5%;
        }
        #team-head{
            font-size: 5.0vw;
        }
        #team-body{
            font-size: 1.6vw;
        }
        #intro-link{
            width: 50%;
            height: 3.2vw;
        }
        #home-about-link{
            font-size: 2vw;
        }
        #team-button{
            width: 50%;
            height: 3.2vw;
            margin-top: 15%;
        }
        #team-link{
            font-size: 2vw;
        }

        #home-contacts-button, #home-projects-button{
            width: 25%;
            height: 3.2vw;
        }

        #home-contacts-link, #home-projects-link{
            font-size: 2vw;
        }

        #projects-head{
            font-size: 5.0vw;
        }
        #projects-body{
            font-size: 1.6vw;
            width: 80%;
        }
        #prefooter-body1, #prefooter-body2{
            max-width: 80%;
        }
        #prefooter-body1{
            font-size: 1.6vw;
        }
        #prefooter-body2{
            font-size: 1.2vw;
        }
        .social-icon{
            width: 3%;
            height: 3%;
        }
     
    }

    /* Page layout made responsive. In this block the settings are set for screens up to 500px wide */
    @media only screen and (max-width: 500px) {
        #home-intro-container{
            flex-direction: column;
            align-items: center;
            gap: 5%;
        }
        .big-text{
            font-size: 5.5vw;
            text-align: center;
        }
        .little-text{
            font-size: 2.5vw;
        }
        #left-intro{
            margin-left: 0%;
        }
        #intro-link{
            width: 30%;
            height: 3.7vw;
            margin-top: 0%;
            margin-bottom: 3%;
        }
        #home-about-link{
            font-size: 2.5vw;
        }
        #team-button{
            width: 50%;
            height: 3.7vw;
            margin-top: 15%;
        }
        #team-link{
            font-size: 2.5vw;
        }

        #home-contacts-button, #home-projects-button{
            width: 30%;
            height: 3.7vw;
        }

        #home-contacts-link, #home-projects-link{
            font-size: 2.5vw;
        }
        .right-intro{
            width: 70%;
            margin-right: 0;
        }
        #areas-text{
            width: 85%;
        }
        .home-title-center{
            font-size: 2.5vw;
        }
        .home-circle-container {
            margin: 2%;
            width: 23%;
        }

        #absolute-container{
        margin-bottom: 12%;
        }
        #home-awards-container{
            flex-direction: column-reverse;
            align-items: center;
        }
        .left-awards{
            width: 70%;
            margin: 0% 0% 0% 0%;
        }
        
        #right-awards{
            gap: 2%;
            margin: 0% 0% 2.5% 0%;
            width: 85%;
        }
        #awards-square{
            width: 60%;
            height: 15%;
            top: 90%;
            right: 20%;
        }      
        #square-head{
            font-size: 6vw;
        }
        #square-body{
            font-size: 2vw;
        }
        .vert-line{
            margin: 3% 0% 3% 0%;
        }

        #left-team{
            display: flex;
            flex-direction: column;
            margin-left: 5%;
            gap: 5%;
            flex: 1;
            align-items: center;
            width: 50%;
        }

        #team-head{
            color: white;
            font-size: 5.5vw;
            font-weight: bold;
        }

        #team-body{
            color: white;
            font-size: 2.5vw;
            text-align: justify;
        }

        #projects-head{
            font-size: 5.5vw;
        }

        #projects-body{
            font-size: 2.5vw;
            width: 85%;
        }

        #prefooter-body1, #prefooter-body2{
            width: 85%;
        }

        #prefooter-body1{
            font-size: 2.5vw;
        }

        #prefooter-body2{
            font-size: 1.5vw;
        }

        .social-icon{
            width: 4%;
            height: 4%;
        }

    }
</style>
