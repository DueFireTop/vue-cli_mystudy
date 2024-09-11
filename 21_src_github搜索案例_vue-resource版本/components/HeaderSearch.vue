<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyWord" />&nbsp;
            <button @click="searchUsers">Search</button>
        </div>
    </section>
</template>

<script>

export default {
    name:'HeaderSearch',
    data(){
        return {
            keyWord:''
        }
    },
    methods: {
        searchUsers(){
            // 请求前，更新list的数据
            this.$bus.$emit('updateListData', {isFirstShow:false, isLoading:true, errMsg:'', users:[]})

            // 发送请求
            this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`)
            .then(response => {
                console.log('请求成功了')
                // 更新list的数据
                this.$bus.$emit('updateListData', {isLoading:false, errMsg:'', users:response.data.items})
            })
            .catch(error => {
                console.log('请求失败了', error.message);
                // 更新list的数据
                this.$bus.$emit('updateListData', {isLoading:false, errMsg:error.message,users: ''})
            })
        }
    },
    mounted() {
        
    },
}
</script>

<style>

</style>