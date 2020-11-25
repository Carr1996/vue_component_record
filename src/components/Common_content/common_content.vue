<template>
  <div class="common">
    <el-button type="primary" size="mini" @click="show1 = !show1">transition动画</el-button>
    <transition enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
      <p class="one" v-if="show1">hello</p>
    </transition>
  </div>
</template>
<script>
import "./style.less";
import func from "../General_Basic/commonFun";
export default {
  name: "common_content",
  data() {
    return {
      show1: true,
      weather: {}
    };
  },
  mounted() {
      fetch("/tencent/weather/common?weather_type=observe&source=pc&province=上海&city=上海")
      .then(response => response.json())
      .then(data => {
        this.weather = data.observe
      })
      .catch(error => console.log('error is', error));
  
  },
  methods: {},
};
</script>
<style lang="less" scoped>
</style>
