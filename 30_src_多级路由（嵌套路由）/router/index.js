// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

// 导入路由组件
import MyAbout from '../pages/MyAbout.vue'
import MyHome from '../pages/MyHome.vue'
import HomeMessage from '../pages/HomeMessage.vue'
import HomeNews from '../pages/HomeNews.vue'

// 创建并导出一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:MyAbout
        },
        {
            path:'/home',
            component:MyHome,
            children:[
                {
                    path:'message',
                    component:HomeMessage
                },
                {
                    path:'news',
                    component:HomeNews
                }
            ]
        },
        
    ]
})