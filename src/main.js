import Vue from 'vue'
import App from './App'
import router from './router'
// 清除浏览器默认样式
import "@/assets/css/reset.css"
// 引入 ECharts
import "@/assets/js/echarts.js"
// 引入 ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount("#app")
