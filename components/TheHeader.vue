<template>
    <header>
        <NuxtLink id="homepage-link" to="/" class="menu-link">
                <img id="web-logo" src="/_nuxt/assets/img/Website_logo.png" alt="Logo of the website">
                <!-- WEBSITE NAME TO BE MODIFIED -->
                <div id="website-name"> WEBSITE NAME </div>
        </NuxtLink>
        <nav>
            <NuxtLink to="/team" class="menu-link">Team</NuxtLink>
            <div class="dropdown">
                <NuxtLink to="/areas" class="menu-link">Areas</NuxtLink>
                <div class="dropdown-content">
                    <NuxtLink to="/areas/Food" class="sub-menu-link">Food</NuxtLink>
                    <NuxtLink to="/areas/IT" class="sub-menu-link">IT</NuxtLink>
                    <NuxtLink to="/areas/Health" class="sub-menu-link">Health</NuxtLink>
                </div>
            </div>
            <div class="dropdown">
                <NuxtLink to="/projects" class="menu-link">Projects</NuxtLink>
                <div class="dropdown-content">
                    <NuxtLink to="/projects/Food" class="sub-menu-link">Food Projects</NuxtLink>
                    <NuxtLink to="/projects/IT" class="sub-menu-link">IT Projects</NuxtLink>
                    <NuxtLink to="/projects/Health" class="sub-menu-link">Health Projects</NuxtLink>
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
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 22px;
    }

    #homepage-link{
        display: flex;
        flex-direction: row;
        align-items: center;

    }

    #web-logo{
        width: 90px;
        height: 90px;
        margin: 0px 20px 0px 20px;
    }

    h1 {
        font-size: 28px;
        color: #fff;
        margin: 0;
    }

    nav {
        display: flex;
        gap: 20px;
    }

    .dropdown {
    position: relative;
}

.dropdown-content {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    /*background-color: #8da0a4;*/
    padding: 10px;
    width: 200px;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    z-index: 999;
    background-color: rgba(141, 160, 164, 0.9);
    backdrop-filter: blur(2px);
}

.dropdown-content a {
    display: block;
    color: #fff;
    font-size: 20px;
    padding: 5px 10px;
    text-decoration: none;
    transition: background-color 0.3s ease;
}

.dropdown-content a:hover {
    background-color: #555;
}

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
