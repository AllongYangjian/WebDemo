<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header/>
      <List/>
      <Footer />
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
