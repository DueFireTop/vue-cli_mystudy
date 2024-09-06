<template>
  <div>
    <MyStudent></MyStudent>
    <hr>
    <MySchool></MySchool>
  </div>
</template>

<script>
    import MyStudent from './components/Student.vue'
    import MySchool from './components/School.vue'

    export default {
        name:'App',
        components: { 
            MyStudent,
            MySchool
        },
        
    }
</script>

<style>
h1{
    text-align: center;
}
</style>