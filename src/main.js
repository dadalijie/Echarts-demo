import Vue from 'vue'
import App from './App'
import router from './router'
//清除浏览器默认样式
import "@/assets/css/reset.css"
// 引入 ECharts 主模块 
const echarts = require('echarts/lib/echarts');
// 引入柱状图 
require('echarts/lib/chart/bar'); 
// 引入折线图 
require('echarts/lib/chart/line'); 
// 引入饼图 
require('echarts/lib/chart/pie'); 

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount("#app")
