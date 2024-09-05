// 该文件是整个项目的入口

// 引入vue
// import Vue from 'vue/dist/vue'  // 引入vue的完整版
import Vue from 'vue'

// 引入App组件，他是所有组件的父组件
import App from './App.vue'

// 关闭vue的生产提示
Vue.config.productionTip = false

// 创建vue示例对象——vm
new Vue({
  // 将App组件放入容器中
  render: h => h(App), // 如果不用render，需要引入完整版的vue

}).$mount('#app')
