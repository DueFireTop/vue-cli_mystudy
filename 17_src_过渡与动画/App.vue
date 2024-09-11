<template>
  <body>

    <div id="root">
      <MyTest/><hr>
      
      <MyTest2/><hr>

      <MyTest3/>
    </div>
  </body>
</template>

<script>
  import MyTest from './components/Test.vue'
  import MyTest2 from './components/Test2.vue'
  import MyTest3 from './components/Test3.vue'

  export default {
      name:'App',
      data() {
          return {
              
          }
      },
      components: { 
        MyTest,
        MyTest2,
        MyTest3
      }
      
  }
</script>

<style>
  

</style>