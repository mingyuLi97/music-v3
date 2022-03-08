<!--
 * @Description: 卡片右上角的按钮
 * @Author: 李明宇
 * @Date: 2022-02-26 23:01:27
-->
<template>
  <button @click="onClick">{{ props.config?.text }}</button>
</template>

<script setup lang="ts">
import { IUIElement } from '@types';

interface IEmits {
  (e: 'click', action: string): void;
}

const props = defineProps<{ config: IUIElement['button'] }>();
const emits = defineEmits<IEmits>();

function onClick() {
  console.log(`[CardButton] onClick`, props.config);
  if (props.config?.actionType === 'orpheus') {
    console.log(`[CardButton] onClick 执行跳转`);
  } else {
    emits('click', props.config?.action as string);
  }
}
</script>

<style lang="scss" scoped>
button {
  margin-right: 0.3rem;
  line-height: 0.5rem;
  min-width: 1.12rem;
  background-color: transparent;
  border-radius: 1rem;
  border: 1px solid #e4e4e4;
}
</style>
