<template>
    <div>
        <h1>人员列表</h1>
        <input type="text" placeholder="请输入名字" v-model="inputPersonName">
        <button @click="addPerson">添加</button>
        <button @click="addPersonLastname">添加一个姓王的人</button>
        <button @click="addPersonByServer">通过服务器添加一个新用户</button>
        <h3>列表中第一个人的名字是: {{ firstPersonName }}</h3>


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
        // ...mapState('personAbout', ['personList']),
        // ...mapState('countAbout', ['sumNum']),

        personList(){
            return this.$store.state.personAbout.personList
        },
        sumNum(){
            return this.$store.state.countAbout.sumNum
        },
        firstPersonName(){
            return this.$store.getters['personAbout/firstPersonName']
        }
        
    },
    methods: {
        addPerson(){
            const personObj = {
                id: nanoid(),
                name: this.inputPersonName
            }
            this.$store.commit('personAbout/ADD_PERSON', personObj)
            this.inputPersonName = '' //清空输入框
        },
        addPersonLastname(){
            const personObj = {
                id: nanoid(),
                name: this.inputPersonName
            }
            this.$store.dispatch('personAbout/addPersonLastname', personObj)
            this.inputPersonName = '' //清空输入框
        },
        addPersonByServer(){
            this.$store.dispatch('personAbout/addPersonByServer')
            this.inputPersonName = '' //清空输入框
        }
    },
}
</script>

<style>

</style>