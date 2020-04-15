import echarts_index from "../views/echarts_index.vue";
import lineChartOne from "../components/Echats/lineChartOne.vue";
import barChartOne from "../components/Echats/barChartOne.vue";
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
      { name: "折线图（带背景）", path: "line", component: lineChartOne },
      { name: "柱状图", path: "bar", component: barChartOne },
      { name: "横向气泡图", path: "scatter", component: scatterChartOne },
      { name: "饼图", path: "pie", disabled: true },
      
    ]
  },
  {
    name: "threeJS",
    path: "/threeJS",
    icon: "el-icon-attract",
    children: [{ name: "数方", path: "mathModel", disabled: true }]
  },
  {
    name: "canvas",
    path: "/canvas",
    icon: "el-icon-document",
    disabled: true
  }
]
export default routes;
