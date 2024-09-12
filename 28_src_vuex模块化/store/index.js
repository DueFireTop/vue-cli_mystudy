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


import countOptions from './count'
import personOptions from './person'


export default new Vuex.Store({
    // 用于模块化
    modules: {
        countAbout: countOptions,
        personAbout: personOptions
    }, 
})