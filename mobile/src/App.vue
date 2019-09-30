<template>
  <div id="app">
      <!-- 需要缓存的页面 -->
      <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>

      <!-- 不需要缓存的页面 -->
      <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>

</script>

<style style="scss">
#app {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
