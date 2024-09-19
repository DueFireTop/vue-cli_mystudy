<template>
    <div>
        <h2>Home内容</h2>
        <ul class="nav nav-tabs">
            <li>
                <router-link replace class="list-group-item" active-class="active" to="/home/news">News</router-link>
            </li>
            <li>
                <router-link replace class="list-group-item" active-class="active" to="/home/message">Message</router-link>
            </li>
        </ul>

        
        <!-- keep-aluve是否缓存当前组件，默认为false -->
        <!-- include="HomeNews" 是否缓存HomeNews组件，默认为空，可以写多个，用逗号隔开 -->
        <!-- 这里的HomeNews是组件名 ，不是路由名 -->
        <!-- 如果是多个，改为 :include="['HomeNews','HomeMessage']" -->
        <keep-alive include="HomeNews">
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name:'MyHome',
    components: {},
    methods: {
        
    }
}
</script>

<style>

</style>