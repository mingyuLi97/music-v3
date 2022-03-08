<!--
 * @Description: 正方形的卡片
 * @Author: 李明宇
 * @Date: 2022-02-26 23:01:27
-->
<template>
  <div :class="bem()">
    <div :class="bem('container')">
      <span>{{ numFilter(props.count) }}</span>
      <img :src="props.uiElement.image?.imageUrl" alt="" />
    </div>
    <p :class="bem('title')">{{ props.uiElement.mainTitle?.title }}</p>
  </div>
</template>

<script setup lang="ts">
import { createBEM, numFilter } from '@/utils';
import { IUIElement } from '@types';

export interface ISquareItemOption {
  count: number;
  uiElement: IUIElement;
}
const props = defineProps<ISquareItemOption>();

const bem = createBEM('square-item');
</script>

<style lang="scss" scoped>
.square-item {
  position: relative;
  min-width: 2.12rem;
  height: 3rem;
  overflow-y: visible;
  margin-top: 0.1rem;

  &__container {
    position: relative;
    width: 2.12rem;
    height: 2.12rem;

    &::before {
      content: '';
      position: absolute;
      display: block;
      width: 1.8rem;
      height: 1.7rem;
      background-color: #f2f4f3;
      top: 0;
      left: 50%;
      transform: translate(-50%, -0.07rem);
      border-radius: 0.2rem;
      z-index: 0;
    }

    span {
      position: absolute;
      z-index: 1;
      right: 0.1rem;
      top: 0.1rem;
      line-height: 0.3rem;
      padding: 1px 0.15rem;
      border-radius: 0.3rem;
      font-size: 12px;
      font-weight: 100;
      color: #ffffff;
      background-color: #a2a18f;
    }
    img {
      position: absolute;
      border-radius: 0.3rem;
      border: 0.5px solid #f2f2f2;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__title {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
