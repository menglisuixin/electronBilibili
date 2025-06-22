<template>
  <div class="container drag-region">
    <button class="svg-button" style="-webkit-app-region: no-drag">
      <el-icon
        ><svg
          t="1750486329145"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="23816"
          width="32"
          height="32"
        >
          <path
            d="M395.21518 513.604544l323.135538-312.373427c19.052938-18.416442 19.052938-48.273447 0-66.660212-19.053961-18.416442-49.910737-18.416442-68.964698 0L291.75176 480.290811c-19.052938 18.416442-19.052938 48.273447 0 66.660212l357.633237 345.688183c9.525957 9.207709 22.01234 13.796214 34.497699 13.796214 12.485359 0 24.971741-4.588505 34.466999-13.82896 19.052938-18.416442 19.052938-48.242747 0-66.660212L395.21518 513.604544z"
            fill="#515151"
            p-id="23817"
          ></path></svg
      ></el-icon>
    </button>
  </div>
</template>
<script setup></script>
<style scoped>
.container {
  width: 3.75rem;
  height: 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .svg-button {
    width: 32px;
    height: 32px;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }
  .svg-button:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>
