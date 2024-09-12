<template>
  <body>
    <div class="container">

      <TestCategory title="game">
        <template scope="games">
          <ul>
            <li v-for="(item, index) in games.games" :key="index">{{ item }}</li> 
          </ul>
          <h2>{{games.msg}}</h2>
        </template>
      </TestCategory>

      <TestCategory title="game">
        <template scope={games}>
          <ol>
            <li style="color: red" v-for="(item, index) in games" :key="index">{{ item }}</li> 
          </ol>
          
        </template>
        
      </TestCategory>

      <TestCategory title="game">
        <template slot-scope={games}>
          <h4>
            <li v-for="(item, index) in games" :key="index">{{ item }}</li> 
          </h4>
        </template>
        
      </TestCategory>

    </div>
  </body>
</template>

<script>
  import TestCategory from './components/Category'

  export default {
      name:'App',
      components: {TestCategory},
      methods: {
        
    }
  }
</script>

<style scoped>
  .container, .foot{
    display: flex;
    justify-content: space-around;
  }

  img{
    width: 100%;
  }

  video{
    width: 100%;
  }
</style>
