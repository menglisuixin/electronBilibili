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
    <div
      class="active-indicator"
      ref="indicator"
      :style="{ backgroundColor: indicatorColor }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'

// 定义props
const props = defineProps(['menuList'])

const menuWrapper = ref(null)
const indicator = ref(null)
const route = useRoute()
// 定义指示器颜色
const indicatorColor = ref('#ff6699')

// 定义不同路由下的默认激活项
const homeActive = '/home/recommend'
const updatesActive = '/updates/comprehensive'

// 生成唯一的 localStorage 键
const getStorageKey = () => `menuActiveIndex_${route.path}`
// 从 localStorage 读取激活项索引，若没有则初始化为空
const activeIndex = ref(localStorage.getItem(getStorageKey()) || '')

const moveIndicator = () => {
  nextTick(() => {
    if (menuWrapper.value) {
      // 找到当前激活的菜单项
      const activeItem = menuWrapper.value.querySelector(`.el-menu-item.is-active`)
      if (activeItem) {
        const rect = activeItem.getBoundingClientRect()
        const parentRect = menuWrapper.value.getBoundingClientRect()

        // 设置指示器样式
        indicator.value.style.width = '18px'
        indicator.value.style.height = '2px'
        indicator.value.style.left = `${rect.left - parentRect.left + (rect.width - 18) / 2}px`
        indicator.value.style.bottom = '10px'
        indicator.value.style.transition = 'all .3s ease'
      }
    }
  })
}

const handleSelect = (key) => {
  // 点击菜单时更新激活项
  activeIndex.value = key
  // 将激活项索引存入 localStorage，使用唯一键
  localStorage.setItem(getStorageKey(), key)
  // 确保 DOM 更新后再移动指示器
  nextTick(() => {
    moveIndicator()
    // 这里可根据需求动态修改指示器颜色
    // 示例：固定颜色
    indicatorColor.value = '#ff6699'
  })
}

// 组件挂载时初始化指示器位置
onMounted(() => {
  nextTick(() => {
    moveIndicator()
  })
})

// 组件卸载时清除 localStorage 中的数据
onUnmounted(() => {
  localStorage.removeItem(getStorageKey())
})

// 监听路由变化，更新激活项
watch(
  () => route.path,
  (newPath) => {
    let newActiveIndex = ''
    // 根据当前路由路径设置默认激活项
    if (newPath.includes('/home')) {
      newActiveIndex = homeActive
    } else if (newPath.includes('/updates')) {
      newActiveIndex = updatesActive
    }
    // 优先使用 localStorage 中的值，使用新路径对应的键
    const storedIndex = localStorage.getItem(`menuActiveIndex_${newPath}`)
    if (storedIndex) {
      activeIndex.value = storedIndex
    } else {
      activeIndex.value = newActiveIndex
    }
    // 确保 DOM 更新后再移动指示器
    nextTick(() => {
      moveIndicator()
      // 路由变化时更新指示器颜色
      indicatorColor.value = '#ff6699'
    })
  },
  { immediate: true } // 组件挂载时立即执行一次
)
</script>

<style scoped>
/* 样式保持不变 */
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
