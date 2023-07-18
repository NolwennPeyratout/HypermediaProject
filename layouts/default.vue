<!--
    Default layout used by all the page
-->
<!--Source breadCrumbs : https://gist.github.com/nilocoelhojunior/522c6695c46a851671edf88d8551a79a-->
<template>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <div class = 'page'>
        <TheHeader />
        <ol class="breadcrumb">
          <li v-for="(item, i) in crumbs" :key="i" class="item">
            <nuxt-link  :to="item.to" class="breadcrumb-item">
              {{ formattedName(item.title) }}
            </nuxt-link>
          </li>
        </ol>
        <slot />
        <TheFooter />
    </div>
</template>

<script>
export default defineNuxtComponent({
  methods: {
    formattedName(item) {
      return item.replace(/\+/g, " ");
    }
  },
    computed:{
    crumbs () {
      const pathArray = this.$route.path.split('/')
      pathArray.shift()
      const breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        if (path) {
        breadcrumbArray.push({
          to: breadcrumbArray[idx - 1]
            ? '/' + breadcrumbArray[idx - 1].title + '/' + path
            : '/' + path,
          title: path
        })}
        return breadcrumbArray
      }, [])
      return breadcrumbs
    }
    }
  })

</script>
<style>
    .page {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: white;
        margin: 0;
        font-family: 'Inter', sans-serif;
    }
    .breadcrumb {
      list-style: none;
      padding-left: 0%;
      z-index: 15;
      position: absolute;
      top: 8.3vw;
      left: 2.5%;
    }
    li {
      display: inline;
    }
    li:after {
      content: ' » ';
      display: inline;
      font-size: 0.9vw;
      color: #aaa;
      padding: 0 0.0725em 0 0.15em;
    }
    li:last-child:after {
      content: '';
    }
    li a {
      color: black;
    }
    .breadcrumb-item{
      text-decoration: none;
    }
    .breadcrumb-item:hover{
      text-decoration: underline;
    }

    @media only screen and (max-width: 700px) {

      .breadcrumb-item{
        font-size: small;
      }
      .footer-info{
          font-size: 1.5vw;
      }
      #copyright{
          font-size: 0.9vw;
      }
      .sub-links{
          gap: 1.2vw;
      }
      .main-link{
          font-size: 1.6vw;
      }
      .link{
          font-size: 1.4vw;
      } 

      /*HEADER RESPONSIVENESS SETTINGS*/

      header {
          font-size: 2vw;
      }

      #web-logo{
          height: 8vw;
      }

      nav {
          gap: 1.6vw;
      }
       .dropdown-content {
          padding: 0.8vw;
          width: 17vw;
      }

      .dropdown-content a {
          font-size: 1.9vw;
          padding: 0.4vw 0.8vw;
      }
    }

    @media only screen and (max-width: 500px){
      .footer-info{  
        margin: 0% 0% 0% 1.8vw;
        font-size: 1.8vw;
      }
      #copyright{
          font-size: 1.2vw;
      }
      .sub-links{
          gap: 1.2vw;
      }
      .main-link{
          font-size: 2vw;
      }
      .link{
          font-size: 1.8vw;
          max-width: 12vw;
      } 

      /*HEADER RESPONSIVENESS SETTINGS*/

      header {
          font-size: 2.7vw;
      }

      #web-logo{
          height: 10vw;
      }

      nav {
          gap: 1.9vw;
      }
       .dropdown-content {
          padding: 1vw;
          width: 21vw;
      }

      .dropdown-content a {
          font-size: 2.5vw;
          padding: 0.5vw 0.9vw;
      }

      .breadcrumb-item{
        font-size: x-small;
      }
      .breadcrumb{
        margin-top: 5%;
      }
    }

</style>