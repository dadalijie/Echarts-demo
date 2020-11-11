<template>
  <div class="home">
    <el-container>
      <el-aside>
        <ul class="nameList">
          <li
            v-for="(item, index) in nameList"
            :key="'nameList'+index"
            :class="index === currentIndex ? 'active' : ''"
            @click="changeEcharts(item.path, index)"
          >
            <div>
              <div :class="['iconfont', item.iconClass]"></div>
            </div>
            <div>{{item.name}}</div>
          </li>
        </ul>
      </el-aside>
      <el-main>
        <div class="title">
          <div>{{nameList[currentIndex].name}}</div>
          <div>{{nameList[currentIndex].type}}</div>
        </div>
        <div class="main">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import indexJs from './index'
export default {
  mixins: [indexJs]
};
</script>

<style lang="scss">
@import './index.scss';
</style>