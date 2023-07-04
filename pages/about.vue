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
                <div id="story">
                    <div id="story-title"><h1>STORY</h1></div>
                    <div id="story-text">
                        hfds dfjnkjg kfjdgjf jgj dnjk gnkjsn jkg  skjg dngjkf nds kjg fnkgnd  lgnkj dngk jsn gjkl
                    </div>
                </div>
                <div id="follow">
                    <h1>Follow us</h1>
                    <div id="icones">
                        <img id=icone-follow src="../assets/img/icone/fb.png" alt="Icone of Facebook">
                        <img id=icone-follow src="../assets/img/icone/twitter.png" alt="Icone of Twitter">
                        <img id=icone-follow src="../assets/img/icone/linkedIn.png" alt="Icone of LinkedIn">
                    </div>
                </div>
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
        height: 1060px;
    }
    #about-left{
        background-color: #3A4740;
        width:30%;
        height: 1000px;
        padding-top: 60px;
    }
    #story{
        display: flex;
        width: 80%;
        margin: 20% 10%;
        gap:8%;
    }
    #story-title{
        width: 40%;
    }
    #story-text{
        width:60%;
        color:white;
    }
    #follow{
        width: 90%;
        margin-left: 10%;
        display:flex;
        gap:8%;
        margin-top: 400px;
    }
    #icones{
        display: flex;
        gap:10px;
    }

    #icone-follow{
        width:50px;
        height: 50px;

    }
</style>