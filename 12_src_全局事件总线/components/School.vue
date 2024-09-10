<template>
    <div class="demo-school">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ schoolAddress }}</h2>
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
    mounted() {
        // 监听sendStudentName事件
        // 当该事件被触发并传递参数 name 时，会执行回调函数，打印出包含 name 的日志信息
        // 这通常用于组件间通信，不直接父子关系的组件可通过 $bus 进行通信。
        this.$bus.$on('sendStudentName', (name)=>{
            console.log('我是school组件, 接收到了数据', name)
        })
    },
    beforeDestroy() {
        this.$bus.$off('sendStudentName')
    },
    
}
</script>

<style scoped>
.demo-school{
    background-color: rgb(5, 21, 247);
    font-size: large;
    color: rgba(0, 0, 0, 0.397);
    text-align: center;
    padding: 5px;
    margin-top: 10px; 
}
</style>