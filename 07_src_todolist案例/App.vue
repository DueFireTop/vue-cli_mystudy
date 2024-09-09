<template>
  <body>

    <div id="root">
      <div class="todo-container">
        <div class="todo-wrap">
          <TodoListHeader :addTodo="addTodo"></TodoListHeader>

          <TodoListContent :todoArr="todoArr" 
          :checkTodo="checkTodo" 
          :deleteTodo="deleteTodo"></TodoListContent>

          <TodoListFooter :todoArr="todoArr" 
          :checkAll="checkAll" 
          :clearAllTodo="clearAllTodo"></TodoListFooter>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
    import TodoListHeader from './components/TodoListHeader';
    import TodoListContent from './components/TodoListContent';
    import TodoListFooter from './components/TodoListFooter';

    export default {
        name:'App',
        data() {
            return {
                todoArr:[
                    {
                        id: '001',
                        title: '吃饭',
                        isFinished: true
                    },
                    {
                        id: '002',
                        title: '睡觉',
                        isFinished: false
                    },
                    {
                        id: '003',
                        title: '打豆豆',
                        isFinished: false
                    }
                ]
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

          // 删除待办事项
          deleteTodo(id){
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
        components: { 
          TodoListHeader,
          TodoListContent,
          TodoListFooter
        },
        
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