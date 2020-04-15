import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import echarts from "echarts";
import * as Three from "three"
import "./plugins/element.js";

Vue.config.productionTip = false;
// Vue.prototype.$echarts = echarts
global.echarts = echarts
global.Three = Three
// Vue.use(echarts)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
