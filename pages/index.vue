<!--
    Home page
-->
<template>
    <main>
        <div id="home-intro-container">
            <div id="left-intro">
                <h1 class="big-text">Find the best funds for your career</h1>
                <p class="little-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Fuga dicta exercitationem sint aut minima voluptatibus vero fugit quaerat, expedita, 
                    veniam id iusto ab magni itaque quos molestias deserunt harum! Laborum.</p>
                <div id="intro-link">
                    <NuxtLink to="/about" id="home-about-link">ABOUT US</NuxtLink>
                </div>
            </div>
            <div class="right-intro">
                <img src="/_nuxt/assets/img/home-image.jpg" alt="home page image">
            </div>
        </div>
        <div id="home-areas-container">

        </div>
        <div id="home-awards-container">

        </div> 
        <div id="home-team-container">

        </div>
        <div id="home-projects-container">

        </div>
        <div id="home-button-container">

        </div>
        <div id="home-prefooter-container">

        </div>
    </main>
</template>

<style>
    #home-intro-container{
        background-color: #252525;
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    #left-intro{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 5%;
        margin: 5% 5% 5% 5%;
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
        margin: 5% 10% 5% 0%;
        position: relative;
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
    }

    #home-awards-container{
        background-color: white;
    }
    
    #home-team-container{
        background-color: #B0BFC2;
    }

    #home-projects-container{
        background-color: white;
    }

    #home-prefooter-container{
        background-color: #3A4740;
    }
</style>
