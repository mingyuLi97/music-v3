<!--
 * @Description: 每日推荐卡
 * @Author: 李明宇
 * @Date: 2022-02-24 22:35:39
-->
<template>
  <div :class="bem()">
    <CardWrapper :titles="title" v-model:active-index="activeIndex">
      <template #button>
        <CardButtonVue :config="props.item.uiElement.button" />
      </template>
    </CardWrapper>
    <div :class="bem('scroll')">
      <template v-for="(item, index) in dataArr">
        <div v-if="index === 0">
          <!-- {{ item }} -->
        </div>
        <SquareItemVue v-else v-bind="item" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IHomePageSlidePlaylistBlock } from '@/service/interface/home';
import { createBEM } from '@/utils/bem';
import { reactive, ref } from 'vue';
import CardWrapper from '@/components/card/CardWrapper.vue';
import CardButtonVue from '@/components/card/CardButton.vue';
import SquareItemVue, {
  ISquareItemOption
} from '@/components/card_item/SquareItem.vue';

const bem = createBEM('slide-playlist');

const title = ref('');
const activeIndex = ref(0);
const dataArr = reactive<ISquareItemOption[]>([]);

const props = defineProps<{ item: IHomePageSlidePlaylistBlock }>();
title.value = props.item.uiElement.subTitle?.title as string;
dataArr.push(
  ...props.item.creatives.map(item => {
    return {
      count: item.resources[0].resourceExtInfo.playCount,
      uiElement: item.resources[0].uiElement
    };
  })
);
</script>

<style lang="scss" scoped>
.slide-playlist {
  height: 4.14rem;
  // width: 100%;
  background: #ffffff;
  padding-left: 0.3rem;

  &__scroll {
    display: flex;
    overflow-x: scroll;

    div {
      margin-right: 0.2rem;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
