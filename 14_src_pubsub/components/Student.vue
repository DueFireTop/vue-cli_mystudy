<template>
    <div class="demo-student">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ studentGender }}</h2>
        <button @click="sendStudentName2School">把学生名传递给MySchool组件</button>
    </div>
</template>

<script>

    import pubsub from 'pubsub-js';

    export default {
        name: 'MyStudent',
        data() {
            return {
                name: '张三', 
                studentGender: '男'
            }
        },
        methods: {
            sendStudentName2School(){
                pubsub.publish('hello', 666)
            }
        },
        
        
    }
</script>

<!-- scoped: 表示当前样式只对当前组件有效 -->
<style scoped>
.demo-student{
    background-color: #f00;
    font-size: large;
    color: blue;
    text-align: center;
    padding: 5px;
}
</style>