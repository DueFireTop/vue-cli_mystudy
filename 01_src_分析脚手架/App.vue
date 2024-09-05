<template>
    <div>
        <img src="./assets/logo.png">
        <School></School>
        <Student></Student>
    </div>
</template>

<script>

    // 导入组件
    import Student from './components/Student.vue'
    import School from './components/School.vue'

    export default {
        name:'App',
        components: { 
            Student, 
            School 
        },
    }
</script>

<style>

</style>