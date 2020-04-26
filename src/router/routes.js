
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
    component: () => import('../views/threeJS_index.vue')
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
    name: "d3",
    path: "/d3",
    icon: "el-icon-ice-cream-round",
    disabled: true,
    component: () => import('../views/d3_index.vue')
  },
  {
    name: "commonFunc",
    path: "/commonFunc",
    icon: "el-icon-picture-outline-round",
    component: () => import('../views/common_func.vue'),
    children: [
      { name: "日期函数", path: "date", component: resolve => require(['../components/CommonFunc/dateFunc.vue'], resolve) },
    ]
  },

]
export default routes;
