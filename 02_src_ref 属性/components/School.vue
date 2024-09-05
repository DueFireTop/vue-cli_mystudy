<template>
    <div class="demo-school">
        <h2>学校名称：{{ schoolName }}</h2>
        <h2>学校地址：{{ schoolAddress }}</h2>
    </div>
</template>

<script>
export default {
    name: 'MySchool',
    data() {
        return {
            schoolName: 'my school name',
            schoolAddress: '北京昌平'
        }
    }
}
</script>

<style>
.demo-school{
    background-color: #f00;
    font-size: large;
    color: blue;
    text-align: center;
}
</style>