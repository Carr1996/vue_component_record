<template>
  <div class="svg-circle__default">
    <svg viewBox="0 0 200 200">
      <path v-if="color[0]==='transparent'" :d="sectorLength(0)" :stroke="color[0]" :stroke-width="width" fill="none"></path>
      <path :d="sectorLength(~~percent)" :stroke="color[1]" :stroke-width="width" fill="none"></path>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    percent: {
      type: [Number, String],
      default: 50,
    },
    width: {
      type: Number,
      default: 10,
    },
    color: {
      type: Array,
      default: () => {return ["aqua", "#65747f"]},
    },
  },
  data() {
    return {};
  },
  created() {},
  computed: {},
  mounted() {},
  methods: {
    sectorLength(percent, startx = 100, starty = 2) {
      percent = (percent >= 100 && 100) || (percent <= 0 && 0) || percent || 0;
      let width = 10;
      let realR = 90;
      let theta = (percent/ 100) * 360;
      let dArr = [
        "M" + startx,
        starty + width,
        "A" + realR,
        realR,
        0,
        theta >= 180 ? 1 : 0,
        0,
      ];
      let cx = startx,
        cy = starty + realR + width;

      let theta2 = theta % 360;
      // 避免360度与0度一样的情况
      theta = theta > 0 && theta2 == 0 ? 359.9 : theta2;

      let alpha = ((theta + 90) / 180) * Math.PI;
      let dx = realR * Math.cos(alpha);
      let dy = realR * Math.sin(alpha);
      let x = cx + dx,
        y = cy - dy;

      dArr.push(x.toFixed(2));
      dArr.push(y.toFixed(2));
      let d = dArr.join(" ");
      // d(M+起始x, 起始y(算上线宽), A+半径, 半径, 0, 角度, 终点x, 终点y)
      return d;
    },
  },
};
</script>
<style lang='less' scoped>
.svg-circle__default {
  width: 100%;
  height: 100%;

  svg {
    width: 100%;
    height: 100%;
  }
}
</style>