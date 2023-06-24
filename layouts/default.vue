<!--
    Default layout used by all the page
-->
<!--Source breadCrumbs : https://gist.github.com/nilocoelhojunior/522c6695c46a851671edf88d8551a79a-->
<template>
    <div class = 'page'>
        <TheHeader />
        <ol class="breadcrumb">
          <li class="item">
            <nuxt-link :to="'/'" class="breadcrump-item">
              Home
            </nuxt-link>
          </li>
          <li v-for="(item, i) in crumbs" :key="i" class="item">
            <nuxt-link :to="item.to" class="breadcrump-item">
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
      console.log(breadcrumbs)
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
        background-color: lightgoldenrodyellow;
        margin: 0;
    }
    ol {
      list-style: none;
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
    .breadcrump-item{
      text-decoration: none;
    }
    .breadcrump-item:hover{
      text-decoration: underline;
    }
</style>