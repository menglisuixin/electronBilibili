<template>
  <div class="mainContainer">
    <router-view v-slot="{ Component }">
      <transition name="router-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script setup></script>
<style scoped>
.mainContainer {
  box-sizing: border-box;
  padding: 1.25rem 2.5rem;
}
</style>
