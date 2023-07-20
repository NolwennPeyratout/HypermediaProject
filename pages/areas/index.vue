<template>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <main>
      <div id="AreaTop">
        <h1 id="area-page-title">Our working areas</h1>
        <p id="areas-page-description">On this page, you will find a comprehensive overview of our various working areas, each meticulously designed to support, nurture, and propel groundbreaking ideas and ambitious entrepreneurs forward. We understand that innovation knows no bounds, and we are committed to providing a diverse range of resources and expertise to fuel the success of ventures across industries. Whether you're an entrepreneur seeking funding or a startup enthusiast looking to explore the frontiers of innovation, our working areas offer a wealth of opportunities.</p>
      </div>
      <div id="areas-container">
        <div v-for="area in areas" :key="area.name">
        <CircleContainer
          :title="area.name"
          :link="'/areas/' + area.name"
          :img-url="'~/assets/img/' + area.name + '_area/'+ area.name + '1.jpg'"
        />
        </div>
      </div>

    </main>
  </template>
  
  <script setup>
  
  /* Data to be displayed is retrieved here */
  const route = useRoute();
  const {data: areas} = await fetchDataFromDatabase(); 
  
  async function fetchDataFromDatabase() {
    const response = await fetch('/api/areas');
    const data = await response.json();
    return data;
  }
  </script>
  
  
  
  

<style>    

    #AreaTop
    {
        width: 100%;
        margin: 4% 0% 1% 5%;
    }
    #area-page-title{
        font-weight: bolder;
        color: #202622;
        text-align: start;
        font-size: 4.5vw;
    }
    #areas-page-description
    {
        color: #202622;
        text-align: justify;
        margin-top: 1%;
        margin-block-end: 0%;
        margin-inline-end: 5%;
        font-size: 1.2vw;
    }
    #areas-container
    {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        gap: 20px;
        background-color: #5b7470;
        margin-bottom: 2%;
        width: 95%;
    }

    .circle-container .title-center {
        color: white;
        font-size: 26px;
        font-weight: bold;
    }

    /* Page layout made responsive. In this block the settings are set for screens up to 700px wide */
    @media only screen and (max-width: 700px) {

        #AreaTop{
            margin-top: 7%;
        }
        #areas-page-description{
            font-size: 1.6vw;
        }
        #area-page-title{
            font-size: 5vw;
        }
        #areas-container #circle-container .circle{
            width: 150px;
            height: 150px;

        }
        #areas-container #circle-container {
            margin:20px 10px ;
        }
        #areas-container {
            display: flex;
            flex-direction: row;
            width: 100%;
            margin-bottom: 2%;
            padding-top: 10px;
        }
    }

    /* Page layout made responsive. In this block the settings are set for screens up to 500px wide */
    @media only screen and (max-width: 500px) {
        #area-page-title {
            position: relative;
            font-size: 5.5vw;
        }

        .circle-container .title-center{
            font-size: 3vw;
        }

        #areas-page-description {
            font-size: 2.5vw;
            margin-inline-end: 5%;
        }
        #AreaTop{
            margin-top: 8%;
        }
        
    }

    /* Page layout made responsive. In this block the settings are set for screens up to 400px wide */
    @media only screen and (max-width: 400px) {
        #areas-container #circle-container .circle{
            width: 100px;
            height: 100px;

        }
        #AreaTop{
            margin-top: 9%;
            margin-bottom: 2%;
        }

        #area-page-title{
            font-size: initial;
        }
        #AreaTop{
            margin-top: 10%;
        }
    }
    


</style>