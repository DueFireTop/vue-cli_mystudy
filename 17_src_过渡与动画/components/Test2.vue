<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>

    <transition-group name="test" appear>
        <h1 v-show="!isShow" key="1">文本内容1</h1>
        <h1 v-show="isShow" key="2">文本内容2</h1>
    </transition-group>
  </div>
</template>

<script>
    export default {
        name:'MyTest2',
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

    

    /* 进入的起点 */
    .test-enter{
        transform: translateX(-100%);
    }

    /* 进入的终点, 离开的起点 */
    .test-enter-to, .test-leave{
        transform: translateX(0);
    }

    /* 离开的终点 */
    .test-leave-to{
        transform: translateX(100%);
    }

    /* 动画时间 */
    .test-enter-active, .test-leave-active{
        transition: 0.5s linear;
    }
    
</style>