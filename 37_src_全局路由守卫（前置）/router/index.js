// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

// 导入路由组件
import MyAbout from '../pages/MyAbout.vue'
import MyHome from '../pages/MyHome.vue'
import HomeMessage from '../pages/HomeMessage.vue'
import HomeNews from '../pages/HomeNews.vue'
import HomeMessageDetail from '../pages/HomeMessageDetail.vue'

// 创建并导出一个路由器
const router =  new VueRouter({
    routes:[
        {
            name:'myabout', // 路由名称
            path:'/about',
            component:MyAbout
        },
        {
            name:'myhome',
            path:'/home',
            component:MyHome,
            children:[
                {
                    name:'homemessage',
                    path:'message',
                    component:HomeMessage,
                    children:[
                        {
                            name:'homemessagedetail',
                            // path:'detail/:id/:title',
                            path:'detail',
                            component:HomeMessageDetail,

                            // props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给HomeMessageDetail组件
                            // props: {a:1,b:2}

                            // props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给HomeMessageDetail组件
                            // props: true,

                            // props的第三种写法，值为函数
                            // props($route){
                            //     return {
                            //         id: $route.params.id,
                            //         title: $route.params.title
                            //     }
                            // }
                            props($route){
                                return {
                                    id: $route.query.id, 
                                    title: $route.query.title
                                }
                            }
                        }
                    ]
                },
                {
                    name:'homenews',
                    path:'news',
                    component:HomeNews
                }
            ]
        },
        
    ]
})

// 全局前置路由守卫————初始化时被调用、每次路由切换之前调用
router.beforeEach((to, from, next) => {
    console.log('beforeEach', to, from)

    // 判断路由是否为home/message或者home/news
    if(to.path === '/home/message' || to.path === '/home/news'){
        // 判断localstorage中是否有school，有就放行，没有就弹出提示框
        if (localStorage.getItem('school') === 'haha'){
            next() // next()放行，next(false)取消导航，next('/path')跳转到指定路由
        } else {
            alert('学校名不对，无权访问')
        }
    } else{
        next()
    }
})

export default router