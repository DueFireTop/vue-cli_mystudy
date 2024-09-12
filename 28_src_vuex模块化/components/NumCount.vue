<template>
    <div class="demo">
        <h1>当前求和为：{{sumNum}}</h1>
        <h1>当前和*10: {{ bigSum }}</h1>
        <a>我在{{ school }} 学 {{ subject }}</a><hr>
        <h3 style="color: red;">Person组件的总人数是{{ personList.length }}</h3>
        <select v-model.number="selectNum">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>

        <button @click="increaseNum(selectNum)">+</button>
        <button @click="decreaseNum(selectNum)">-</button>
        <button @click="increaseNumOdd(selectNum)">当前求和为奇数时再加</button>
        <button @click="increaseNumWait(selectNum)">等一等再加</button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

    export default {
        name:'NumCount',
        data() {
            return {
                selectNum: 1, // 默认选中的数字
            }
        },
        computed:{
            

            // 借助mapState从state中生成计算属性（对象写法）
            // ...mapState({sumNum:'sumNum', subject:'subject', school:'school'}),

            // 借助mapState从state中生成计算属性（数组写法）
            // ...mapState(['sumNum', 'subject', 'school', 'personList']), // 要求映射的属性名与state中的属性名相同
            // ...mapState(['countAbout', 'personAbout'])
            ...mapState('countAbout', ['sumNum', 'subject', 'school']),
            ...mapState('personAbout', ['personList']),

            /**********************************************************************/ 

            // 借助mapGetters从getters中生成计算属性,对象写法
            // ...mapGetters({ bigSum: 'bigSum' }),

            // 借助mapGetters从getters中生成计算属性,数组写法
            ...mapGetters('countAbout', ['bigSum']),
        },
        methods: {
            

            // 借助mapMutations生成对应方法，方法会调用commit去联系mutations，对象写法
            // 这种写法，对应的button里的@click="increaseNum"要传参
            ...mapMutations('countAbout',
            {
                increaseNum: 'ADDNUM',
                decreaseNum: 'DOWNNUM',
            }),

            // 借助数组写法生成方法,但注意你生成的方法名和mutations里对应的方法名将会一样的，数组写法
            // ...mapMutations(['ADDNUM', 'DOWNNUM']), // 这种写法，对应的button里是@click="ADDNUM(selectNum)"

            /**********************************************************************/

            // 借助mapActions生成对应方法，方法会调用dispatch去联系actions，同样需要传参，对象写法
            ...mapActions('countAbout',
            {
                increaseNumOdd: 'addNumOdd',
                increaseNumWait: 'addNumWait',
            }),

            // 借助数组写法生成方法,但注意你生成的方法名和actions里对应的方法名将会一样的，数组写法
            // ...mapActions(['addNumWait', 'addNumOdd']),
        },
        mounted(){
            console.log(this.$store)
        }
    }
</script>

<style scoped>
    button{
        margin-left: 5px;
    }
</style>
