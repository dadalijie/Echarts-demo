<template>
  <div class="myecharts">
    <div :id="idName"></div>
  </div>
</template>

<script>
// 引入柱状图 
require('echarts/lib/chart/bar'); 

export default {
  props: ['optionData', 'idName'],
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const optionKeys = Object.keys(this.optionData)
      const myChart = this.$echarts.init(document.getElementById(this.idName));
      myChart.setOption(this.options);
    }
  },
  watch: {
    optionData: {
      handler(v) {
        this.init()
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
.myecharts,
.myecharts > div {
  width: 100%;
  height: 100%;
}
</style>