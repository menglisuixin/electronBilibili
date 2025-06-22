<template>
  <div class="container" ref="headerContainer">
    <div class="logo-container">
      <HeaderLogo />
    </div>
    <div class="left-menu" :class="{ hidden: searchExpanded }">
      <router-view name="headerRoute" v-slot="{ Component }">
        <transition name="router-fade" mode="out-in">
          <component :is="Component" :menu-list="currentMenuList" />
        </transition>
      </router-view>
    </div>

    <div class="right">
      <div class="headerSearchContainer" ref="searchContainer">
        <HeaderSearch
          ref="searchComponent"
          @focus="expandSearch"
          @blur="collapseSearch"
          style="-webkit-app-region: no-drag"
        />
      </div>
      <div class="headerToolContainer">
        <transition name="btn-fade">
          <button
            class="temp-btn"
            @click="handlePlayWithSmallWindow"
            v-show="isSelectedRoute"
            style="-webkit-app-region: no-drag"
          >
            <el-icon>
              <svg
                t="1750520217965"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5133"
                width="32"
                height="32"
              >
                <path
                  d="M896 128a42.666667 42.666667 0 0 1 42.666667 42.666667v298.666666h-85.333334V213.333333H170.666667v597.333334h256v85.333333H128a42.666667 42.666667 0 0 1-42.666667-42.666667V170.666667a42.666667 42.666667 0 0 1 42.666667-42.666667h768z m0 426.666667a42.666667 42.666667 0 0 1 42.666667 42.666666v256a42.666667 42.666667 0 0 1-42.666667 42.666667h-341.333333a42.666667 42.666667 0 0 1-42.666667-42.666667v-256a42.666667 42.666667 0 0 1 42.666667-42.666666h341.333333zM286.165333 268.501333l96 96L469.333333 277.333333V512H234.666667l87.168-87.168-96-96 60.330666-60.330667z"
                  p-id="5134"
                ></path>
              </svg>
            </el-icon>
          </button>
        </transition>
        <el-divider direction="vertical" class="splitLine" />
        <HeaderTools style="-webkit-app-region: no-drag" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import HeaderSearch from './component/headerSearch/index.vue'
import menuList1 from './menuConfig1'
import menuList2 from './menuConfig2'
import HeaderTools from './component/headerTools/index.vue'
import HeaderLogo from './component/headerLogo/index.vue'
const route = useRoute()
const isSelectedRoute = ref(route.path === '/selected')

const currentMenuList = computed(() => {
  if (route.path.includes('/home')) {
    return menuList1
  } else if (route.path.includes('/updates')) {
    return menuList2
  }
  return menuList1
})
onMounted(() => {
  const unwatch = watch(
    () => route.path,
    (newPath) => {
      isSelectedRoute.value = newPath === '/selected'
    },
    { immediate: true }
  )

  // 在组件卸载时停止监听
  onUnmounted(() => {
    unwatch()
  })
})
const headerContainer = ref(null)
const searchContainer = ref(null)
const searchComponent = ref(null)
const searchExpanded = ref(false)
let originalTransform = ''

onMounted(() => {
  // 保存搜索框的原始样式
  nextTick(() => {
    originalTransform = searchComponent.value.$el.style.transform
  })
})
const expandSearch = () => {
  searchExpanded.value = true

  // 使用nextTick确保DOM更新完成后再计算位置
  nextTick(() => {
    centerSearchComponent()
  })
}

const collapseSearch = () => {
  searchExpanded.value = false

  // 恢复搜索框的原始位置
  nextTick(() => {
    searchComponent.value.$el.style.transform = originalTransform
  })
}

const centerSearchComponent = () => {
  if (!headerContainer.value || !searchComponent.value) return

  const headerRect = headerContainer.value.getBoundingClientRect()
  const searchRect = searchComponent.value.$el.getBoundingClientRect()

  // 搜索框当前相对于header的位置
  const currentOffset = searchRect.left - headerRect.left

  // 搜索框在header中居中所需的目标位置
  const targetOffset = (headerRect.width - searchRect.width) / 2

  // 需要移动的距离 = 目标位置 - 当前位置（负值表示向左移动）
  const translateX = targetOffset - currentOffset

  searchComponent.value.$el.style.transform = `translateX(${translateX}px) translateY(-50%)`
}
const handlePlayWithSmallWindow = () => {}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  transition: all 0.3s ease;
  box-sizing: border-box;
  padding-right: 20px;

  .logo-container {
    display: flex;
    align-items: center;
    padding: 0 20px;
  }

  .left-menu {
    display: flex;
    align-items: center;
    transition: all 0.3s ease;

    &.hidden {
      width: 0;
      overflow: hidden;
      opacity: 0;
    }
  }

  .right {
    display: flex;
    flex: 6;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;

    .headerSearchContainer {
      width: 100%;
      height: 100%;
      flex: 5;
      display: flex;
      justify-content: flex-end;
      position: relative;
      margin-right: 1.25rem;
      transition: width 0.3s ease;
    }

    .headerToolContainer {
      flex: 0;
      display: flex;
      align-items: center;
      .temp-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        width: 32px;
        height: 32px;
        border: none;
        border-radius: 4px;
        background-color: transparent;
        color: #666;
        cursor: pointer;
        // opacity: 0;
        // animation: move 0.3s ease;
        transition: all 0.3s ease;

        i {
          font-size: 16px;
        }
      }
      .temp-btn:hover {
        background-color: #eee;
      }
    }
  }
}

.btn-fade-enter-from,
.btn-fade-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.btn-fade-enter-to,
.btn-fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
