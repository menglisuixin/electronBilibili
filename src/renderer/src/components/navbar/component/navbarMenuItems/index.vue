<template>
  <div :class="className">
    <el-menu-item
      v-for="item in menuList"
      :key="item.id"
      :index="item.index"
      class="itemBox"
      @click="$emit('item-click', item.id)"
      @mouseenter="handleItemHover(item.id, $event)"
      @mouseleave="handleItemLeave($event)"
      :class="{ active: currentId === item.id && ![6, 7, 8].includes(item.id) }"
    >
      <label :title="item.itemName">
        <el-icon
          v-html="getIcon(item, currentHoverId === item.id || currentId === item.id)"
        ></el-icon>
      </label>
      <p class="title" :class="{ active: currentId === item.id }">{{ item.title }}</p>
    </el-menu-item>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'

// 定义属性
defineProps({
  menuList: {
    type: Array,
    required: true
  },
  className: {
    type: String,
    default: ''
  },
  currentId: {
    type: Number,
    default: null
  }
})

const emit = defineEmits(['item-click'])
// 存储当前悬停项的 id
const currentHoverId = ref(null)

// 动态生成图标，根据选中状态设置颜色
const getIcon = (item, isActive) => {
  // 复制原始图标字符串
  let iconHtml = item.icon

  // 替换 fill 属性值
  if (isActive) {
    iconHtml = iconHtml.replace(/#515151/g, '#ff6699')
  } else {
    iconHtml = iconHtml.replace(/#ff6699/g, '#515151')
  }

  return iconHtml
}

// 处理鼠标悬停事件
const handleItemHover = (id, event) => {
  currentHoverId.value = id
  const titleElement = event.currentTarget.querySelector('.title')
  if (titleElement) {
    titleElement.classList.add('hoverActive')
  }
}

// 处理鼠标离开事件
const handleItemLeave = (event) => {
  currentHoverId.value = null
  const titleElement = event.currentTarget.querySelector('.title')
  if (titleElement) {
    titleElement.classList.remove('hoverActive')
  }
}
</script>

<style scoped>
.itemBox {
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  padding-left: 0 !important;
  transition: all 0.3s;
  label {
    display: inline-flex;
  }
}

.title {
  height: 20px;
  line-height: 20px;
  color: #515151;
  transition: color 0.3s;
}

.title.active {
  color: #ff6699;
}
.hoverActive {
  color: #ff6699;
}
.el-icon svg {
  transition: fill 0.3s;
}
</style>
