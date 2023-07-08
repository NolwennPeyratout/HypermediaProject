<!--
    Header of the website to be displayed in all the pages (it can be considered a landmark)
    It is divided into two "zones": in the first on the left are displayed the company name and logo,
    while in the second on the right are displayed the links to all the pages of the website.
    
    Two of the five page links have a dropdown menu that opens when hovering on them and that
    displays the subpages links. 

    This component does not have props
-->

<template>
    <header>
        <!-- LEFT PART OF THE HEADER CONTAINING COMPANY LOGO/NAME-->
        <NuxtLink id="homepage-link" to="/" class="menu-link">
                <img id="web-logo" src="~/assets/img/CompanyLogoHeader.png" alt="Logo of the website">
        </NuxtLink>
        <!-- RIGHT PART OF THE HEADER CONTAINING WEBSITE PAGES LINKS-->
        <nav>
            <NuxtLink to="/team" class="menu-link">Team</NuxtLink>
            <!-- AREAS LINK OPENS A DROPDOWN MENU WHEN HOVERING ON IT-->
            <div class="dropdown">
                <NuxtLink to="/areas" class="menu-link">Areas</NuxtLink>
                <!-- SUBPAGES LINKS CONTAINED ON AREAS DROPDOWN MENU-->
                <div class="dropdown-content">
                    <NuxtLink to="/areas/Food" class="sub-menu-link">Food</NuxtLink>
                    <NuxtLink to="/areas/IT" class="sub-menu-link">IT</NuxtLink>
                    <NuxtLink to="/areas/Health" class="sub-menu-link">Health</NuxtLink>
                </div>
            </div>
            <!-- PROJECTS LINK OPENS A DROPDOWN MENU WHEN HOVERING ON IT-->
            <div class="dropdown">
                <NuxtLink to="/projects" class="menu-link">Projects</NuxtLink>
                <!-- SUBPAGES LINKS CONTAINED ON PROJECTS DROPDOWN MENU-->
                <div class="dropdown-content">
                    <NuxtLink to="/projects/Food" class="sub-menu-link">Food Projects</NuxtLink>
                    <NuxtLink to="/projects/IT" class="sub-menu-link">IT Projects</NuxtLink>
                    <NuxtLink to="/projects/Health" class="sub-menu-link">Health Projects</NuxtLink>
                    <NuxtLink to="/projects/MostRelevant" class="sub-menu-link">Most Relevant Projects</NuxtLink>
                </div>
            </div>
            <NuxtLink to="/about" class="menu-link">About us</NuxtLink>
            <NuxtLink to="/contact" class="menu-link">Contact us</NuxtLink>
        </nav>
    </header>
</template>

<style>
    header {
        background-color: #252525;
        padding: 1.3vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.5vw;
    }

    #homepage-link{
        display: flex;
        flex-direction: row;
        align-items: center;

    }

    #web-logo{
        height: 6vw;
        margin: 0vw 1.3vw 0vw 1.3vw;
    }

    h1 {
        font-size: 2vw;
        color: #fff;
        margin: 0;
    }

    nav {
        display: flex;
        gap: 1.3vw;
        margin-right: 2%;
    }

    .dropdown {
    position: relative;
}

/* DROPDOWN CONTENT DISPLAY MODE IS SET TO "NONE" WHEN THE MAIN LINK IS NOT HOVERED*/
.dropdown-content {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    /*background-color: #8da0a4;*/
    padding: 0.6vw;
    width: 13vw;
    border-radius: 0.2vw;
    box-shadow: 0 0.13vw 0.3vw rgba(0, 0, 0, 0.3);
    z-index: 999;
    background-color: rgba(141, 160, 164, 0.9);
    backdrop-filter: blur(0.13vw);
}

.dropdown-content a {
    display: block;
    color: #fff;
    font-size: 1.3vw;
    padding: 0.3vw 0.65vw;
    text-decoration: none;
    transition: background-color 0.3s ease;
}

.dropdown-content a:hover {
    background-color: #555;
}

/* DROPDOWN CONTENT IS SHOWED WHEN THE MOUSE HOVERS THE MAIN LINK*/
.dropdown:hover .dropdown-content {
    display: block;
}

.menu-link {
    color: white;
    text-decoration: none;
}

.sub-menu-link {
    color: white;
    font-weight: bold;
}

</style>
