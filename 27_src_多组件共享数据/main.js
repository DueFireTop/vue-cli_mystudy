import Vue from 'vue'
import App from './App.vue'

// 引入vue-resource插件
import VueResource from 'vue-resource'

// 引入vuex
 import Vuex from 'vuex'

//  引入store
import store from './store'

Vue.config.productionTip = false

// 使用vue-resource插件
Vue.use(VueResource)

new Vue({
    el:'#app',
    store,
    render: h => h(App),
    // 创建全局事件总线
    beforeCreate(){
        Vue.prototype.$bus = this
    }
})