<!--
    About us page
-->
<template>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

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
                        <p>
                            TechWell Ventures, led by CEO Mario Rossi, is a Milan-based venture capital firm renowned for its focus on innovation
                             and sustainability. Since its establishment in 2012, TechWell Ventures has expanded its reach worldwide, with satellite
                              offices in prominent cities like New York, London, and Singapore.
                        </p>
                        <p>
                            With a diversified investment strategy, TechWell Ventures actively invests in projects within the health, food, and IT sectors.
                             In the health sector, the firm supports biotech startups, medical device innovations, and digital health platforms,
                              aiming to enhance patient outcomes and promote accessible healthcare through data analytics and artificial intelligence.
                        </p>
                        <p>
                            In the food industry, TechWell Ventures seeks out companies championing sustainable farming practices, plant-based alternatives,
                             and innovative food technologies. By investing in startups that reduce food waste and create healthier, eco-friendly food
                              options, TechWell Ventures plays a vital role in shaping the future of sustainable food production.
                        </p>
                        <p>
                            TechWell Ventures also allocates resources to the IT sector, investing in startups at the forefront of disruptive technologies.
                             By supporting projects in artificial intelligence, machine learning, blockchain, and other cutting-edge innovations, Gaia
                              Investments contributes to reshaping industries, improving lives, and driving technological progress on a global scale.
                        </p>
                        <p>
                            Beyond financial backing, TechWell Ventures fosters long-term partnerships by offering mentorship and guidance to its portfolio
                             companies. This comprehensive support ensures the success and enduring impact of the projects they invest in.
                        </p>
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
        width:65%;
        min-height: 1060px;
    }
    #about-left{
        background-color: #3A4740;
        width:35%;
        min-height: 1000px;
        padding-top: 60px;
    }
    #story{
        display: flex;
        width: 80%;
        margin: 15% 7%;
        gap:8%;
    }
    #story-title{
        width: 35%;
    }
    #story-text{
        width:65%;
        color:white;
    }
    #follow{
        width: 90%;
        margin-left: 7%;
        display:flex;
        gap:8%;
        margin-top: 20%;
    }
    #icones{
        display: flex;
        gap:10px;
    }

    #icone-follow{
        width:50px;
        height: 50px;

    }
    #story-text p {
        margin-top: 0%;
        margin-bottom: 9%;
        text-align: justify;
    }
</style>