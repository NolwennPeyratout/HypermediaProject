<!--
    About us page
-->
<template>
    <!--
        Instead of having the two structures written directly on the page, it was preferred to use components as they had the same layout.
        This also allows to have a much cleaner and easy to read 'code'
    -->
    <main>
        <div id="main-content-about">
            <div id="about-left">

            </div> 
            <div id="about-right">
            </div>
    </div>
    </main>
</template>

<style>
    main {
        width: 100%;
    }
    #main-content-about{
        display:flex;
        width:100%;
    }
    #about-right{
        background-image: url('../assets/img/company.png');
        background-size: cover;
        background-position: center;
        width:70%;
        height: 1000px;
    }
    #about-left{
        background-color: #3A4740;
        width:30%;
        height: 1000px;
    }
</style>