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
            component:MyAbout,
            // 路由元数据
            meta:{
                // isAuth:false, // 是否需要鉴权，不需要的话可以不写
                title:'关于' // 路由标题
            }
        },
        {
            name:'myhome',
            path:'/home',
            component:MyHome,
            meta:{
                // isAuth:false, // 是否需要鉴权
                title:'主页'
            },
            children:[
                {
                    name:'homemessage',
                    path:'message',
                    component:HomeMessage,
                    meta:{
                        isAuth:true, // 是否需要鉴权
                        title:'消息'
                    },
                    children:[
                        {
                            name:'homemessagedetail',
                            // path:'detail/:id/:title',
                            path:'detail',
                            component:HomeMessageDetail,

                            meta:{
                                isAuth:true, // 是否需要鉴权
                                title:'详情'
                            },
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
                    component:HomeNews,
                    meta:{
                        isAuth:true, // 是否需要鉴权
                        title:'新闻'
                    }
                }
            ]
        },
        
    ]
})

// 全局前置路由守卫————初始化时被调用、每次路由切换之前调用
router.beforeEach((to, from, next) => {
    console.log('@@@beforeEach', to, from)
    
    // 判断是否需要鉴权
    if(to.meta.isAuth){
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

// 全局后置路由守卫————初始化时被调用、每次路由切换之后调用
// 如果能跑这段代码，意味着beforeEach中执行了next()
router.afterEach((to, from) => {
    console.log('@@@afterEach', to, from)
    document.title = to.meta.title || 'Vue Router' // 修改页面标题
})

export default router