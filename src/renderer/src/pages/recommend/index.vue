<template>
  <div class="recommendContainer">
    <!-- 循环渲染推荐项 -->
    <div v-for="item in recommendList" :key="item.id" class="box">
      <img :src="item.image" :alt="item.title" class="box-image" />
      <h3 class="box-title">{{ item.title }}</h3>
      <p class="box-description">{{ item.description }}</p>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import recommendList from './recommendConfig.js'
</script>
<style scoped lang="scss">
.recommendContainer {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  box-sizing: border-box;
  overflow: hidden;
}

@function calculate-item-width($columns) {
  @return calc((100% - (20px * (#{$columns} - 1))) / #{$columns});
}

.box {
  background-color: palegoldenrod;
  box-sizing: border-box;
  overflow: hidden;
  flex: 0 0 calculate-item-width(4);
  height: calc(calculate-item-width(4) * 3 / 4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

.box-image {
  width: 100%;
  height: auto;
  max-height: 60%;
  object-fit: cover;
}

.box-title {
  margin: 10px 0;
  font-size: 1rem;
  text-align: center;
}

.box-description {
  font-size: 0.875rem;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

@media (min-width: 1501px) {
  .box {
    flex: 0 0 calculate-item-width(5);
    height: calc(calculate-item-width(5) * 3 / 4);
  }
}

@media (max-width: 1500px) {
  .box {
    flex: 0 0 calculate-item-width(4);
    height: calc(calculate-item-width(4) * 3 / 4);
  }
}
</style>
