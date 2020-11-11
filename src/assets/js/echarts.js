import Vue from 'vue'
// 引入 ECharts 主模块 
const echarts = require('echarts/lib/echarts');
// 引入柱状图 
require('echarts/lib/chart/bar'); 
// 引入折线图 
require('echarts/lib/chart/line'); 
// 引入饼图 
require('echarts/lib/chart/pie'); 



Vue.prototype.$echarts = echarts