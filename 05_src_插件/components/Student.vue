<template>
    <div class="demo-student">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ studentGender }}</h2>
        <input v-fbind:value="name" /> <!-- 测试自定义指令 -->
    </div>
</template>

<script>

    export default {
        name: 'MyStudent',
        data() {
            return {
                name: '张三', 
                studentGender: '男'
            }
        },
        
    }
</script>

<style>
.demo-student{
    background-color: #f00;
    font-size: large;
    color: blue;
    text-align: center;
}
</style>