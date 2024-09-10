<template>
    <ul class="todo-main">
        <!-- 循环渲染 :todoItem="todoObj"表示传递给子组件-->
        <TodoListContentItem 
            v-for="todoObj in todoArr" 
            :key="todoObj.id" 
            :todoItem="todoObj" 
        />
    </ul>
    
</template>

<script>
import TodoListContentItem from './TodoListContentItem';

export default {
    name:'TodoListContent',
    components:{
        TodoListContentItem
    },
    props:['todoArr']
}
</script>

<style scoped>
    /*main*/
    .todo-main {
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }

    .todo-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
</style>