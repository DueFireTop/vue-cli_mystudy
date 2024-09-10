<template>
    <li>
        <label>
            <input type="checkbox" :checked="todoItem.isFinished" @click="handleCheckbox(todoItem.id)" />

            <!-- 不建议直接用v-model修改props中的对象 -->
            <!-- <input type="checkbox" v-model="todoItem.isFinished" /> -->

            <span>{{ todoItem.title }}</span>
        </label>
        
        <button class="btn btn-danger" @click="deleteItem(todoItem.id)">删除</button>
        <button class="btn btn-danger" @click="editItem(todoItem.id)">编辑</button>
    </li>
</template>

<script>

import pubsub from 'pubsub-js';

export default {
    name:'TodoListContentItem',
    props:['todoItem'], // 接收父组件传递的数据
    methods: {
        // 勾选或取消勾选待办事项
        handleCheckbox(id){
            // this.checkTodo(id)
            this.$bus.$emit('checkTodo', id)
        },
        // 删除待办事项
        deleteItem(id){
            if(confirm('确定删除吗？')) {
                // this.deleteTodo(id)
                // this.$bus.$emit('deleteTodo', id)
                pubsub.publish('deleteTodo', id)
            }
        },
        // 编辑待办事项
        editItem(id){
            console.log('编辑', id)
        }
    },

}
</script>

<style scoped>
    /*item*/
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        /* display: inline-block; 使按钮垂直居中 */
        margin-top: 3px;
        margin-left: 5px; 
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }

    /* 鼠标移入高亮 */
    li:hover {
        background-color: #ddd;
    }

    /* 鼠标移入，显示删除按钮 */
    li:hover button{
        display: block;
    }
    
</style>