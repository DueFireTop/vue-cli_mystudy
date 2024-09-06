import Vue from 'vue'
import App from './App.vue'

//  全局混合：引入混合
import {mixin1, mixin2 } from './mixin'

Vue.config.productionTip = false

// 全局混合：注册混合
Vue.mixin(mixin1)
Vue.mixin(mixin2)

new Vue({
    el:'#app',
    render: h => h(App)
})