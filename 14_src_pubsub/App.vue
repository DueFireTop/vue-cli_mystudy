<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <MySchool/>
    <MyStudent/>
  </div>
</template>

<script>
    import MyStudent from './components/Student.vue'
    import MySchool from './components/School.vue'

    export default {
        name:'App',
        data() {
          return {
            msg: 'Hello Vue!',
            studentName:''
          }
        },
        components: { 
            MyStudent,
            MySchool
        },
    }
</script>

<style>
.app{
    background-color: gray;
}

h1{
    text-align: center;
}
</style>