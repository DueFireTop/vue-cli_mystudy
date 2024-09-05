<template>
    <div class="demo-student">
        <h2>学生姓名：{{ studentName }}</h2>
        <h2>学生性别：{{ studentGender }}</h2>
        <h2>学生年龄：{{ myAge }}</h2>
        <button @click="updateStudentAge">修改年龄</button>
    </div>
</template>

<script>
export default {
    name: 'MyStudent',
    data() {
        return {
            myAge:this.studentAge
        }
    },
    // props:['studentName', 'studentGender', 'studentAge'] // 接收父组件传递的属性（简单接收）

    // 接收父组件传递的属性（复杂接收），对类型进行限制
    // props:{
    //     studentName: String,
    //     studentGender: String,
    //     studentAge: Number
    // }

    // 接收父组件传递的属性（复杂接收），对类型进行限制，对默认值进行设置
    props:{
        studentName: {
            type: String, // 类型
            required: true, // 是否为必传参数
        },
        studentGender: {
            type: String,
            default: 'default gender' // 默认值
        },
        studentAge: {
            type: Number,
            default: 99
        }
    },
    methods: {
        updateStudentAge(){
            this.myAge = this.myAge+1
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