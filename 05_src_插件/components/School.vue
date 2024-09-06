<template>
    <div class="demo-school">
        <h2>学校名称：{{ name | mySlice}}</h2> <!-- 测试全局过滤器 -->
        <h2>学校地址：{{ schoolAddress }}</h2>
        <button @click="test()">测试plugin的全局方法</button>
    </div>
</template>

<script>

export default {
    name: 'MYSchool',
    data() {
        return {
            name: '大声告诉萨夫是德国',
            schoolAddress: '北京市'
        }
    },
    methods:{
        // 测试全局方法
        test(){
            this.hello()
        }
    }
    
}
</script>

<style>
.demo-school{
    background-color: rgb(5, 21, 247);
    font-size: large;
    color: rgba(0, 0, 0, 0.397);
    text-align: center;
}
</style>