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
import { ref, onMounted, defineProps, nextTick, watch } from 'vue'
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

// 使用父路由作为localStorage键的一部分，确保同一父路由下的子路由共享同一个激活状态
const getStorageKey = () => {
  const parentRoute = route.path.split('/')[1] || ''
  return `menuActiveIndex_${parentRoute}`
}

// 从localStorage读取激活项索引
const activeIndex = ref(localStorage.getItem(getStorageKey()) || '')

// 打印初始值
console.log('初始化 activeIndex:', activeIndex.value)

// 监听 activeIndex 变化，变化时打印新值
watch(
  activeIndex,
  (newValue) => {
    console.log('activeIndex 变化为:', newValue)
  },
  { deep: true }
)

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
  // 将激活项索引存入localStorage，使用父路由作为键的一部分
  localStorage.setItem(getStorageKey(), key)
  // 确保DOM更新后再移动指示器
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

// 监听路由变化，更新激活项
watch(
  () => route.path,
  (newPath) => {
    const storageKey = getStorageKey()
    const storedIndex = localStorage.getItem(storageKey)

    // 查找匹配当前路由的菜单项
    const matchedItem = props.menuList.find((item) => item.index === newPath)

    if (matchedItem) {
      // 如果当前路由有对应的菜单项，使用它作为激活项
      activeIndex.value = matchedItem.index
      localStorage.setItem(storageKey, matchedItem.index)
    } else if (storedIndex) {
      // 如果localStorage中有保存的激活项，使用它
      activeIndex.value = storedIndex
    } else {
      // 仅在没有存储值时设置默认激活项
      let newActiveIndex = ''
      if (newPath.includes('/home')) {
        // 检查是否有对应的菜单项存在
        const homeItem = props.menuList.find((item) => item.index === homeActive)
        newActiveIndex = homeItem ? homeActive : ''
      } else if (newPath.includes('/updates')) {
        const updatesItem = props.menuList.find((item) => item.index === updatesActive)
        newActiveIndex = updatesItem ? updatesActive : ''
      }
      activeIndex.value = newActiveIndex
      localStorage.setItem(storageKey, newActiveIndex)
    }

    // 确保DOM更新后再移动指示器
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
