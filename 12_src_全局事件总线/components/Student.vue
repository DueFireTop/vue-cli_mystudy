<template>
    <div class="demo-student">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ studentGender }}</h2>
        <button @click="sendStudentName2School">把学生名传递给MySchool组件</button>
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
        methods: {
            sendStudentName2School(){
                // 触发自定义事件sendStudentName，通过事件传递当前组件的name属性值
                this.$bus.$emit('sendStudentName', this.name)
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