<template>
  <body>
    <div>

      <NumCount></NumCount>
      <hr>
      <MyPerson></MyPerson>

    </div>
  </body>
</template>

<script>
  import NumCount from './components/NumCount.vue'
  import MyPerson from './components/MyPerson.vue'

  export default {
      name:'App',
      components: {NumCount, MyPerson},
      methods: {
        
    }
  }
</script>

