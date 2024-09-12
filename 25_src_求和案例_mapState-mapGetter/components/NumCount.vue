<template>
    <div class="demo">
        <h1>当前求和为：{{sumNum}}</h1>
        <h1>当前和*10: {{ bigSum }}</h1>
        <a>我在{{ school }} 学 {{ subject }}</a><hr>

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
    import { mapState, mapGetters } from 'vuex';

    export default {
        name:'NumCount',
        data() {
            return {
                selectNum: 1, // 默认选中的数字
            }
        },
        computed:{
            // 借助mapState从state中生成计算属性（对象写法）
            // sumNum(){
            //     return this.$store.state.sumNum
            // },
            // subject(){
            //     return this.$store.state.subject
            // },
            // school(){
            //     return this.$store.state.school
            // },

            // 借助mapState从state中生成计算属性（对象写法）
            // 将全局状态中的sumNum, subject, school映射到组件的计算属性中
            // 使用 [...] 形式，则数组中的每个字符串将作为 state 的键名，并且计算属性的名字与 state 键相同。
            // ...mapState({'sumNum':'sumNum', 'subject':'subject', 'school':'school'}), // 标准格式为 字符串:字符串
            // ...mapState({sumNum:'sumNum', subject:'subject', school:'school'}), // 省略字符串，直接使用变量名

            // 借助mapState从state中生成计算属性（数组写法）
            ...mapState(['sumNum', 'subject', 'school']), // 要求映射的属性名与state中的属性名相同

            /**********************************************************************/ 

            // 借助mapGetters从getters中生成计算属性,对象写法
            // bigSum(){
            //     return this.$store.getters.bigSum
            // },
            // ...mapGetters({ 'bigSum': 'bigSum' }),
            // ...mapGetters({ bigSum: 'bigSum' }),

            // 借助mapGetters从getters中生成计算属性,数组写法
            ...mapGetters(['bigSum']),
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
        mounted:{
        }
    }
</script>

<style scoped>
    button{
        margin-left: 5px;
    }
</style>
