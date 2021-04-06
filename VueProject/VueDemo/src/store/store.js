import Vue from 'vue'
import VueX from 'vuex'


Vue.use(VueX);

const actions = {
    deleteAsync({commit}){
        setTimeout(function(){
            commit('removeComplete');
        },1000)
    },
    deleteItemAsync({commit},index){
        setTimeout(()=>{
            commit('removeItem',index)
        },1000)
    }
}

const getters = {
    finished(state){
        return state.todos.filter(item=>item.complete).length;
    },
    length(state){
        return state.todos.length;
    }
}

const mutations = {
    addItem(state, item) {
        state.todos.unshift(item);
    },
    removeComplete(state) {
        state.todos = state.todos.filter((item) => !item.complete);
    },
    removeItem(state, index) {
        console.info(state);
        state.todos.splice(index, 1);
    },
    checkAll(state, val) {
        state.todos.forEach(item => {
            item.complete = val;
        })
    }
}

const state = {
    todos: [
        {
            name: "测试1", complete: false
        },
        {
            name: "测试2", complete: false
        }
    ]
}



export default new VueX.Store({
    state,
    actions,
    mutations,
    getters
})
