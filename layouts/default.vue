<!--
    Default layout used by all the page
-->
<template>
    <div class = 'page'>
        <TheHeader />
        <ol
    vocab="http://schema.org/"
    typeof="BreadcrumbList"
  >
    <li property="itemListElement" typeof="ListItem">
      <NLink property="item" typeof="WebPage" to="/">
        <span property="name">Home</span>
        <span property="name">projects</span>
      </NLink>
      <meta property="position" content="1" />
    </li>
    <li
      v-for="(crumb, index) in crumbs"
      :key="index"
      property="itemListElement"
      typeof="ListItem"
    >
      <NLink property="item" typeof="WebPage" :to="crumb.path">
        <span property="name">{{
          $route.fullPath === crumb.path && title !== null ? title : crumb.title
        }}</span>
      </NLink>
      <meta property="position" :content="index + 2" />
    </li>
  </ol>
        <slot />
        <TheFooter />
    </div>
</template>

<script>
export default defineNuxtComponent({
    computed:{
        crumbs() {
      const fullPath = this.$route.fullPath
      const params = fullPath.startsWith('/')
        ? fullPath.substring(1).split('/')
        : fullPath.split('/')
      const crumbs = []
      let path = ''
      params.forEach((param, index) => {
        path = `${path}/${param}`
        const match = this.$router.resolve(path)
        if (match.name !== null) {
            crumbs.push(match.name)
        }
      })
      console.log(crumbs)
      return crumbs
    },
    }})

</script>
<style>
    .page {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: lightgoldenrodyellow;
        margin: 0;
    }
</style>