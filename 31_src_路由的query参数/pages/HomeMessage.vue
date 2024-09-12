<template>
    <div>
        <ul>
            <li v-for="msg in messageList" :key="msg.id">
                <!-- 跳转路由，携带query参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail?id=${msg.id}&title=${msg.title}`">{{msg.title}}</router-link>&nbsp;&nbsp; -->

                <!-- 跳转路由，携带query参数，to的对象写法 -->
                <router-link :to="{
                    path: '/home/message/detail',
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