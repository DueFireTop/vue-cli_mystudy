<template>
    <h2>About内容</h2>
</template>

<script>
export default {
    name:'MyAbout',
    components: {},
    methods: {
        
    },
    // 监听路由，通过路由规则，经过该组件时被调用
    beforeRouteEnter(to, from, next) {
        console.log('&&beforeRouteEnter--MyAbout');
        console.log('to: ', to);
        console.log('from: ', from);
        console.log('next: ', next);

        if(to.meta.isAuth){
            // 判断localstorage中是否有school，有就放行，没有就弹出提示框
            if (localStorage.getItem('school') === 'haha'){
                
                next() // next()放行，next(false)取消导航，next('/path')跳转到指定路由
            } else {
                alert('学校名不对，无权访问')
            }
        } else{
            next()
        }
        next();
    },
    // 离开路由，通过路由规则，离开该组件时被调用
    beforeRouteLeave(to, from, next) {
        console.log('&&beforeRouteLeave--MyAbout');
        console.log('to: ', to);
        console.log('from: ', from);
        console.log('next: ', next);
        next();
    },
}
</script>

<style>

</style>