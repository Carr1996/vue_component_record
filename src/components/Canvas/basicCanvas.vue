<template>
  <div>
    <!-- default{width:300px,height:150px} -->
    <canvas id="canvas_1" class="exam" ref="canvas" width="2200" height="700">
      浏览器版本不支持Canvas
    </canvas>
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
  this.draw()
  },
  beforeDestroy() {
  
  },
  methods: {
    draw() {
      let canvas = this.$refs.canvas
      if(!canvas.getContext) return
      let ctx = canvas.getContext("2d") //访问绘画上下文
      //开始代码
      ctx.fillStyle="pink" //color
      ctx.fillRect(10,10,200,100) //(x,y,width,height)
    }
  },
  watch: {},
  }
</script>
<style lang='less' scoped>
.exam {
}
</style>