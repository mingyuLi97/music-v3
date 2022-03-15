<template>
  <nav :class="bem()">
    <div
      v-for="(item, index) in bottomBarList"
      :key="index"
      @click="onClick(index)"
      :class="[bem('item'), bem('item', { active: activeIndex === index })]"
    >
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="item.icon"></use>
      </svg>
      <span>{{ item.content }}</span>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { createBEM } from '@/utils/bem';
import { ref } from 'vue';
import { RouteLocationRaw, useRouter } from 'vue-router';
export interface IBottomListItem {
  icon: string;
  content: string;
  routePath: RouteLocationRaw;
}

const bem = createBEM('bottom-bar');
const router = useRouter();

const props = defineProps<{
  bottomBarList: IBottomListItem[];
}>();

const activeIndex = ref(0);

function onClick(index: number) {
  activeIndex.value = index;
  router.push(props.bottomBarList[index].routePath);
}
</script>

<style lang="scss" scoped>
.bottom-bar {
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 5px 0 15px 0;
  background-color: white;
  z-index: 9;

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &--active {
      color: red;
    }

    .icon {
      font-size: 30px;
    }

    span {
      font-size: 10px;
    }
  }
}
</style>
