<!--
 * @Description: 卡片的外包框
 * @Author: 李明宇
 * @Date: 2022-02-26 17:53:18
-->
<template>
  <div :class="bem()">
    <header :class="bem('header')">
      <nav>
        <span
          v-for="(item, index) in titleArr"
          :key="index"
          @click="onTitleClick(index)"
          :class="bem('title', { active: index === activeIndex })"
          >{{ item }}</span
        >
      </nav>
      <slot name="button"></slot>
    </header>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { createBEM } from '@/utils/bem';
import { computed } from 'vue';

interface IProp {
  titles: string | string[];
  activeIndex?: number;
}

interface IEmits {
  (e: 'update:activeIndex', index: number): void;
}

const bem = createBEM('card-wrapper');

const props = withDefaults(defineProps<IProp>(), { activeIndex: 0 });
const emits = defineEmits<IEmits>();

const titleArr = computed(() => {
  return Array.isArray(props.titles) ? props.titles : [props.titles];
});

function onTitleClick(index: number) {
  emits('update:activeIndex', index);
}
</script>

<style lang="scss" scoped>
.card-wrapper {
  box-sizing: border-box;
  background-color: #fff;
  &__header {
    line-height: 0.86rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    position: relative;
    max-width: 5rem;
    flex: 1;
    display: block;
    font-size: 18px;
    font-weight: bold;
    color: #969696;
    padding: 0 0.3rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    &:not(:last-child)::after {
      position: absolute;
      display: block;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      content: '';
      background: #e2e2e2;
      width: 1px;
      height: 80%;
    }

    &:first-of-type {
      padding-left: 0;
    }

    &--active {
      color: #343434;
      font-size: 20px;
    }
  }
}
</style>
