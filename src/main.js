import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import echarts from "echarts";
import * as Three from "three";
import _ from "lodash";
import "./plugins/element.js";
import './assets/basic_style.less';

Vue.config.productionTip = false;
// Vue.prototype.$echarts = echarts
global.echarts = echarts;
global.THREE = Three;
// global._ = _
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")