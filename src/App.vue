<template>
  <div class="page-container">
    <router-view></router-view>
  </div>
  <footer class="app-footer">
    <BottomBar :bottomBarList="bottomBarList" />
  </footer>
  <!-- <div style="margin-bottom: 2rem"></div> -->
</template>
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs

import { searchSong } from './service/interface/search';
import BottomBar, {
  IBottomListItem
} from './components/bottom_bar/BottomBar.vue';
import { reactive, ref } from 'vue';

searchSong('红日').then(console.log).catch(console.error);

const bottomBarList = ref<IBottomListItem[]>([
  {
    icon: '#icon-search1187938easyiconnet',
    content: '发现',
    routePath: ''
  },
  {
    icon: '#icon-search1187938easyiconnet',
    content: '发现',
    routePath: {
      path: '/discover'
    }
  },
  {
    icon: '#icon-search1187938easyiconnet',
    content: '发现',
    routePath: {
      path: '/Login'
    }
  },
  {
    icon: '#icon-search1187938easyiconnet',
    content: '发现',
    routePath: ''
  },
  {
    icon: '#icon-search1187938easyiconnet',
    content: '发现',
    routePath: ''
  }
]);
</script>
<style>
/* .page-container {
  flex: 1;
  overflow-y: scroll;
} */
</style>
