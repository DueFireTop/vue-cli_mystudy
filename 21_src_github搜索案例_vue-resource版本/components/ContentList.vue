<template>
    <div class="row" >
        <!-- 展示用户列表 -->
        <div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.id" >
            <a :href="user.html_url" target="_blank">
                <img :src="user.avatar_url" style='width: 100px'/>
            </a>
            <p class="card-text">{{ user.login }}</p>
        </div>

        <!-- 展示欢迎词 -->
        <h1 v-show="info.isFirstShow">欢迎使用</h1>

        <!-- 展示加载中 -->
        <h1 v-show="info.isLoading">Loading...</h1>

        <!-- 展示错误信息 -->
        <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
    </div>
    
    
</template>

<script>
export default {
    name:'ContentList',
    data() {
        return {
            info:{
                isFirstShow: true, //是否为第一次展示
                isLoading: false, //是否处于加载中状态
                errMsg:'', //错误信息
                users:[],
            }

        }
    },
    mounted() {
        this.$bus.$on("updateListData", (dataObj)=>{
            console.log(dataObj)
            // this.info = dataObj // 直接覆盖
            this.info = {...this.info, ...dataObj} // 合并
        })

        
    },
}
</script>

<style scoped>
    .album {
    min-height: 50rem; /* Can be removed; just added for demo purposes */
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
    }

    .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
    }

    .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
    }

    .card-text {
    font-size: 85%;
    }
</style>