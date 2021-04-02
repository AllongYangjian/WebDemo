<template>
  <div class="container">
    <div class="left">
      <div><router-link to="/home">主页</router-link></div>
      <div><router-link to="/about">关于</router-link></div>
    </div>
    <div class="right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  width: 100%;
  background: red;
}
.left {
  display: inline-block;
  width: 30%;
  height: 500px;
  background: lightgreen;
}
.right {
  float: right;
  display: inline-block;
  width: 70%;
  height: 500px;
  background: lightgray;
}
</style>
