<template>
  <div>
      <h2>Home</h2>
      <div>
          <router-link to="/home/news">News</router-link>
          <router-link to="/home/message">Message</router-link>
      </div>
      <div>
          <!-- 缓存组件对象 -->
          <keep-alive> 
              <router-view></router-view>
          </keep-alive>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>