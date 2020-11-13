<template>
  <div class="pageBar">
    <div class="option">
      <div class="option-components">
        <div>常用组件</div>
          <el-select
            v-model="explain"
            multiple
            size="small "
            collapse-tags
            @change="changeExplainOptions"
            placeholder="请选择组件">
            <el-option
              v-for="item in explainOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </div>
      <div class="option-components-explain">
        <span>含义: </span>
        <span>{{propertyExplain.components[currentExplain]}}</span>
      </div>
      <div class="option-components">
        <div>常用属性</div>
          <el-select
            v-model="property"
            multiple
            size="small "
            collapse-tags
            @change="changePropertyOptions"
            placeholder="请选择属性">
            <el-option
              v-for="item in propertyOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </div>
      <div class="option-components-property">
        <div>
          <span>含义: </span>
          <span>{{proExplain}}</span>
        </div>
        <div>
          <span>类型: </span>
          <span>{{protyType}}</span>
        </div>
      </div>
      <div class="option-more">
        <a
          :href="'https://echarts.apache.org/zh/option.html#'+currentExplain"
          target="blank"
        >查看更多属性</a>
      </div>
    </div>
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