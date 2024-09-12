<template>
    <div class="demo">
        <h1>当前求和为：{{$store.state.sumNum}}</h1>

        <select v-model.number="selectNum">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>

        <button @click="increaseNum">+</button>
        <button @click="decreaseNum">-</button>
        <button @click="increaseNumOdd">当前求和为奇数时再加</button>
        <button @click="increaseNumWait">等一等再加</button>
    </div>
</template>

<script>
export default {
    name:'NumCount',
    data() {
        return {
            selectNum: 1, // 默认选中的数字
        }
    },
    methods: {
        increaseNum(){
            // this.sumNum += this.selectNum
            this.$store.commit('ADDNUM', this.selectNum) // 直接提交到mutations
        },
        decreaseNum(){
            // this.sumNum -= this.selectNum
            this.$store.commit('DOWNNUM', this.selectNum)
        },
        increaseNumOdd(){
            if(this.$store.state.sumNum % 2){
                // this.sumNum += this.selectNum
                this.$store.dispatch('addNumOdd', this.selectNum) // 提交到actions，再由actions提交到mutations
            }
        },
        increaseNumWait(){
            setTimeout(() => {
                this.$store.dispatch('addNumWait', this.selectNum)
            }, 500);
        }
    },
}
</script>

<style scoped>
    button{
        margin-left: 5px;
    }
</style>
