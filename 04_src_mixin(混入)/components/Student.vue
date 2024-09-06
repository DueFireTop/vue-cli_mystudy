<template>
    <div class="demo-student">
        <h2 @click="showName">学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ studentGender }}</h2>
        
    </div>
</template>

<script>

    // import {mixin1, mixin2} from '../mixin' // 局部混合：引入mixin
    export default {
        name: 'MyStudent',
        data() {
            return {
                name: '张三', 
                studentGender: '男'
            }
        },
        // mixins:[mixin1 ,mixin2] // 局部混合：注册mixin
        
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