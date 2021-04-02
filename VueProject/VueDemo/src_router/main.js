import Vue from 'vue'
import App from './App'
import router from './router'
import App2 from './App2'
import Todo from './components/todo/Todo'
new Vue({
    el:'#app',
    components:{App,App2,Todo},
    template:'<App/>',
    router
})