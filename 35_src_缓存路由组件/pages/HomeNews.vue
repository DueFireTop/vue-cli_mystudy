<template>
    <ul>
        <li>news001 <input type="text"></li>
        <li>news002 <input type="text"></li>
        <li>news003 <input type="text"></li>
    </ul>
</template>

<script>
export default {
    name:'HomeNews',
    components: {},
    methods: {
        
    },
    beforeDestroy() {
        console.log('news组件销毁了');
    }
}
</script>

<style>

</style>