<!-- HeaderSearch组件 -->
<template>
  <div class="containerSearch" ref="containerSearch">
    <input
      type="text"
      class="inputBox"
      placeholder="请搜索你感兴趣的视频"
      ref="inputContent"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <el-icon class="searchIcon">
      <Search />
    </el-icon>
  </div>
</template>

<script setup>
import { ref, defineEmits, } from 'vue'

const emits = defineEmits(['focus', 'blur'])
const containerSearch = ref(null)
const inputContent = ref(null)

const handleFocus = () => {
  emits('focus')
  containerSearch.value.style.border = '1px solid #ff6699'
  containerSearch.value.style.backgroundColor = '#fff'
  containerSearch.value.style.width = '400px'
}

const handleBlur = () => {
  emits('blur')
  containerSearch.value.style.border = ''
  containerSearch.value.style.backgroundColor = ''
  containerSearch.value.style.width = ''
}
</script>

<style scoped lang="scss">
.containerSearch {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  box-sizing: border-box;
  width: 300px;
  height: 35px;
  padding: 0 20px;
  border-radius: 8px;
  background-color: #f1f2f3;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  .inputBox {
    flex: 1;
    border: none;
    outline: none;
    background-color: transparent;
    &::placeholder {
      color: rgba(128, 128, 128, 0.75);
    }
  }

  .searchIcon {
    cursor: pointer;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>
