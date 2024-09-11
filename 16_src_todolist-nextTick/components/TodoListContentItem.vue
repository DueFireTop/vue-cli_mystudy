<template>
    <li>
        <label>
            <input type="checkbox" :checked="todoItem.isFinished" @click="handleCheckbox(todoItem.id)" />

            <!-- 不建议直接用v-model修改props中的对象 -->
            <!-- <input type="checkbox" v-model="todoItem.isFinished" /> -->
 
            <span v-show="!todoItem.isEdit">{{ todoItem.title }}</span>
            
            <input v-show="todoItem.isEdit" type="text" 
            :value="todoItem.title"
            @blur="handleBlur(todoItem, $event)"
            ref="inputTitle"> 
        </label>
        
        <button class="btn btn-danger" @click="deleteItem(todoItem.id)">删除</button>
        <button class="btn btn-edit" v-show="!todoItem.isEdit" @click="editItem(todoItem)">编辑</button>
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
        editItem(item){
            console.log('编辑', item)
            // item.isEdit = true

            // 判断是否已经存在isEdit这个属性，如果存在就修改，不存在就添加
            if ('isEdit' in item){
                console.log('已经存在isEdit')
                item.isEdit = true
            }else {
                console.log('不存在isEdit')
                this.$set(item, 'isEdit', true)
            }

            // 在DOM更新完成后，将输入框的焦点设置为标题输入框
            this.$nextTick(() => {
                this.$refs.inputTitle.focus()
            })

            // 在组件加载后的一段时间内，让input元素获得焦点
            // setTimeout(() => {
            //     this.$refs.inputTitle.focus()
            // }, );
        },
        
        /**
         * 输入框失去焦点，修改待办事项(真正执行修改逻辑)
         * @param item 当前待办事项对象
         * @param event 失去焦点的input元素
         */
        handleBlur(item, event){
            item.isEdit = false,
            console.log('失去焦点', item, event)
            if (!event.target.value){
                return alert('输入不能为空')
            } else{
                this.$bus.$emit('updateTodoItem', item.id, event.target.value)
            }
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