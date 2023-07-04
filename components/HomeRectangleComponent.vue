<!-- TO BE FINISHED -->
<template>
  <div class="homeRect-container">
    <NuxtLink :to="link" class="homeRect-link">
      <div class="homeRect">
          <img class="homeRect-img" :src="imgUrl" :alt="title">
          <p id="homeRect-title">{{ title }}</p>
          <p class="homeRect-subtitle">{{ subtitle }}</p>
        </div>
    </NuxtLink>

  </div>
</template>


<script setup>
  const props = defineProps(['title', 'link','imgUrl','subtitle'])
</script>

<style>

.homeRect{
    display: flex;
    padding: 0.5%;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    background-color: white;
}

.homeRect img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
}

#homeRect-title{
  text-align: start;
  color: #252525;
  font-size: 1.7em;
  font-weight: bold;
  background-color: white;
  margin: 5% 0% 3% 3%;
  text-decoration: none;
}

.homeRect-link{
  text-decoration: none;
  color: #252525;
}
.homeRect-subtitle{
  text-align: start;
  font-size: 1.1em;
  text-decoration: none;
  background-color: white;
  margin: 0% 0% 3% 3%;
}

</style>  