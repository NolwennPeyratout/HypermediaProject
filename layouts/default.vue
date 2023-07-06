<!--
    Default layout used by all the page
-->
<!--Source breadCrumbs : https://gist.github.com/nilocoelhojunior/522c6695c46a851671edf88d8551a79a-->
<template>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <div class = 'page'>
        <TheHeader />
        <ol class="breadcrumb">
          <li class="item">
            <nuxt-link :to="'/'" class="breadcrumb-item">
              Home
            </nuxt-link>
          </li>
          <li v-for="(item, i) in crumbs" :key="i" class="item">
            <nuxt-link :to="item.to" class="breadcrumb-item">
              {{ item.title }}
            </nuxt-link>
          </li>
        </ol>
        <slot />
        <TheFooter />
    </div>
</template>

<script>
export default defineNuxtComponent({
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
      top: 130px;
      left: 2.5%;
    }
    li {
      display: inline;
    }
    li:after {
      content: ' » ';
      display: inline;
      font-size: 0.9em;
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

</style>