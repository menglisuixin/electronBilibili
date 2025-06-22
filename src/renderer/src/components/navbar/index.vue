<template>
  <div class="container">
    <NavbarBack />
    <el-menu class="el-menu-vertical-demo" :router="true" style="-webkit-app-region: no-drag">
      <NavbarMenuItems
        :menuList="topMenuList"
        class="outer"
        :currentId="currentId"
        @item-click="handleItemClick"
      />
      <NavbarMenuItems
        :menuList="bottomMenuList"
        class="inner"
        :currentId="currentId"
        @item-click="handleItemClick"
      >
      </NavbarMenuItems>
    </el-menu>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import menuList from './menuConfig.js'
import NavbarBack from './component/navbarBack/index.vue'
import NavbarMenuItems from './component/navbarMenuItems/index.vue'
const topMenuList = computed(() => menuList.slice(0, 4))
const bottomMenuList = computed(() => menuList.slice(4))
// 定义共用的 currentId，默认选中第一个菜单项
const currentId = ref(menuList[0].id)
// 处理菜单项点击事件
const handleItemClick = (id) => {
  // 排除 id 为 6、7、8 的菜单项
  if (![6, 7, 8].includes(id)) {
    currentId.value = id
  }
  if (id == 8) {
    console.log('切换主题');
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .el-menu-vertical-demo {
    width: 100%;
    border: 0;
    background-color: transparent;
    box-sizing: border-box;
    padding-top: 0.625rem;
    height: calc(100% - 3.75rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
