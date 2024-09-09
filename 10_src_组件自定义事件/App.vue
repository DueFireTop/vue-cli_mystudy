<template>
  <div class="app">
    <h1>{{msg}}，学生姓名是{{ studentName }}</h1>

    <!-- 绑定自定义事件：当 MyStudent 组件触发 myCustomEvent 时，会执行父组件中的 getStudentName 方法。 -->

    <!-- 通过父组件给子组件绑定一个自定义事件，实现子给父传递数据（第一种写法，使用@或v-on） -->
    <!-- 加个 .once 可以实现一次性监听，只执行一次 -->
    <!-- <MyStudent @myCustomEvent="getStudentName"></MyStudent> -->
    <!-- <MyStudent v-on:myCustomEvent="getStudentName" @demoCustomEvent="demoFunction1"></MyStudent> -->

    <!-- 通过父组件给子组件绑定一个自定义事件，实现子给父传递数据（第二种写法，使用ref） -->
     <!-- @click.native="showInfo"中的 native 是为了监听组件的原生事件，否则会报错 -->
    <MyStudent ref="student" @click.native="showInfo"></MyStudent>

    <hr>

    <!-- 通过父组件给子组件传递函数类型的props，实现子给父传递数据 -->
    <MySchool :getSchoolName="getSchoolName"></MySchool>
    <br>
  </div>
</template>

<script>
    import MyStudent from './components/Student.vue'
    import MySchool from './components/School.vue'

    export default {
        name:'App',
        data() {
          return {
            msg: 'Hello Vue!',
            studentName:''
          }
        },
        components: { 
            MyStudent,
            MySchool
        },
        methods: {
          getSchoolName(name){
            console.log('App收到了来自子组件的学校名：', name)
            
          },
          // 接收子组件传递的数据
          getStudentName(name){
            console.log('App收到了来自子组件的学生名：', name)
            this.studentName = name
          },
          demoFunction1(){
            console.log('demoCustomEvent事件被触发了')
          },
          showInfo(){
            alert('点击了MyStudent组件')
          }
        },
        mounted(){
        //   // 3秒后，为子组件绑定自定义事件
        //   setTimeout(() => {
        //     this.$refs.student.$on('myCustomEvent', this.getStudentName) // 通过ref绑定
        //     // this.$refs.student.$once('myCustomEvent', this.getStudentName) // 只执行一次
        //   }, 3000);
          this.$refs.student.$on('myCustomEvent', this.getStudentName)
        }
        
    }
</script>

<style>
.app{
    background-color: gray;
}

h1{
    text-align: center;
}
</style>