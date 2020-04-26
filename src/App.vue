<template>
  <div id="app">
    <basic-menu class="menu"></basic-menu>
    <router-view class="component"></router-view>
  </div>
</template>

<script>
import basicMenu from "./components/basicMenu";
export default {
  name: "app",
  components: {
    basicMenu
  },
  methods: {}
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  height: 700px;
  .menu {
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
  }
  .component {
    width: 86%;
    height: 100%;
    margin-left: 203px;
    .routerView {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
