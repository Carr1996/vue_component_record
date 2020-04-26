<template>
  <div>
    <div style="width:10px;height:20px;backgroundColor: red"></div>
    <canvas class="exam" width="300" height="300"></canvas>
  </div>
</template>

<script>
export default {
  name: 'basicCanvas',
  components: {},
  data() {
    return {
      
    };
  },
  computed: {},
  created() {
  
  },
  mounted() {
  
  },
  beforeDestroy() {
  
  },
  methods: {
    draw() {
      let canvas = document.getElementsByTagName('canvas')
      if(!canvas.getContext) return
      let ctx = canvas.getContext("2d")
      //开始代码
    }
  },
  watch: {},
  }
</script>
<style lang='less' scoped>
.exam {
  border: 1px solid #000;
}
</style>