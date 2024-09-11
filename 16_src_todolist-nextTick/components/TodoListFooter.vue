<template>
    <div class="todo-footer" v-show="total">
        <label>
            <!-- <input type="checkbox" :checked="isAll" @change="changeAll"/> -->

            <input type="checkbox" v-model="isAll"/>
        </label>
        <span>
            <span>已完成{{ sumFinished }}</span> / 全部{{ total }}
        </span>
        <button class="btn btn-danger" @click="clearAllFinished">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name:'TodoListFooter',
    props:['todoArr'],
    methods: {
        // 清除已完成任务
        clearAllFinished(){
            if(this.sumFinished === 0){
                return alert('没有已完成的任务')
            } else{
                if(confirm('确定删除吗？')) {
                    this.$emit('clearAllTodo')
                }
            }
            
        },
        // 全选或取消全选
        // changeAll(e){
        //     this.checkAll(e.target.checked)
        // }
    },
    computed: {
        // 全部任务数
        total(){
            return this.todoArr.length
        },
        // 已完成的任务数
        sumFinished() {

            // 使用filter
            return this.todoArr.filter(item => item.isFinished).length

            // 使用reduce
            // return this.todoArr.reduce((pre, current)=>{
            //     return pre + (current.isFinished ? 1 : 0)
            // }, 0)

            // for循环
            // let i = 0
            // this.todoArr.forEach(element => {
            //     if(element.isFinished){
            //         i++
            //     }
            // });
            // return i
        },
        // 是否全选
        // isAll(){
        //     // 使用some
        //     // return this.todoArr.some(item => !item.isFinished)

        //     return this.total === this.sumFinished && this.total > 0

        //     // 使用every
        //     // return this.todoArr.every(item => item.isFinished)
        // }

        // 计算属性的setter和getter完整版写法，这样才可以v-model进行双向绑定
        isAll:{
            get(){
                return this.total === this.sumFinished && this.total > 0
            },
            set(value){
                this.$emit('checkAll', value)
            }
        }
    }
}
</script>

<style scoped>
    /*footer*/
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }

    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }

    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }

    .todo-footer button {
        float: right;
        margin-top: 5px;
    }
</style>