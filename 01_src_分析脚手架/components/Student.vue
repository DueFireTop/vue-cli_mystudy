<!-- 组件的结构 -->
<template>
     <div class="demo-student">
        <h2>学术姓名：{{ studentName }}</h2>
        <h2>学生年龄：{{ studentAge }}</h2>
     </div>
</template>

<!-- 组件交互相关的代码 -->
<script>
    export default {
        name: 'MyStudent',
        data() {
            return {
                studentName: 'my name',
                studentAge: 19
            }
        }
    }
</script>

<!-- 组件的样式 -->
<style>
    .demo-student {
        background-color: blue;
    }
</style>