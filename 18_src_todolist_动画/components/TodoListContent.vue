<template>
    
    <ul class="todo-main">
        <transition-group name="todo" appear >
            <!-- 循环渲染 :todoItem="todoObj"表示传递给子组件-->
            <TodoListContentItem 
            v-for="todoObj in todoArr" 
            :key="todoObj.id" 
            :todoItem="todoObj" 
        />
        </transition-group>
        
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

    /* 进入的起点 */
    .todo-enter{
        transform: translateX(100%);
    }

    /* 进入的终点, 离开的起点 */
    .todo-enter-to, .todo-leave{
        transform: translateX(0);
    }

    /* 离开的终点 */
    .todo-leave-to{
        transform: translateX(100%);
    }

    /* 动画时间 */
    .todo-enter-active, todot-leave-active{
        transition: 0.5s linear;
    }
</style>