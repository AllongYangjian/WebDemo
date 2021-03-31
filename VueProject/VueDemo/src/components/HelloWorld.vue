<template>
  <div>
    <img src="../assets/logo.png" alt="" />
    <p class="msg">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello World",
    };
  },
};
</script>

<style>
.msg {
  color: red;
  background: whitesmoke;
  font-size: 14px;
}
</style>
