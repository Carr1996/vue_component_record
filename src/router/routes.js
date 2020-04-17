import echarts_index from "../views/echarts_index.vue";
import threeJS_index from "../views/threeJS_index.vue";
import canvas_index from "../views/canvas_index.vue";
import d3_index from "../views/d3_index.vue";
import lineChartOne from "../components/Echats/lineChartOne.vue";
import barChartOne from "../components/Echats/barChartOne.vue";
import pieChartOne from "../components/Echats/pieChartOne.vue";
import scatterChartOne from "../components/Echats/scatterChartOne.vue";

const routes = [
  {
    path: '/',
    redirect: 'echarts/line'
  },
  {
    name: "echarts",
    path: "/echarts",
    icon: "el-icon-location",
    component: echarts_index,
    children: [
      { name: "折线图（带背景色）", path: "line", component: lineChartOne },
      { name: "柱状图", path: "bar", component: barChartOne },
      { name: "横向气泡图", path: "scatter", component: scatterChartOne },
      { name: "饼图", path: "pie", component: pieChartOne },
    ]
  },
  {
    name: "threeJS",
    path: "/threeJS",
    icon: "el-icon-attract",
    component: threeJS_index
  },
  {
    name: "canvas",
    path: "/canvas",
    icon: "el-icon-document",
    disabled: true,
    component: canvas_index
  },
  {
    name: "d3",
    path: "/d3",
    icon: "el-icon-attract",
    disabled: true,
    component: d3_index
  },
  
]
export default routes;
