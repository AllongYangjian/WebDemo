<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="all" />
    </label>
    <span>
      <span>已完成{{ finished }}</span> / 全部{{ todos.length }}
    </span>
    <button class="btn btn-danger" @click="$emit('removeComplete')">
      清除已完成任务
    </button>
  </div>
</template>

<script>
export default {
  props: {
    todos: Array,
    checkAll:Function
  },
  data() {
    return {
      
    };
  },
  methods:{
  
  },
  computed: {
    finished() {
      return this.todos.filter((item) => item.complete).length;
    },
    all:{
      get(){
         return this.todos.filter((item) => item.complete).length === this.todos.length;
      },
      set(value){
         this.checkAll(value);
      }
    }
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

/* .btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
} */

.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
