<template>
  <body>

    <div id="root">
      <div class="todo-container">
        <div class="todo-wrap">
          <TodoListHeader @addTodo="addTodo"></TodoListHeader>

          <TodoListContent :todoArr="todoArr" ></TodoListContent>

          <TodoListFooter :todoArr="todoArr" 
          @checkAll="checkAll" 
          @clearAllTodo="clearAllTodo"></TodoListFooter>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
    import pubsub from 'pubsub-js';


    import TodoListHeader from './components/TodoListHeader';
    import TodoListContent from './components/TodoListContent';
    import TodoListFooter from './components/TodoListFooter';


    export default {
        name:'App',
        data() {
            return {
                todoArr: JSON.parse(localStorage.getItem('todoArr')) || []
            }
        },
        methods: {
          // 添加一个待办事项
          addTodo(todoObj){
            console.log('父组件接收到子组件传来的值', todoObj)
            this.todoArr.unshift(todoObj)
          },

          // 选中或取消待办事项
          checkTodo(id){
            this.todoArr.forEach(item => {
              if(item.id === id){
                item.isFinished = !item.isFinished
              }
            })
          },
          updateTodoItem(id, title){
            this.todoArr.forEach(item => {
              if(item.id === id){
                item.title = title
              }
            })
          },

          // 删除待办事项
          // _占位msgName
          deleteTodo(_, id){
            // 删除数组中的元素
            this.todoArr = this.todoArr.filter(
              (item) => {
                return item.id !== id
              })
          },
          // 全选或全不选
          checkAll(isFinished){
            this.todoArr.forEach(item => {
              item.isFinished = isFinished
            })
          },
          // 清除已完成
          clearAllTodo(){
            this.todoArr = this.todoArr.filter(
              (item) => {
                return !item.isFinished
              })
          }
        },
        watch: {
          // todoArr(value){
          //   localStorage.setItem('todoArr', JSON.stringify(value))
          // }
          todoArr:{
            deep:true, // 深度监听
            handler(value){
              localStorage.setItem('todoArr', JSON.stringify(value)) // 监听todoArr的变化
            },
          }
        },
        components: { 
          TodoListHeader,
          TodoListContent,
          TodoListFooter
        },
        mounted() {
          this.$bus.$on('checkTodo', this.checkTodo)
          // this.$bus.$on('deleteTodo', this.deleteTodo)
          this.$bus.$on('updateTodoItem', this.updateTodoItem)

          this.pubID = pubsub.subscribe('deleteTodo', this.deleteTodo)
        },
        beforeDestroy(){
          this.$bus.$off('checkTodo')
          pubsub.unsubscribe(this.pubID)
          this.$bus.$off('updateTodoItem')
        }
        
    }
</script>

<style>
  /*base*/
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-edit {
    color: #fff;
    background-color: skyblue;
    border: 1px solid rgb(15, 60, 78);
    /* margin-right: 5px; */
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

</style>