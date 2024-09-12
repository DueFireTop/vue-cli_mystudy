// 求和功能相关的配置项
export default {
    namespaced: true,
    actions: {
        addNumOdd(context, value){
            if(context.state.sumNum % 2){
                console.log('addNumOdd');
                context.commit('ADDNUM', value)
            }
        },
        addNumWait(context, value){
            setTimeout(() => {
                context.commit('ADDNUM', value)
            }, 500);
        }
    },
    mutations: {
        ADDNUM(state, value){
            state.sumNum += value
        },
        DOWNNUM(state, value){
            state.sumNum -= value
        },
    },
    state: {
        sumNum: 0, // 当前求和
        school: 'my school',
        subject: 'NLP',
    },
    getters: {
        bigSum(state){
            return state.sumNum * 10
        }
    }
}