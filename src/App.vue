<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs

import { searchSong } from './service/interface/search';
import BottomBar, {
  IBottomListItem
} from './components/bottom_bar/BottomBar.vue';
import { reactive, ref } from 'vue';
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
const a = 1;

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

<template>
  <main class="page-main">
    <router-view></router-view>
    <BottomBar :bottomBarList="bottomBarList" />
    <div style="margin-bottom: 2rem"></div>
  </main>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
</template>

<style>
.page-main {
  height: 100%;
  width: 100%;
}
</style>
