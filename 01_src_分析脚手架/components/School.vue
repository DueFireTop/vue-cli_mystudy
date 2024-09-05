<!-- 组件的结构 -->
<template>
     <div class="demo">
        <h2>学校名称：{{ schoolName }}</h2>
        <h2>学校地址：{{ schoolAddress }}</h2>
        <button @click="showSchoolName">显示学校名称</button>"
     </div>
</template>

<!-- 组件交互相关的代码 -->
<script>
    export default {
        name: 'MySchool',
        data() {
            return {
                schoolName: 'NUC',
                schoolAddress: '北京'
            }
        },
        methods: {
            showSchoolName() {
                alert(this.schoolName)
            }
        },
    }
</script>

<!-- 组件的样式 -->
<style>
    .demo {
        background-color: orange;
    }
</style>