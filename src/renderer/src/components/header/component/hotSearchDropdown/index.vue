<template>
  <div class="hot-search-dropdown">
    <h3>热搜</h3>
    <ul>
      <li v-for="(item, index) in hotSearchList" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// 模拟热搜数据，实际可从接口获取
const hotSearchList = ref([
  '应急管理部通报表',
  '我被困在了09年哔',
  '单乙醇',
  '灵笼冉冰回归',
  '绝区零绝世豪虎',
  '直击以色列伊',
  '特朗普两周内决定是否',
  '苏超爆火背后的底',
  '明日方舟焰烬曙明',
  '2个大学生混入5个职场人'
])
</script>

<style scoped>
.hot-search-dropdown {
  position: absolute;
  width: 400px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.hot-search-dropdown h3 {
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
}
.hot-search-dropdown ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.hot-search-dropdown li {
  padding: 4px 0;
  font-size: 12px;
  cursor: pointer;
  transition: color 0.2s;
}
.hot-search-dropdown li:hover {
  color: #ff6699;
}
</style>
