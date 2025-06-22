<template>
  <div class="menu-wrapper" ref="menuWrapper">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      :router="true"
      :ellipsis="false"
      style="-webkit-app-region: no-drag"
    >
      <el-menu-item v-for="item in menuList" :key="item.id" :index="item.index">
        {{ item.title }}
      </el-menu-item>
    </el-menu>
    <div class="active-indicator" ref="indicator"></div>
  </div>
</template>
<script setup>
import { ref, onMounted, defineProps, nextTick } from 'vue'
defineProps(['menuList'])
const menuWrapper = ref(null)
const indicator = ref(null)
const activeIndex = ref('/recommend')
const handleSelect = (key) => {
  activeIndex.value = key
  moveIndicator()
}
const moveIndicator = () => {
  nextTick(() => {
    if (menuWrapper.value) {
      const activeItem = menuWrapper.value.querySelector(`.el-menu-item.is-active`)
      if (activeItem) {
        const rect = activeItem.getBoundingClientRect()
        const parentRect = menuWrapper.value.getBoundingClientRect()
        indicator.value.style.width = '18px'
        indicator.value.style.height = '2px'
        indicator.value.style.left = `${rect.left - parentRect.left + (rect.width - 18) / 2}px`
        indicator.value.style.bottom = '10px'
        indicator.value.style.backgroundColor = '#ff6699'
        indicator.value.style.transition = 'all .3s ease'
      }
    }
  })
}
onMounted(() => {
  moveIndicator()
})
</script>
<style scoped>
.menu-wrapper {
  height: 62px;
  position: relative;
  transition: all 0.3s ease;

  .el-menu-demo {
    flex: 1;
    --el-menu-active-color: #ff6699;
    --el-menu-hover-bg-color: #fff;
    border-bottom: 0;
    display: flex;
    justify-content: space-between;
    .el-menu-item {
      width: 3.9375rem;
      border-bottom: 0;
      font-size: 16px;
      &.is-active {
        border-bottom: 0;
      }
    }
  }

  .active-indicator {
    position: absolute;
    z-index: 10;
    pointer-events: none;
    border-radius: 1px;
  }
}
</style>
