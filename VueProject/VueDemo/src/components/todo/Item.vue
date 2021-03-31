<template>
  <li>
    <label>
      <input type="checkbox" v-model="item.complete" />
      <span>{{ item.name }}</span>
    </label>
    <button class="btn btn-danger" @click="remove()">删除</button>
  </li>
  <!-- <li>
      <label>
        <input type="checkbox" />
        <span>yyyy</span>
      </label>
      <button class="btn btn-danger" style="display: none">删除</button>
    </li> -->
</template>

<script>
import PubSub from 'pubsub-js';
export default {
  props: {
    item: Object,
    index: Number,
    removeItem: {
      type: Function,
      required: true,
    },
  },
  methods: {
    remove() {
      this.removeItem(this.index);
      PubSub.publish('deleteTodo',this.index);
    }
  }
}
</script>

<style>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button.btn {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background: lightgray;
}

li:hover button {
  display: block;
}
</style>
