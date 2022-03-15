<!--
 * @Description: 加载更多组件
 * @Author: 李明宇
 * @Date: 2022-03-15 21:27:17
-->
<template>
  <div ref="root">
    <slot name="default"></slot>
    {{ text }}
    <div ref="placeholder"></div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

interface Props {
  loading: boolean;
  loadingText: string;
  offset?: number;
  finished: boolean;
  finishedText: string;
}

interface Emits {
  (event: 'load'): void;
  (event: 'update:loading', state: boolean): void;
}

const props = withDefaults(defineProps<Props>(), {
  offset: 50
});
const emits = defineEmits<Emits>();

const root = ref<HTMLElement>();
const placeholder = ref<HTMLElement>();

const text = computed(() => {
  if (props.finished) {
    return props.finishedText;
  }
  if (props.loading) {
    return props.loadingText;
  }
  return '';
});

function check() {
  if (props.loading) {
    return;
  }
  const placeholderBottom = placeholder.value?.getBoundingClientRect()
    .bottom as number;
  const rootBottom = root.value?.getBoundingClientRect().bottom as number;
  if (placeholderBottom - rootBottom < props.offset) {
    emits('load');
    emits('update:loading', true);
  }
}

onMounted(() => {
  root.value?.addEventListener('scroll', check);
});
</script>

<style lang="scss" scoped></style>
