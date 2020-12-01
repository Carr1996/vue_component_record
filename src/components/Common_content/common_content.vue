<template>
  <div class="common">
    <el-button type="primary" size="mini" @click="show1 = !show1">transition动画</el-button>
    <transition enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
      <p class="one" v-if="show1">hello</p>
    </transition>
    <el-button type="primary" size="mini" @click="getWeather">调用天气接口</el-button>
    <p class="one">{{JSON.stringify(this.weather)}}</p>
    <div>数字跳动：<jump-number :decimal="2">50</jump-number>
    </div>
    <div class="svg">
      <circle-svg :percent="80" :width="5"></circle-svg>
    </div>
    <!-- iframe通用模版 
      <iframe src="www.baidu.com" frameborder="no" scrolling="no" allow="microphone;camera;midi;encrypted-media;" allowtransparency="false">
    </iframe> -->
  </div>
</template>
<script>
import "./style.less";
import JumpNumber from "@components/JumpNumber";
import CircleSvg from "@components/CircleSvg";
export default {
  name: "common_content",
  components: {
    JumpNumber,
    CircleSvg
  },
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
<style lang="less" scoped>
.svg {
  width: 200px;
  height: 200px;
}
</style>
