<template>
  <body>
    <div class="container">
      <HeaderSearch/>
      <ContentList/>
    </div>
  </body>
</template>

<script>

  import HeaderSearch from './components/HeaderSearch.vue';
  import ContentList from './components/ContentList.vue';

  export default {
      name:'App',
      components: {HeaderSearch, ContentList},
      methods: {
        
    }
  }
</script>
