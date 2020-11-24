<template>
  <div class="common">
    <el-button type="primary" size="mini" @click="show1 = !show1">transition动画</el-button>
    <transition enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
      <p class="one" v-if="show1">hello</p>
    </transition>
  </div>
</template>
<script>
export default {
  name: "common_content",
  data() {
    return {
      show1: true,
    };
  },
};
</script>
<style lang="less" scoped>
.common {
  .one {
    width: 50px;
    height: fit-content;
    background: pink;
  }
}
</style>