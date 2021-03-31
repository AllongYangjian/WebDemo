// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Comment from './components/news/Comment'
import Todo from './components/todo/Todo'
import  './base.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App ,Comment, Todo }, /* 将组件映射成标签 */
  // template: '<Comment/>'
  template: '<Todo/>'
})
