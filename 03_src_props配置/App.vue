<template>
  <div>
    <MyStudent studentName="张三" studentGender="男"></MyStudent>
  </div>
</template>

<script>
    import MyStudent from './components/Student.vue'

    export default {
        name:'App',
        components: { 
            MyStudent 
        },
        
    }
</script>

<style>
h1{
    text-align: center;
}
</style>