<template>
  <body>
    <div class="container">
      <TestCategory title="food" :listData="foods">
        <img slot="center" src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1qdN5z.img?w=640&h=377&m=6">
        <template v-slot:footer>
          <div class="foot">
            <a href="https://www.baidu.com">跳转到百度</a>
            <a href="https://www.bilibili.com">跳转到bilibili</a>
          </div>
        </template>
      </TestCategory>

      <TestCategory title="game">
        <ul slot="center">
            <li v-for="(item, index) in games" :key="index">{{ item }}</li> 
        </ul>
      </TestCategory>

      <TestCategory title="film" :listData="films">
        <video slot="center" controls src="//player.bilibili.com/player.html?isOutside=true&aid=804122638&bvid=BV1Zy4y1K7SH&cid=373348512&p=102"></video>
      </TestCategory>
    </div>
  </body>
</template>

<script>
  import TestCategory from './components/Category'

  export default {
      name:'App',
      components: {TestCategory},
      data() {
        return {
          foods:['苹果', '香蕉', '橘子', '火龙果'],
          games:['LOL', 'DNF', 'NF', 'NF2'],
          films:['《速度与激情》', '《速度与激情2》', '《速度与激情3》', '《速度与激情4》']
        }
      },
      methods: {
        
    }
  }
</script>

<style scoped>
  .container, foot{
    display: flex;
    justify-content: space-around;
  }

  img{
    width: 100%;
  }

  video{
    width: 100%;
  }
</style>
