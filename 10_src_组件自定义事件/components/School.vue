<template>
    <div class="demo-school">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ schoolAddress }}</h2>
        
        <button @click="senSchoolNameToApp()">把学校名给App</button>
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
    props:['getSchoolName'],
    methods: {
        senSchoolNameToApp(){
            this.getSchoolName(this.name)
        }
    },
    
}
</script>

<style scoped>
.demo-school{
    background-color: rgb(5, 21, 247);
    font-size: large;
    color: rgba(0, 0, 0, 0.397);
    text-align: center;
    padding: 5px;
    margin-top: 10px; 
}
</style>