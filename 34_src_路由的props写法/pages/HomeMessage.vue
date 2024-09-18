<template>
    <div>
        <ul>
            <li v-for="msg in messageList" :key="msg.id">
                <!-- 跳转路由，携带params参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail/${msg.id}/${msg.title}`">{{msg.title}}</router-link>&nbsp;&nbsp; -->

                <!-- 跳转路由，携带params参数，to的对象写法 -->
                <!-- 如果使用params，则必须使用name，不能使用path -->
                <router-link :to="{
                    // path: '/home/message/detail', // 通过路由地址跳转。
                    name: 'homemessagedetail', // 通过路由名称跳转
                    query: {
                        id: msg.id,
                        title: msg.title
                    }
                }">
                    {{msg.title}}
                </router-link>&nbsp;&nbsp;

            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
            
</template>

<script>
import { name } from 'pubsub-js';

export default {
    name:'HomeMessage',
    components: {},
    data() {
        return {
            messageList:[
                {
                    id: 1,
                    title: 'message001'
                },
                {
                    id: 2,
                    title: 'message002'
                },
                {
                    id: 3,
                    title: 'message003'
                }
                
            ]
        }
    },
    methods: {
        
    }
}
</script>

<style>

</style>