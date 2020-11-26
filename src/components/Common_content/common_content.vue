<template>
  <div class="common">
    <el-button type="primary" size="mini" @click="show1 = !show1">transition动画</el-button>
    <transition enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
      <p class="one" v-if="show1">hello</p>
    </transition>
    <el-button type="primary" size="mini" @click="getWeather">调用天气接口</el-button>
    <p class="one">{{JSON.stringify(this.weather)}}</p>
  </div>
</template>
<script>
import "./style.less";
import func from "@components/General_Basic/commonFun";
export default {
  name: "common_content",
  data() {
    return {
      show1: true,
      weather: {},
    };
  },
  mounted() {},
  methods: {
    getWeather() {
      this.$api.getWeather().then((json) => {
        this.weather = json;
      });
    },
  },
};
</script>
