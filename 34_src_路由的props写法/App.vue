<template>
  <body>
    <div>
      <div class="row">
        <MyBanner></MyBanner>
      </div>
      <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
          <div class="list-group">
            <!-- 原始html中，我们使用a标签实现页面的跳转 -->
            <!-- <a class="list-group-item" href="./about.html">About</a>
            <a class="list-group-item active" href="./home.html">Home</a> -->

            <!-- Vue中借助 router-link 组件实现路由导航 -->
            <!-- router-link 最终会被替换成 a 标签 -->
            <!-- 导航链接到 /about 和 /home -->
            <!-- active-class="active" 表示当链接被激活时，添加active类 -->
            <router-link class="list-group-item" active-class="active" :to="{name:'myabout'}">About</router-link> <!-- 跳转路由名称 -->
            <router-link class="list-group-item" active-class="active" to="/home">Home</router-link> <!-- 跳转路由地址 -->
          </div>
        </div>
        <div class="col-xs-6">
          <div class="panel">
            <div class="panel-body">
              <!-- 指定组件的渲染位置 -->
              <router-view></router-view>

            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>

  // 导入一般组件
  import MyBanner from './components/MyBanner.vue'

  export default {
      name:'App',
      components: {MyBanner},
      methods: {
        
    }
  }
</script>

