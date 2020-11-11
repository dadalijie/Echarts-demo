<template>
  <div class="pagePie">
    <div class="option"></div>
    <div class="chart">
      <PieChart :idName="'PieChart'" :optionData="optionData"></PieChart>
    </div>
  </div>
</template>

<script>
import indexJs from './index'
export default {
  mixins: [indexJs]
};
</script>

<style lang="scss" scoped>
</style>