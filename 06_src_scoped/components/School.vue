<template>
    <div class="demo">
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
    
}
</script>

<style scoped>
.demo{
    background-color: rgb(5, 21, 247);
    font-size: large;
    color: rgba(0, 0, 0, 0.397);
    text-align: center;
}
</style>