<!--
 * @Description: 歌曲列表横划卡
 * @Author: 李明宇
 * @Date: 2022-03-03 22:42:54
-->
<template>
  <div :class="bem()">
    <CardWrapper :titles="title">
      <template #button>
        <CardButtonVue :config="props.item.uiElement.button" />
      </template>
    </CardWrapper>
    <Swiper slides-per-view="auto">
      <SwiperSlide v-for="(creative, index) in creatives" :key="index">
        <SongItemVue
          v-for="(item, index) in creative.resources"
          :key="index"
          :ui-element="item.uiElement"
          :song-data="item.resourceExtInfo.songData"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { createBEM } from '@/utils/bem';
import CardWrapper from '@/components/card/CardWrapper.vue';
import CardButtonVue from '@/components/card/CardButton.vue';
import SongItemVue from '@/components/card_item/SongItem.vue';
import { IHomePageStyleRecommendBlock } from '@/service/interface/home';
import { ICreative } from '@types';

const bem = createBEM('songlist-align-card');
const title = ref('');
const creatives = reactive<ICreative[]>([]);

const props = defineProps<{ item: IHomePageStyleRecommendBlock }>();
title.value = props.item.uiElement.subTitle?.title as string;
creatives.push(...props.item.creatives);
</script>

<style lang="scss" scoped>
.songlist-align-card {
  background-color: #fff;
  padding-left: 0.3rem;
}
</style>
