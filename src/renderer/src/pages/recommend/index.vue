<template>
  <div class="recommendContainer">
    <!-- 循环渲染推荐项 -->
    <div v-for="item in recommendList" :key="item.id" class="box">
      <!-- 添加鼠标事件监听，传入当前项的 id -->
      <div
        class="videoBox"
        @mouseenter="handleMouseEnter(item.id)"
        @mouseleave="handleMouseLeave(item.id)"
        :class="{ 'is-hovered': hoveredItemId === item.id }"
      >
        <img src="../../assets/1.png" :alt="item.title" class="box-image" />
        <div class="playLogoBox">
          <el-icon>
            <svg
              t="1750604328561"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="15205"
              width="32"
              height="32"
            >
              <path
                d="M725.632 827.904c-63.104 42.88-136.832 65.408-213.504 65.408-210.304 0-381.312-171.008-381.312-381.184 0-75.52 22.016-148.608 63.744-211.072 8.576-12.672 4.992-29.952-7.68-38.528-12.672-8.576-29.952-4.992-38.528 7.68-47.872 71.68-73.088 155.392-73.088 241.92 0 240.768 195.968 436.608 436.864 436.608 87.68 0 172.416-25.856 244.736-74.88 12.672-8.576 16-25.856 7.424-38.656-8.704-12.544-25.984-15.872-38.656-7.296zM512 75.136c-93.312 0-182.272 28.928-257.408 83.84-12.416 9.088-15.104 26.496-6.016 38.784 9.088 12.416 26.496 15.104 38.784 6.016 65.536-47.744 143.232-73.088 224.64-73.088 210.176 0 381.184 171.136 381.184 381.312 0 81.408-25.216 159.104-73.088 224.512-9.088 12.416-6.272 29.824 6.016 38.784 4.864 3.712 10.624 5.376 16.384 5.376 8.576 0 17.024-3.968 22.4-11.52 54.912-75.136 83.84-164.096 83.84-257.28C948.864 271.104 753.024 75.136 512 75.136z m-84.864 611.968c4.864 0 9.6-1.152 13.952-3.84l251.904-145.408c8.576-4.864 13.824-14.08 13.824-24.064 0-9.984-5.248-19.072-13.824-24.064L441.216 344.32c-8.704-4.864-19.2-4.864-27.904 0-8.576 4.864-13.824 14.08-13.824 24.064V659.2c0 9.984 5.248 19.072 13.824 24.064 4.224 2.56 9.088 3.84 13.824 3.84z m27.904-270.592l168.576 97.28-168.576 97.28v-194.56z"
                fill="#ffffff"
                p-id="15206"
              ></path>
            </svg>
          </el-icon>
        </div>
        <div class="dataBox">
          <div class="logoBox">
            <div class="logoItem">
              <el-icon>
                <svg
                  t="1750602053789"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="9103"
                  width="32"
                  height="32"
                >
                  <path
                    d="M694.418292 6.972794H329.608314C151.72326 6.972794 6.976888 151.704841 6.976888 329.605244v364.803838c0 177.913707 144.746372 322.618124 322.631426 322.618124h364.809978c177.900404 0 322.604821-144.703394 322.60482-322.618124V329.605244c0-177.900404-144.704417-322.63245-322.60482-322.63245z m259.171219 687.436288c0 143.139785-116.043714 259.184523-259.171219 259.184522H329.608314c-143.125459 0-259.17122-116.044738-259.171219-259.184522V329.605244c0-143.154111 116.044738-259.170196 259.171219-259.170196h364.809978c143.126482 0 259.17122 116.017108 259.171219 259.170196v364.803838z"
                    fill="#ffffff"
                    p-id="9104"
                  ></path>
                  <path
                    d="M136.590638 592.777583c11.679994 0 21.148627-9.46761 21.148627-21.148627V321.560027c0-90.35878 73.479378-163.852484 163.823832-163.852484h380.887109c38.466003 0 75.888236 13.666227 105.365535 38.46498 8.903769 7.510029 22.261982 6.369045 29.81499-2.535748 7.49468-8.975401 6.369045-22.304961-2.593053-29.828293-37.084543-31.195427-84.17393-48.399217-132.586449-48.399216H321.563097c-113.663509 0-206.135412 92.486229-206.135412 206.150761v250.068929c-0.001023 11.681017 9.481936 21.148627 21.162953 21.148627zM866.288364 304.610017v397.844282c0 90.344454-73.493704 163.837135-163.838158 163.837135H321.563097c-90.344454 0-163.823832-73.492681-163.823832-163.837135 0-11.665667-9.468633-21.14965-21.148627-21.14965-11.681017 0-21.163976 9.483983-21.163976 21.14965 0 113.677835 92.471903 206.149738 206.135412 206.149738h380.887109c113.677835 0 206.164064-92.471903 206.164064-206.149738V304.610017c0-11.695343-9.495239-21.148627-21.162953-21.148627-11.693297 0-21.16193 9.454307-21.16193 21.148627z"
                    fill="#ffffff"
                    p-id="9105"
                  ></path>
                  <path
                    d="M386.939953 333.451845c-6.551193-3.255131-14.356957-2.930743-20.584787 0.943486a21.125091 21.125091 0 0 0-10.032473 17.978431v319.278059c0 7.342207 3.804645 14.132854 10.032473 18.008106a21.112811 21.112811 0 0 0 11.13048 3.156894c3.226478 0 6.467282-0.761338 9.454307-2.241037l319.286245-159.652844c7.158013-3.579518 11.665667-10.905352 11.665668-18.92294s-4.507655-15.329096-11.665668-18.92294l-319.286245-159.625215z m11.681017 303.990918V386.613519L649.471703 512 398.62097 637.442763z"
                    fill="#ffffff"
                    p-id="9106"
                  ></path>
                </svg>
              </el-icon>
              <div class="textItem">{{ item.commentCounts }}</div>
            </div>
            <div class="logoItem">
              <el-icon>
                <svg
                  t="1750602269150"
                  class="icon"
                  viewBox="0 0 1237 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="13264"
                  width="32"
                  height="32"
                >
                  <path
                    d="M992 1024a32 32 0 1 1 0-64 181.333333 181.333333 0 0 0 181.333333-181.333333v-533.333334a181.333333 181.333333 0 0 0-181.333333-181.333333h-746.666667a181.333333 181.333333 0 0 0-181.333333 181.333333v533.333334A181.866667 181.866667 0 0 0 245.333333 960a32 32 0 1 1 0 64A245.333333 245.333333 0 0 1 0 778.666667v-533.333334A245.333333 245.333333 0 0 1 245.333333 0h746.666667a245.333333 245.333333 0 0 1 245.333333 245.333333v533.333334a245.333333 245.333333 0 0 1-245.333333 245.333333z"
                    fill="#ffffff"
                    p-id="13265"
                  ></path>
                  <path
                    d="M298.666667 317.333333m37.333333 0l565.333333 0q37.333333 0 37.333334 37.333334l0 0q0 37.333333-37.333334 37.333333l-565.333333 0q-37.333333 0-37.333333-37.333333l0 0q0-37.333333 37.333333-37.333334Z"
                    fill="#ffffff"
                    p-id="13266"
                  ></path>
                  <path
                    d="M298.666667 584m37.333333 0l565.333333 0q37.333333 0 37.333334 37.333333l0 0q0 37.333333-37.333334 37.333334l-565.333333 0q-37.333333 0-37.333333-37.333334l0 0q0-37.333333 37.333333-37.333333Z"
                    fill="#ffffff"
                    p-id="13267"
                  ></path>
                  <path
                    d="M352 960m32 0l469.333333 0q32 0 32 32l0 0q0 32-32 32l-469.333333 0q-32 0-32-32l0 0q0-32 32-32Z"
                    fill="#ffffff"
                    p-id="13268"
                  ></path>
                </svg>
              </el-icon>
              <div class="textItem">{{ item.playCounts }}</div>
            </div>
          </div>
          <div class="text">{{ item.duration }}</div>
        </div>
      </div>
      <div class="box-description">{{ item.description }}</div>
      <div class="box-title">{{ item.author }}·{{ item.time }}</div>
    </div>
  </div>
