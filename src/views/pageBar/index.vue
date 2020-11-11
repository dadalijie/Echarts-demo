<template>
  <div class="pageBar">
    <div class="option"></div>
    <div class="chart">
      <BarChart :idName="'BarChart'" :optionData="optionData"></BarChart>
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