import axios from "axios"
import { nanoid } from "nanoid"
// 人员管理相关的配置项
export default {
    namespaced: true,
    actions: {
        addPersonLastname(context, value){
            // 
            if(value.name.indexOf('王') === 0){
                context.commit('ADD_PERSON', value)
            } else{
                alert('请输入姓为“王”的人')
            }
        },
        addPersonByServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social')
            .then(res => {
                context.commit('ADD_PERSON', {id: nanoid, name: res.data})
            },
            err => {
                console.log(err.message);
            }
        )
        }
    },
    mutations: {
        ADD_PERSON(state, value){
            state.personList.unshift(value)
        },
    },
    state: {
        personList: [
            { id: '001', name: 'cui' }
        ]
    },
    getters: {
        firstPersonName(state){
            return state.personList[0].name
        }
    }
}