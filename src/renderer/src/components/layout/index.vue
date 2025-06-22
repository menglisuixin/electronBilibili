<template>
  <div class="layout">
    <!-- 给 Header 和 NavBar 添加拖拽类 -->
    <Header class="header drag-region"></Header>
    <NavBar class="navbar drag-region"></NavBar>
    <Main class="main"></Main>
  </div>
</template>
<script setup>
import Header from '../header/index.vue'
import NavBar from '../navbar/index.vue'
import Main from '../main/index.vue'
</script>
<style scoped>
.layout {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-areas:
    'navbar header'
    'navbar main';
  grid-template-columns: 3.75rem 1fr;
  grid-template-rows: 3.75rem 1fr;
  overflow: hidden;
}
.header {
  width: 100%;
  height: 100%;
  grid-area: header;
  box-sizing: border-box;
  border-bottom: 2px solid #f6f7f8;
}
.navbar {
  height: 100vh;
  grid-area: navbar;
  background-color: #f1f2f3;
  box-sizing: border-box;
  border: 1px solid #f1f2f3;
}
/* 添加拖拽样式 */

.main {
  grid-area: main;
  overflow-y: scroll;
}
</style>
