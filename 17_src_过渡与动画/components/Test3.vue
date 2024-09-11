<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>

    <transition-group 
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__swing"  
        leave-active-class="animate__backOutUp"
    >
        <h1 v-show="!isShow" key="1">文本内容1</h1>
        <h1 v-show="isShow" key="2">文本内容2</h1>
    </transition-group>
  </div>
</template>

<script>
    import 'animate.css'

    export default {
        name:'MyTest3',
        data() {
            return {
                isShow:true
            }
        },
    }
</script>

<style scoped>
    h1{
        background-color: orange;
        text-align: center;
    }

    
</style>