<template>
  <div class="tool">
    <button class="tool-btn" @click="handleMinimize">
      <el-icon><Minus /></el-icon>
    </button>
    <button class="tool-btn" @click="handleMaximize">
      <template v-if="isMaximized">
        <el-icon><FullScreen /></el-icon>
      </template>
      <template v-else>
        <el-icon><CopyDocument /></el-icon>
      </template>
    </button>
    <button class="tool-btn" @click="handleClose">
      <el-icon><CloseBold /></el-icon>
    </button>
  </div>
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue'
const isMaximized = ref(false)

onMounted(() => {
  nextTick(() => {
    // 监听窗口状态变化事件
    window.api.onWindowMaximize(() => {
      isMaximized.value = true
    })
    window.api.onWindowUnmaximize(() => {
      isMaximized.value = false
    })
  })
})

// 最小化窗口方法
const handleMinimize = () => {
  if (window.api && window.api.minimizeWindow) {
    window.api.minimizeWindow()
  }
}

// 最大化/还原窗口方法
const handleMaximize = () => {
  if (window.api && window.api.toggleMaximizeWindow) {
    window.api.toggleMaximizeWindow()
  }
}

// 关闭窗口方法
const handleClose = () => {
  if (window.api && window.api.closeWindow) {
    window.api.closeWindow()
  }
}
</script>
<style scoped lang="scss">
.tool {
  width: 100%;
  display: flex;
  .tool-btn {
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 4px;
    background-color: transparent;
    color: #666;
    cursor: pointer;
    transition: all 0.2s ease;

    i {
      font-size: 16px;
    }
  }

  .tool-btn:hover {
    background-color: #eee;
  }
}
</style>
