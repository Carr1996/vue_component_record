<template>
  <div class="amap">
    <div class="amap" ref="amap"></div>
  </div>
</template>

<script>
import "./echarts-amap.min.js";
import amapShare from "./amapShare.js";
export default {
  name: "amap_echarts",
  components: {},
  data() {
    return {
      mapCharts: null,
      map: null,
      layer: null,
      mapOption: {
        zoom: 18,
        zooms: [9, 18],
        rotateEnable: true,
        center: [121.403266, 31.16701],
        viewMode: "2D",
        resizeEnable: true,
      },
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.initEchartsMap();
  },
  beforeDestroy() {},
  methods: {
    initEchartsMap() {
      this.mapCharts = echarts.init(this.$refs.amap, null, {
        renderer: "canvas",
      });
      this.mapCharts.setOption({
        title: {
          text: "",
          subtext: "",
          left: "center",
          textStyle: {
            color: "#fff",
          },
        },
        amap: this.mapOption,
        animation: false,
        series: [],
      });
      this.map = this.mapCharts.getModel().getComponent("amap").getAMap();
      window.map = this.map;
      window.mapCharts = this.mapCharts;
      amapShare.districtMap(); //多边形边界
      this.map.on("complete", this.onMapLoaded.bind(this));
    },
    onMapLoaded() {
      map.on("moveend", function () {
        console.log("zoom:" + map.getZoom()); //获取级别
        console.log("center:" + map.getCenter().toString()); //获取中心点
      });
      map.on("click", function (e) {
        console.log(
          "点击的坐标:" + e.lnglat.getLng() + "," + e.lnglat.getLat()
        );
      });
    },
  },
  watch: {},
};
</script>
<style lang='less'>
.amap {
  width: 100%;
  height: 100%;
  .amap-logo {
    display: none !important;
  }
  .amap-copyright {
    opacity: 0;
  }
}
</style>