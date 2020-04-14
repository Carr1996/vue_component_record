<template>
  <div id="app">
    <!-- <router-link to="/home">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    <router-view></router-view> -->
    <basic-menu class="menu" @selectItem="selectItem"></basic-menu>
    <div class="component"></div>
  </div>
</template>

<script>
import basicMenu from "./components/basicMenu"
export default {
  name: "app",
  components: {
    basicMenu
  },
  methods: {
    selectItem(item) {
      console.log('selectItem',item)
    }
  }
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
  .menu {
    position: absolute;
    left: 0px;
    top: 0px;
    height: 700px;
  }
  .component {
    background: red;
    width: 86%;
    height: 700px;
    margin-left: 203px;
  }
}
</style>
