import echarts_index from "../views/echarts_index.vue";
import lineChartOne from "../components/Echats/lineChartOne.vue";

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
      { name: "折线图", path: "line", component: lineChartOne },
      { name: "饼图", path: "pie", component: lineChartOne, disabled: true },
      { name: "柱状图", path: "bar", component: lineChartOne, disabled: true }
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
