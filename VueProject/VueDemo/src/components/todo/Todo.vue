<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addItem="addItem" />
      <List :todos="todos" :removeItem="removeItem" />
      <Footer :todos="todos" @removeComplete="removeComplete" :checkAll="checkAll"/>
    </div>
  </div>
</template>

<script>
import PubSub from 'pubsub-js';
import Header from "./Header";
import List from "./List";
import Footer from "./Footer";

export default {
  components: {
    Header,
    List,
    Footer,
  },
  data() {
    return {
      todos: JSON.parse(window.localStorage.getItem("keys")||'[]')
    };
  },
  methods: {
    addItem(item) {
      this.todos.unshift(item);
    },
    removeComplete() {
      this.todos = this.todos.filter((item) => !item.complete);
    },
    removeItem(index) {
      this.todos.splice(index, 1);
    },
    checkAll(val){
      this.todos.forEach(item=>{
        item.complete = val;
      })
    }
  },
  watch:{
    todos:{
      deep:true,
      handler:function(newValue,oldValue){
        window.localStorage.setItem('keys',JSON.stringify(newValue));
      }
    }
  },
  mounted(){
    PubSub.subscribe('deleteTodo',function(msg,index){
      console.log(msg,index);
    })
  }
}
</script>

<style>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
