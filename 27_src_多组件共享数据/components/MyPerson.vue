<template>
    <div>
        <h1>人员列表</h1>
        <input type="text" placeholder="请输入名字" v-model="inputPersonName">
        <button @click="addPerson">添加</button>

        <ul>
            <li v-for="person in personList" :key="person.id">{{ person.name }}</li>
        </ul>

        <h3 style="color: blue;">Count组件的和：{{ sumNum }}</h3>
    </div>
</template>

<script>
import { nanoid } from 'nanoid';
import { mapState } from 'vuex'
export default {
    name: "MyPerson",
    data() {
        return {
            inputPersonName: ''
        }
    },
    computed:{
        // ...mapState(['personList', 'sumNum'])
        personList(){
            return this.$store.state.personList
        },
        sumNum(){
            return this.$store.state.sumNum
        }
        
    },
    methods: {
        addPerson(){
            const personObj = {
                id: nanoid(),
                name: this.inputPersonName
            }
            this.$store.commit('ADD_PERSON', personObj)
            this.inputPersonName = '' //清空输入框
        }
    },
}
</script>

<style>

</style>