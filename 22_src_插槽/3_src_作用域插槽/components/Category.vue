<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <slot :games="games" msg="hello"></slot>

    </div>
</template>

<script>
export default {
    name:'TestCategory',
    props:['title'],
    data() {
        return {
          games:['LOL', 'DNF', 'NF', 'NF2'],
        }
    },
}
</script>

<style>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }

    h3{
        text-align: center;
        background-color: orange;
    }
</style>