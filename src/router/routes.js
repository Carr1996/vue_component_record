
const routes = [
  {
    path: '/',
    redirect: 'echarts/line'
  },
  {
    name: "echarts",
    path: "/echarts",
    icon: "el-icon-s-data",
    component: () => import('../views/echarts_index.vue'),
    children: [
      { name: "折线图（带背景色）", path: "line", component: resolve => require(['../components/Echats/lineChartOne.vue'], resolve) },
      { name: "柱状图", path: "bar", component: resolve => require(['../components/Echats/barChartOne.vue'], resolve) },
      { name: "横向气泡图", path: "scatter", component: resolve => require(['../components/Echats/scatterChartOne.vue'], resolve) },
      { name: "饼图", path: "pie", component: resolve => require(['../components/Echats/pieChartOne.vue'], resolve) },
      { name: "迁徙地图", path: "effectScatter", component: resolve => require(['../components/Echats/effectScatter.vue'], resolve) },
    ]
  },
  {
    name: "threeJS",
    path: "/threeJS",
    icon: "el-icon-attract",
    component: () => import('../views/threeJS_index.vue'),
    children: [
      { name: "初始化", path: "basic", component: resolve => require(['../components/threeJS/basic.vue'], resolve) },
      { name: "加载模型", path: "loader", component: resolve => require(['../components/threeJS/loader.vue'], resolve) },
      { name: "华鑫example", path: "hxIndex", component: resolve => require(['../components/threeJS/hx_example/hxIndex.vue'], resolve) },
    ]
  },
  {
    name: "canvas",
    path: "/canvas",
    icon: "el-icon-document",
    disabled: true,
    component: () => import('../views/canvas_index.vue'),
    children: [
      { name: "基础", path: "basic", component: resolve => require(['../components/Canvas/basicCanvas.vue'], resolve) },
    ]
  },
  {
    name: "常规效果",
    path: "/common_content",
    icon: "el-icon-ice-cream-round",
    component: () => import('../components/Common_content/common_content.vue')
  },
  {
    name: "高德地图",
    path: "/amap",
    icon: "el-icon-document",
    disabled: true,
    component: () => import('../views/amap_index.vue'),
    children: [
      { name: "原始高德地图", path: "basic_amap", component: resolve => require(['../components/AMap/amap.vue'], resolve) },
      { name: "echarts高德地图", path: "echart_amap", component: resolve => require(['../components/AMap/amap_echarts.vue'], resolve) },
    ]
  },
]
export default routes;
