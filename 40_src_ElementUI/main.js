import Vue from 'vue'
import App from './App.vue'

// 完整引入
// 引入element-ui
// import ElementUI from 'element-ui';
// 引入element-ui全部样式
// import 'element-ui/lib/theme-chalk/index.css';

// 按需引入
import { Button, Row, DataPicker } from 'element-ui';

Vue.config.productionTip = false

// 全局使用element-ui
// Vue.use(ElementUI);
Vue.component('my-button',Button);
Vue.component('my-row',Row);
Vue.component('my-data-picker',DataPicker);

new Vue({
    el:'#app',
    render: h => h(App)
})