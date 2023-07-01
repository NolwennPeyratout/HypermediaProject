<template>
    <footer>         
        <div class="links">
            <!-- HOME LINK TO BE MODIFIED WITH THE LOGO AND COMPANY NAME-->
            <NuxtLink id="home-link" class="main-link" to="/"> Home Page </NuxtLink>
            <div class="vertical-line"></div>
            <div class="sub-links">
                <NuxtLink class="main-link" to="/team">Team</NuxtLink>
            </div>
            <div class="sub-links">
                <NuxtLink class="main-link" to="/areas">Areas</NuxtLink>
                <NuxtLink class="link" to="/areas/Food">Food</NuxtLink>
                <NuxtLink class="link" to="/areas/IT">IT</NuxtLink>
                <NuxtLink class="link" to="/areas/Health">Health</NuxtLink>
            </div>
            <div class="sub-links">
                <NuxtLink class="main-link" to="/projects">Projects</NuxtLink>
                <NuxtLink class="link" to="/projects/Food">Food Projects</NuxtLink>
                <NuxtLink class="link" to="/projects/IT">IT Projects</NuxtLink>
                <NuxtLink class="link" to="/projects/Health">Health Projects</NuxtLink>
                <!-- TO BE MODIFIED WHEN PAGE IS READY-->
                <NuxtLink class="link" to="/projects/Health">Most Relevant Projects</NuxtLink>
            </div>
            <div class="sub-links">
                <NuxtLink class="main-link" to="/about">About us</NuxtLink>
                <!-- NEXT THREE TO BE MODIFIED WHEN ABOUT PAGE IS READY-->
                <NuxtLink class="link" to="/about">Team page</NuxtLink>
                <NuxtLink class="link" to="/about">Areas page</NuxtLink>
                <NuxtLink class="link" to="/about">Relevant projects</NuxtLink>
            </div>
            <div class="sub-links">
                <NuxtLink class="main-link" to="/contact">Contact us</NuxtLink>
            </div>
        </div>
    </footer>
</template>

<style>
    footer {
        background-color: #202622;
        text-align: start;
        margin-top: auto;
        border-top: 15px solid #3A4740;
        padding: 20px;
        color: #fff;
    }
    .vertical-line{
        border-left: 1px solid #fff;
        margin-right: 50px;
    }
    .links{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin: 20px 0px 20px 0px;
    }
    #home-link{
        flex: 3;
        margin-left: 30px;
    }
    .sub-links{
        display: flex;
        flex-direction: column;
        gap: 15px;
        flex: 1
    }
    .main-link{
        text-decoration: none;
        color: #fff;
        font-weight: bolder;
        font-size: 20px;
    }
    .link{
        text-decoration: none;
        color: #fff;
        max-width: 120px;
        word-break: normal;
    }
    
</style>
