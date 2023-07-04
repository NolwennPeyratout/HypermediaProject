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
.homeRect-container {
  text-align: center;
  width: 20%;
  margin-bottom: 4%;
}

.homeRect {
  position: relative;
  display: inline-grid;
}

.homeRect img {
  width: 100%;
  object-fit: cover;
}

.topic-name {
  margin-top: 10px;
}

.topic-link {
  display: block;
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
}

#homeRect-title{
  margin-block-end: 0.1em;
  text-align: start;
  color: #252525;
  font-size: 2em;
  font-weight: bold;
  background-color: white;
  margin-top: 0%;
  padding: 3%;
}

.homeRect-link{
  text-decoration: none;
}
.homeRect-subtitle{
  text-align: start;
  background-color: white;
}

</style>  