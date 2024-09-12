// 该文件用于创建vuex中最核心的store

import Vue from 'vue'

// 引入vuex
import Vuex from 'vuex'





// // 创建store
// const store = new Vuex.Store({
//     actions,
//     mutations,
//     state,
//     getters
// })

// // 导出store
// export default store

// 引入vue
Vue.use(Vuex)

export default new Vuex.Store({
    // actions: 用于响应组件中的动作
    actions: {
        /**
         * 
         * @param {Object} context - 上下文对象，通常包含state、commit等方法
         * @param {number} value - 需要增加的数值
         */
        addNum(context, value) {
            // 提交一个名为addNum的mutation，携带value参数
            // 通过这种方式来更新状态，保证状态管理的规范化和可追溯性
            context.commit('ADDNUM', value) // 提交mutations
        },
        downNum(context, value){
            context.commit('DOWNNUM', value)
        },
        addNumOdd(context, value){
            if(context.state.sumNum % 2){
                console.log('addNumOdd');
                context.commit('ADDNUM', value)
            }
        },
        addNumWait(context, value){
            setTimeout(() => {
                context.commit('ADDNUM', value)
            }, 500);
        }
    }, 
    
    mutations: {
        ADDNUM(state, value){
            state.sumNum += value
        },
        DOWNNUM(state, value){
            state.sumNum -= value
        },
        ADD_PERSON(state, value){
            state.personList.unshift(value)
        },
        

    }, // mutations: 用于操作数据(state)

    // state: 用于存储数据
    state: {
        sumNum: 0, // 当前求和
        school: 'my school',
        subject: 'NLP',
        personList: [
            { id: '001', name: 'cui' }
        ]
    }, 

    // getters: 用于将state中的数据进行加工
    getters: {
        bigSum(state){
            return state.sumNum * 10
        }
    }, 

    modules: {}, // 用于模块化
})