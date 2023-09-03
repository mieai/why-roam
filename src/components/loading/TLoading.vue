<template>
  <div class="loading">
    <div class="block-bg">
      <img src="@/assets/img/home/1f535.png" alt="loading" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.loading {
  position: fixed;
  inset: 0;
  z-index: 421;
  background: rgba(255, 255, 255, 0.4);

  display: flex;
  align-items: center;
  justify-content: center;

  .block-bg {
    width: 142px;
    height: 142px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(@/assets/img/home/loading-bg.png) 0 5px / cover;

    img {
      width: 40px;
      height: 40px;
      transition: transform 0.5s ease; /* 添加过渡效果 */
      animation: slide 3s infinite; /* 添加自动滑动动画效果 */
    }

    img:hover {
      transform: translateX(20px); /* 添加滑动效果 */
    }

    @keyframes slide {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(25px);
      }

      75% {
        transform: translateY(-25px);
      }

      100% {
        transform: translateY(0);
      }
    }
  }
}
</style>
