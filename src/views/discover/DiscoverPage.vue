<!--
 * @Description: 发现页面
 * @Author: 李明宇
 * @Date: 2022-02-20 19:56:02
-->
<template>
  <div :class="bem()">
    <header>
      <SideViewButton />
      <SearchButton route-path="" style="margin: 0 0.2rem" />
      <!-- TODO：换成功能按钮 -->
      <SideViewButton />
    </header>
    <LoadmoreVue
      v-model:loading="loading"
      :class="bem('scroll')"
      loading-text="加载中..."
      :finished="!hasMore"
      finished-text="没有更多了"
      @load="request"
    >
      <component
        v-for="(item, index) in blocks"
        :key="index"
        :item="item"
        :is="getRenderComponent(item)"
      >
      </component>
    </LoadmoreVue>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import SearchButton from '@/components/SearchButton.vue';
import SideViewButton from '@/components/SideViewButton.vue';
import Banner from './Banner.vue';
import DragonBall from './DragonBall.vue';
import SlidePlaylistVue from './SlidePlaylist.vue';
import { createBEM } from '@/utils/bem';
import { Block, getHomepage } from '@/service/interface/home';
import SongListAlignVue from './SongListAlign.vue';
import { Toast } from 'vant';
import LoadmoreVue from '@/components/loadmore/Loadmore.vue';

const bem = createBEM('discover-page');

const blocks = reactive<Block[]>([]);
// 用来进行分页
let cursor = '';
const hasMore = ref(true);
const loading = ref(false);

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

async function initFirstPage() {
  console.log(`[DiscoverPage] initFirstPage`);
  try {
    await request();
    // blocks.splice(1, 0, {
    //   showType: 'DRAGON_BALL'
    // });
  } catch (error) {
    console.error(`[DiscoverPage] initFirstPage`, error);
  }
}
/**
 * 请求后端数据
 * @param refresh 是否刷新页面
 */
async function request(refresh = false) {
  if (!hasMore.value) {
    return;
  }
  try {
    const res = await getHomepage(refresh, cursor);
    console.log(`[DiscoverPage] request`, res);
    if (res.code === 200) {
      cursor = res.data.cursor;
      hasMore.value = res.data.hasMore;
      blocks.push(...res.data.blocks);
    }
  } catch (error) {
    console.log(`[DiscoverPage] request error`, error);
    Toast('请求错误');
  } finally {
    loading.value = false;
  }
}

initFirstPage();
</script>

<style lang="scss" scoped>
.discover-page {
  height: 100%;
  padding-top: 1rem;
  header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    height: 1rem;
    padding: 0 0.3rem;
    background-color: #fff;
  }

  &__scroll {
    overflow-x: hidden;
    overflow-y: scroll;
    height: 100%;
  }
}
</style>
