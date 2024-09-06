<template>
    <div class="demo">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ studentGender }}</h2>
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

<!-- scoped: 表示当前样式只对当前组件有效 -->
<style scoped>
.demo{
    background-color: #f00;
    font-size: large;
    color: blue;
    text-align: center;
}
</style>