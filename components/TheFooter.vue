<!--
    Footer of the website to be displayed in all the pages (it can be considered a landmark)
    It is divided into two "zones": in the first on the left are displayed the company name and logo 
    with few contact information. In the second on the right are displayed the links to all the pages
    and subpages of the website.

    It does not have props
-->

<template>
    <footer>         
        <div class="links">
            <!-- LEFT PART OF THE FOOTER CONTAINING COMPANY LOGO/NAME AND CONTACT INFO-->
            <div id="left-footer">
                <NuxtLink id="home-link" class="main-link" to="/"> 
                    <img id="logo" src="/_nuxt/assets/img/CompanyLogoFooter.png" alt="Logo of the website">
                </NuxtLink>
                <p class="footer-info">Office address: Piazza Leonardo da Vinci, 22</p>
                <p class="footer-info">E-mail: hyper@media.it</p>
                <p class="footer-info">Tel: +39 347 256609</p>
                <p class="footer-info" id="copyright">Copyright © 2023 Hypermedia. All Rights Reserved</p>
            </div>
            <!-- VERTICAL LINE DIVIDING LEFT AND RIGHT PART OF THE FOOTER-->
            <div class="vertical-line"></div>
            <!-- RIGHT PART OF THE FOOTER CONTAINING LINKS TO WEBSITE PAGES AND SUBBPAGES-->
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
                <NuxtLink class="link" to="/projects/MostRelevant">Most Relevant Projects</NuxtLink>
            </div>
            <div class="sub-links">
                <NuxtLink class="main-link" to="/about">About us</NuxtLink>
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
        border-top: 1vw solid #3A4740;
        padding: 1.5vw;
        color: #fff;
    }
    #logo{
        height: 5vw;
    }
    .vertical-line{
        border-left: 0.1vw solid #fff;
        margin-right: 3.2vw;
        margin-top: 1.3%;
    }
    .links{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin: 0% 0% 1.3% 0%;
    }
    #left-footer{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1vw;
        flex: 3;
    }
    .footer-info{
        margin: 0% 0% 0% 2.5vw;
        font-size: 1vw;
    }
    #copyright{
        font-size: 0.6vw;
    }
    #home-link{
        margin-left: 2%;
    }
    .sub-links{
        display: flex;
        flex-direction: column;
        gap: 1vw;
        margin-top: 1.3%;
        flex: 1
    }
    .main-link{
        text-decoration: none;
        color: #fff;
        font-weight: bolder;
        font-size: 1.3vw;
    }
    .link{
        text-decoration: none;
        color: #fff;
        max-width: 9vw;
        font-size: 1.1vw;
        word-break: normal;
    }    
</style>
