<template>
  <div :class="bem()">
    <swiper
      :class="bem('sw')"
      :modules="[Autoplay]"
      :loop="true"
      :autoplay="true"
    >
      <swiper-slide
        :class="bem('img')"
        v-for="(banner, index) in banners"
        :key="index"
        data-swiper-autoplay="3000"
      >
        <mark :style="{ backgroundColor: banner.titleColor }">{{
          banner.typeTitle
        }}</mark>
        <img :src="banner.pic" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { createBEM } from '@/utils/bem';
import { IHomePageBannerBlock } from '@/service/interface/home';
import { computed } from 'vue';

const bem = createBEM('discover-page-banner');

const props = defineProps<{ item: IHomePageBannerBlock }>();

const banners = computed(() => {
  return props.item.extInfo.banners;
});
</script>

<style lang="scss" scoped>
.discover-page-banner {
  box-sizing: border-box;
  margin: 0 0.3rem;
  &__sw {
    overflow: hidden;
    border-radius: 0.3rem;
  }
  &__img {
    position: relative;
    mark {
      position: absolute;
      display: block;
      right: 0;
      bottom: 0;
      line-height: 20px;
      min-width: 40px;
      padding: 2px 8px;
      background-color: red;
      border-top-left-radius: 0.3rem;
      color: white;
      font-size: 12px;
      text-align: center;
    }
    img {
      display: block;
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