</template>
<script setup>
import recommendList from './recommendConfig.js'
import { ref } from 'vue'

// 定义响应式变量，记录当前 hover 的项的 id
const hoveredItemId = ref(null)
let timeoutId

// 鼠标移入事件处理函数
const handleMouseEnter = (id) => {
  hoveredItemId.value = id
  // 0.3 秒后隐藏伪元素和 dataBox，显示 playLogoBox
  timeoutId = setTimeout(() => {
    // 这里利用 CSS 类来控制显示隐藏，无需额外逻辑
  }, 0)
}

// 鼠标移出事件处理函数
const handleMouseLeave = (id) => {
  clearTimeout(timeoutId)
  if (hoveredItemId.value === id) {
    hoveredItemId.value = null
  }
}
</script>
<style scoped lang="scss">
.recommendContainer {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  box-sizing: border-box;
  overflow: hidden;
  .box {
    box-sizing: border-box;
    overflow: hidden;
    flex: 0 0 calculate-item-width(4);
    aspect-ratio: 4 / 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    .videoBox {
      width: 100%;
      position: relative;
      display: flex;
      transition: transform 0.3s ease; // 添加过渡效果
      &::before {
        content: '';
        display: block;
        width: 100%;
        height: 33%;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
        position: absolute;
        bottom: 0;
        border-radius: 0 0 8px 8px;
        transition: opacity 0.3s ease; // 添加过渡效果
      }
      &.is-hovered {
        transform: scale(1.05); // 鼠标移入时放大
        &::before {
          opacity: 0; // 鼠标移入时隐藏伪元素
        }
        .dataBox {
          opacity: 0; // 鼠标移入时隐藏 dataBox
        }
        .playLogoBox {
          opacity: 1; // 鼠标移入时显示 playLogoBox
        }
      }
    }
    .playLogoBox {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2rem;
      height: 2rem;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 8px;
      right: 5px;
      top: 5px;
      opacity: 0; // 默认隐藏
      transition: opacity 0.3s ease; // 添加过渡效果
      .el-icon {
        font-size: 30px;
      }
    }
    .dataBox {
      color: #fff;
      box-sizing: border-box;
      width: 100%;
      height: 33%;
      padding: 0 5px;
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      opacity: 1; // 默认显示
      .logoBox {
        width: 100%;
        display: flex;
        .logoItem {
          display: flex;
          align-items: center;
          margin-right: 20px;
          .textItem {
            margin-left: 5px;
          }
        }
      }
    }
    .box-image {
      width: 100%;
      /* 设置图片宽高比为 2:1 */
      aspect-ratio: 2 / 1;
      object-fit: cover;
      border-radius: 8px;
    }

    .box-title {
      color: rgba(0, 0, 0, 0.482);
      font-size: 0.625rem;
    }

    .box-description {
      font-size: 0.875rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      /* 补充标准属性以提高兼容性 */
      line-clamp: 3;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
}

@function calculate-item-width($columns) {
  @return calc((100% - (20px * (#{$columns} - 1))) / #{$columns});
}

@media (min-width: 1501px) {
  .box {
    flex: 0 0 calculate-item-width(5);
    /* 使用 aspect-ratio 锁定宽高比为 4:3 */
    aspect-ratio: 4 / 3;
  }
}

@media (max-width: 1500px) {
  .box {
    flex: 0 0 calculate-item-width(4);
    /* 使用 aspect-ratio 锁定宽高比为 4:3 */
    aspect-ratio: 4 / 3;
  }
}
</style>
