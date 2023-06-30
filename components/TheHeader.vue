<template>
    <header>
        <h1>The Dog Shelter</h1>
        <nav>
            <NuxtLink to="/" class="menu-link">HOME</NuxtLink>
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
            <NuxtLink to="/dogs" class="menu-link">DOGS</NuxtLink>
            <NuxtLink to="/locations" class="menu-link">LOCATIONS</NuxtLink>
            <NuxtLink to="/about" class="menu-link">ABOUT US</NuxtLink>
            <NuxtLink to="/contact" class="menu-link">CONTACT US</NuxtLink>
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
        background-color: #252525;
        padding: 10px;
        width: 200px;
        border-radius: 4px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
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

    .dropdown:hover > a {
        color: #fff;
    }

    .dropdown-content > a:first-child {
        font-weight: bold;
    }

    .menu-link {
        color: #FF7F00;
    }

    .sub-menu-link {
        color: #FFBB33;
    }
</style>
