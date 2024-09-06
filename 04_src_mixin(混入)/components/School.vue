<template>
    <div class="demo-school">
        <h2 @click="showName">学校名称：{{ name }}</h2>
        <h2>学校地址：{{ schoolAddress }}</h2>
        
    </div>
</template>

<script>
// import {mixin1, mixin2} from '../mixin'
export default {
    name: 'MYSchool',
    data() {
        return {
            name: '清华大学',
            schoolAddress: '北京市'
        }
    },
    // mixins:[mixin1, mixin2]
    
}
</script>

<style>
.demo-school{
    background-color: rgb(5, 21, 247);
    font-size: large;
    color: rgba(0, 0, 0, 0.397);
    text-align: center;
}
</style>