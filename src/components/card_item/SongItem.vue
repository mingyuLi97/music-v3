<template>
  <div :class="bem()">
    <img :src="ui.image?.imageUrl" alt="" />
    <div :class="bem('container')">
      <h2>
        {{ ui.mainTitle?.title }}<span> - {{ artistStr }}</span>
      </h2>
      <p>
        <RecommendTag
          v-if="ui.subTitle?.titleType === 'songRcmdTag'"
          :content="ui.subTitle?.title"
        />
        <span v-else>{{ ui.subTitle?.title }}</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createBEM } from '@/utils';
import { IUIElement, ISongData } from '@types';
import { reactive, ref } from 'vue';
import RecommendTag from '@/components/tag/RcmdTag.vue';

export interface Props {
  uiElement: IUIElement;
  songData: ISongData;
}
const bem = createBEM('song-item');
const artistStr = ref('');
const props = defineProps<Props>();
const ui = reactive<IUIElement>(props.uiElement);
artistStr.value = props.songData.artists.map(item => item.name).join('&');
</script>

<style lang="scss" scoped>
.song-item {
  width: 6.9rem;
  height: 1.15rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  img {
    width: 1rem;
    height: 1rem;
    border-radius: 0.1rem;
    margin-right: 0.2rem;
    border: 0.5px solid #f0f0f0;
  }
  &__container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-bottom: 1px solid #f0f0f0;
    h2 {
      font-size: 16px;
      font-weight: 400;
      color: #363636;
      margin-bottom: 0.1rem;
      span {
        font-size: 12px;
        color: #949494;
        vertical-align: middle;
      }
    }

    p {
      span {
        font-size: 13px;
        color: #949494;
      }
    }
  }
}
</style>
