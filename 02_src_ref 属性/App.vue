<template>
  <div>
    <h1 v-text="msg" ref="myh1"></h1>
    <button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>

    <MySchool ref="mysch"></MySchool>
  </div>
</template>

<script>
    import MySchool from './components/School.vue'

    export default {
        name:'App',
        components: { 
                MySchool 
            },
        data() {
            return {
                msg: 'Hello Vue!'
            }
        },
        methods: {
            showDOM() {
                console.log(this.$refs.myh1); // 获取到DOM元素 
                console.log(this.$refs.btn); // 获取到DOM元素
                console.log(this.$refs.mysch); // 获取到组件实例
            }
        }
    }
</script>

<style>
h1{
    text-align: center;
}
</style>