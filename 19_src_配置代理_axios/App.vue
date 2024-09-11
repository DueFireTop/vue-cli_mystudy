<template>
  <body>

    <div id="root">
      <button @click="getStudentInfo">获取学生信息</button>
      <button @click="getCarInfo">获取汽车信息</button>
    </div>
  </body>
</template>

<script>
  // 引入axios
  import axios from 'axios';
  export default {
      name:'App',
      methods: {
        getStudentInfo(){
          // 发送ajax请求（结合配置代理服务器-方式一）
          // axios.get('http://localhost:8080/students').then(
          //   response =>{
          //     console.log('请求成功了', response.data);
          //   },
          //   error =>{
          //     console.log('请求失败了', error);
          //   }
          // )

          axios.get('http://localhost:8080/mytest/students').then(
            response =>{
              console.log('请求成功了', response.data);
            },
            error =>{
              console.log('请求失败了', error);
            }
          )
        },
        getCarInfo(){
          axios.get('http://localhost:8080/demo/cars').then(
            response =>{
              console.log('请求成功了', response.data);
            },
            error =>{
              console.log('请求失败了', error);
            }
          )
        }
    }
  }
</script>

<style>
  

</style>