import Vue from 'vue'
import App from './App'
import Todo from './components/todo/Todo'
import store from './store/store'

new Vue({
    el:'#app',
    data:{

    },
    components:{App,Todo},
    template:'<Todo/>',
    store
})