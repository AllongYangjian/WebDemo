<template>
  <ul class="todo-main">
    <Item
      v-for="(item, index) in todos"
      :item="item"
      :index="index"
      :key="index"
      :removeItem="removeItem"
    />
  </ul>
</template>

<script>
import Item from "./Item";
export default {
  props: {
    todos: Array,
    removeItem: {
      type: Function,
      required: true,
    },
  },
  components: {
    Item,
  },
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
