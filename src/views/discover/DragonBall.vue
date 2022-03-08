<!--
 * @Description: 首页-发现-圆形图标入口列表
 * @Author: 李明宇
 * @Date: 2022-02-23 22:16:37
-->
<template>
  <div :class="bem()">
    <swiper :slides-per-view="5">
      <swiper-slide v-for="(ball, index) in balls" :key="index">
        <div :class="bem('container')">
          <div class="icon">
            <span v-if="index === 0">{{ 23 }}</span>
            <img :src="ball.iconUrl" />
          </div>
          <span>{{ ball.name }}</span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import {
  getHomepageDragonBall,
  IHomePageDragonBall
} from '@/service/interface/home';
import { createBEM } from '@/utils/bem';

const bem = createBEM('discover-page-ball');

const balls = reactive<IHomePageDragonBall[]>([]);

getHomepageDragonBall().then(res => {
  balls.push(...res.data);
});
</script>

<style lang="scss" scoped>
.discover-page-ball {
  height: 1.6rem;
  margin: 0.3rem 0;
  box-sizing: border-box;

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    .icon {
      position: relative;
      width: 1rem;
      height: 1rem;
      background-color: #fe363f;
      border-radius: 50%;
      margin-bottom: 0.2rem;
      span {
        color: #fe363f;
        font-size: 12px;
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    img {
      width: 1rem;
      height: 1rem;
    }
    span {
      color: #656565;
    }
  }
}
</style>
