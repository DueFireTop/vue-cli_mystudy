<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition appear>
        <h1 v-show="isShow" class="go">文本内容</h1>
    </transition>

    <transition name="test" appear>
        <h1 v-show="isShow" class="go">测试name属性</h1>
    </transition>

  </div>
</template>

<script>
    export default {
        name:'MyTest',
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

    .v-enter-active{
        animation: test 1s linear;
    }

    .v-leave-active{
        animation: test 1s linear reverse;
    }

    .test-enter-active{
        animation: test 1s linear;
    }

    .test-leave-active{
        animation: test 1s linear reverse;
    }

    @keyframes test {
        from{
            transform: translateX(-100%);
        } to{
            transform: translateX(0);
        }
    }
</style>