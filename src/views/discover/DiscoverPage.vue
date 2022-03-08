<!--
 * @Description: 发现页面
 * @Author: 李明宇
 * @Date: 2022-02-20 19:56:02
-->
<template>
  <div :class="bem()">
    <header>
      <SideViewButton />
      <SearchButton route-path="" style="margin: 0 0.3rem" />
      <!-- TODO：换成功能按钮 -->
      <SideViewButton />
    </header>

    <component
      v-for="(item, index) in blocks"
      :key="index"
      :item="item"
      :is="getRenderComponent(item)"
    >
    </component>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import SearchButton from '@/components/SearchButton.vue';
import SideViewButton from '@/components/SideViewButton.vue';
import Banner from './Banner.vue';
import DragonBall from './DragonBall.vue';
import SlidePlaylistVue from './SlidePlaylist.vue';
import { createBEM } from '@/utils/bem';
import { Block, getHomepage } from '@/service/interface/home';
import SongListAlignVue from './SongListAlign.vue';

const bem = createBEM('discover-page');

const blocks = reactive<Block[]>([]);

function getRenderComponent(item: Block) {
  const map: { [K in Block['showType']]: any } = {
    BANNER: Banner,
    DRAGON_BALL: DragonBall,
    HOMEPAGE_SLIDE_PLAYLIST: SlidePlaylistVue,
    SHUFFLE_MUSIC_CALENDAR: DragonBall,
    HOMEPAGE_SLIDE_SONGLIST_ALIGN: SongListAlignVue
  };
  return map[item.showType];
}

getHomepage().then(res => {
  if (res.code === 200) {
    blocks.push(...res.data.blocks);
    blocks.splice(1, 0, {
      showType: 'DRAGON_BALL'
    });
  }
  console.log('getHomepage', res);
  const cursor = JSON.parse(res.data.cursor);
  console.log('getHomepage cursor', cursor);
});
</script>

<style lang="scss" scoped>
.discover-page {
  header {
    display: flex;
    align-items: center;
    height: 1rem;
    padding: 0 0.3rem;
  }
}
</style>
