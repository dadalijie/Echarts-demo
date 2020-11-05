<template>
  <div class="test">
    <div>
      <div>柱状图</div>
      <BarChart class="myEcharts" :idName="'BarChart'" :optionData="barOptionData"></BarChart>
    </div>
    <div>
      <div>折线图</div>
      <LineChart class="myEcharts" :idName="'LineChart'" :optionData="lineOptionData"></LineChart>
    </div>
    <div>
      <div>饼图</div>
      <PieChart class="myEcharts" :idName="'PieChart'" :optionData="pieOptionData"></PieChart>
    </div>
  </div>
</template>

<script>
import BarChart from '../../components/echarts/mix/bar'
import LineChart from '../../components/echarts/mix/line'
import PieChart from '../../components/echarts/mix/pie'
export default {
  name: 'test',
  components: {
    BarChart,
    LineChart,
    PieChart
  },
  data() {
    return {
      barOptionData: {},
      lineOptionData: {},
      pieOptionData: {},
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.test {
  padding: 20px;
  display: flex;
  & > div {
    margin-right: 20px;
  }
  .myEcharts {
    width: 200px; 
    height: 200px;
    border: 1px solid #ccc;
  }
}
</style>