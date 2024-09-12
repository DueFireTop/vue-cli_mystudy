<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <!-- <ul>
            <li v-for="(item, index) in listData" :key="index">{{ item }}</li> 
        </ul> -->

        <!-- 定义一个插槽，挖个坑，等组件的使用者填充内容 -->
        <slot>这里可以填一些默认值，当使用者没有传递具体结构时，我会出现</slot>
    </div>
</template>

<script>
export default {
    name:'TestCategory',
    props:['listData', 'title']
}
</script>

<style>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 200px;
    }

    h3{
        text-align: center;
        background-color: orange;
    }
</style>