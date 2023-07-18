<!-- Component used in the single area pages
  It is a rectangular container for an image and few information,
  which are used to display the image of a project regarding a certain area and its information.

PROPS:
    - title: project name to be displayed below the image
    - link: link to the corresponding project page 
    - imgUrl: path to the displayed image  
    - product: product offered by the displayed project  
    - date: date of the displayed project
    - location: location of the displayed project  -->

    <template>
      <div class="project-card">
        <NuxtLink :to="link" class="link-box">
          <div class="proj-card">
            <div class="grid-container">
              <div class="img-container">
                <img :src="imageUrl" alt="Immagine del progetto" />
              </div>
              <div class="text-container">
                <div class="info-cont">
                  <p id="card-title">{{ modifiedTitle }}</p>
                  <p id="card-product">Product / Service: {{ product }}</p>
                  <p id="card-date">Date: {{ date }}</p>
                  <p id="card-location">Location: {{ location }}</p>
                </div>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </template>
    
    <script setup>
    import { defineProps, computed } from 'vue';
    
    const props = defineProps(['title', 'imgUrl', 'link', 'product', 'date', 'location']);
    const modifiedTitle = computed(() => props.title.replace(/\+/g, ' '));
    const u = "" + props.imgUrl;
    const imageUrl = new URL('~/assets/img/projects/BioVegan+Smoothies1.jpg', import.meta.url);
      
    </script>
    

<style>

  .proj-card {
    display: flex;
    align-items: center;
    background-color: transparent;
    padding: 1vw;
    width: fit-content;
    height: fit-content;
  }

  .grid-container {
    display: grid;
    grid-template-columns: auto 30vw;
    grid-column-gap: 2vw;
    background-color: transparent;
  }

  .text-container {
    background-color: #c0cdd0;
    border-radius: 0.5vw 0.5vw 10vw 0.5vw;
  }
  .info-cont{
    margin-left: 2vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10%;
  }

  .project-card {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 5%;
  }
  
  .project-card:hover #card-title{
    text-decoration: underline;
  }

  .img-container {
    display: flex;
    justify-content: center;
    padding: 0px;
    aspect-ratio: 16/9;
    width: 30vw;
    height: auto;
    margin-left: 0;
    margin-right: 0;
    border-radius: 0.5vw;
  }

  .img-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5vw;
    border: 2px solid rgba(141, 160, 164, 0.9);
  }

  #card-title {
    font-size: 3vw;
    text-align: left;
    margin: 0;
    font-weight: bold;
    color: #3a4740;
    background-color: transparent;
  }

  #card-product,
  #card-date,
  #card-location {
    margin: 0 0 0 0;
    color: #3a4740;
    font-size: 1.2vw;
    text-align: left;
  }

  .link-box {
    text-decoration: none;
  }
</style>



