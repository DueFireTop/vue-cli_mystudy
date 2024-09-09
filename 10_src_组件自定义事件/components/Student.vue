<template>
    <div class="demo-student">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ studentGender }}</h2>
        <button @click='senStudentNameToApp'>把学生名传递给App</button>
        <button @click="bindDemoCustomEvent">绑定自定义事件(demoCustomEvent)</button>
        <button @click="unbindMyCustomEvent">解绑myCustomEvent事件</button>
        <button @click="unbindAllCustomEvent">解绑所有事件</button>
        <button @click="destoryMyStudentVC">销毁MyStudent实例对象(vc)</button>
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
            senStudentNameToApp(){
                // 触发 Student 实例身上的 myCustomEvent 自定义事件，并传递Student中的 name 数据
                this.$emit('myCustomEvent', this.name)
                
            },
            bindDemoCustomEvent(){
                this.$emit('demoCustomEvent')
            },
            unbindMyCustomEvent(){
                // 解绑 myCustomEvent 事件
                this.$off('myCustomEvent') // 解绑一个自定义事件
                
            },
            unbindAllCustomEvent(){
                // this.$off(['myCustomEvent', 'demoCustomEvent']) //解绑多个自定义事件
                this.$off() // 解绑所有自定义事件
            },
            destoryMyStudentVC(){
                //销毁了当前的MyStudent组件实例
                // 销毁后所有MyStudent实例的自定义事件都会被销毁，全都不奏效了
                // 原生的事件不受影响
                this.$destroy() 
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