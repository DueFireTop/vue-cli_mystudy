<template>
    <ul>
        <!-- <li>消息编号：{{$route.params.id}}</li>
        <li>消息标题：{{$route.params.title}}</li> -->

        <li>消息编号：{{id}}</li>
        <li>消息标题：{{title}}</li>


        <!-- <li>a: {{ a }}</li>
        <li>b: {{ b }}</li> -->
    </ul>
</template>

<script>
export default {
    name:'HomeMessageDetail',
    // props: ['a', 'b'],
    props:['id', 'title'],
    components: {},
    methods: {
        
    },
    mounted() {
        console.log(this.$route);
    },
}
</script>

<style>

</style>