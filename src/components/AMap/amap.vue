<template>
  <div class="amap">
    <div class="amap" ref="amap"></div>
  </div>
</template>

<script>
export default {
  name: "amap",
  components: {},
  data() {
    return {
      map: null,
      mapOption: {
        // mapStyle: 'amap://styles/ce0faee96b28a87de4bdc697d618ee4c',
        zoom: 10,
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
    this.initMap();
  },
  beforeDestroy() {},
  methods: {
    initMap() {
      this.map = new AMap.Map(this.$refs.amap, this.mapOption);
      window.map = this.map;
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
<style lang='less' scoped>
.amap {
  width: 100%;
  height: 100%;
}
</style>