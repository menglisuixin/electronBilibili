<template>
  <div class="recommendContainer">
    <!-- 循环渲染推荐项 -->
    <div v-for="item in recommendList" :key="item.id" class="box">
      <img src="../../assets/1.png" :alt="item.title" class="box-image" />
      <div class="box-description">{{ item.description }}</div>
      <div class="box-title">{{ item.author }}·{{ item.time }}</div>
    </div>
  </div>
</template>
<script setup>
// 导入了 ref 但未使用，可移除
// import { ref } from 'vue'
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
  aspect-ratio: 4 / 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;

  .box-image {
    width: 100%;
    /* 设置图片宽高比为 2:1 */
    aspect-ratio: 2 / 1;
    object-fit: cover;
    border-radius: 8px;
  }

  .box-title {
    color: rgba(0, 0, 0, 0.482);
    font-size: 0.625rem;
  }

  .box-description {
    font-size: 0.875rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    /* 补充标准属性以提高兼容性 */
    line-clamp: 3;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}
@media (min-width: 1501px) {
  .box {
    flex: 0 0 calculate-item-width(5);
    /* 使用 aspect-ratio 锁定宽高比为 4:3 */
    aspect-ratio: 4 / 3;
  }
}

@media (max-width: 1500px) {
  .box {
    flex: 0 0 calculate-item-width(4);
    /* 使用 aspect-ratio 锁定宽高比为 4:3 */
    aspect-ratio: 4 / 3;
  }
}
</style>
