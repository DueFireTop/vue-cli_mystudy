<template>
  <div>
      <button>原生按钮</button> <input type="text">
      <my-row>
        <my-button round>圆角按钮</my-button>
        <my-button type="primary" round>主要按钮</my-button>
        <my-button type="success" round>成功按钮</my-button>
        <my-button type="info" round>信息按钮</my-button>
        <my-button type="warning" round>警告按钮</my-button>
        <my-button type="danger" round>危险按钮</my-button>
      </my-row>
      <my-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期">
      </my-date-picker>
      <my-row>
        <my-button icon="el-icon-search" circle></my-button>
        <my-button type="primary" icon="el-icon-edit" circle></my-button>
        <my-button type="success" icon="el-icon-check" circle></my-button>
        <my-button type="info" icon="el-icon-message" circle></my-button>
        <my-button type="warning" icon="el-icon-star-off" circle></my-button>
        <my-button type="danger" icon="el-icon-delete" circle></my-button>
      </my-row>
  </div>
</template>

<script>

  
  import ElementUI from 'element-ui';
  export default {
      name:'App',
      components: {},
      methods: {
        
    }
  }
</script>

