<template>
  <ul class="todo-main">
    <Item
      v-for="(item, index) in todos"
      :item="item"
      :index="index"
      :key="index"
    />
  </ul>
</template>

<script>
import Item from "./Item";
import {mapState} from 'vuex'
export default {
  data(){
    return{
      // todos:this.$store.state.todos
    }
  },
  // computed:{
  //   ... mapState(['todos'])
  // },
  //或
  computed:mapState(['todos']),
  components: {
    Item,
  },
  watch:{
    todos:{
      deep:true,
      handler: val=>window.localStorage.setItem('sb',JSON.stringify(val))
      
    }
  }
};
</script>

<style>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
