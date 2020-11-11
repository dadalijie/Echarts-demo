<template>
  <div class="pageLine">
    <div class="option"></div>
    <div class="chart">
      <LineChart :idName="'LineChart'" :optionData="optionData"></LineChart>
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