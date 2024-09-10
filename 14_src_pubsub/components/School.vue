<template>
    <div class="demo-school">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ schoolAddress }}</h2>
    </div>
</template>

<script>

import pubsub from 'pubsub-js';

export default {
    name: 'MYSchool',
    data() {
        return {
            name: '大声告诉萨夫是德国',
            schoolAddress: '北京市'
        }
    },
    methods: {
        demoFunction(msgName, data){
            console.log('有人发布了消息', msgName, data)
            console.log(this) // this是当前组件
        }
    },
    mounted(){
        // this.pubID = pubsub.subscribe('hello', function (msgName, data) {
        //     console.log('有人发布了消息', msgName, data)
        //     console.log(this) // undefined
        // })

        // this.pubID = pubsub.subscribe('hello', (msgName, data)=>{
        //     console.log('有人发布了消息', msgName, data)
        //     console.log(this) // this指向当前组件
        // })

        this.pubID = pubsub.subscribe('hello', this.demoFunction)
    },
    beforeDestroy(){
        pubsub.unsubscribe(this.pubID)
    }
    
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