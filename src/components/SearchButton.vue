<template>
  <button v-if="showText" :class="bem()" @click="onClick">
    <span>
      <svg class="icon" style="color: rgb(170, 170, 170)" aria-hidden="true">
        <use xlink:href="#icon-search1187938easyiconnet"></use>
      </svg>
      {{ showText }}</span
    >
  </button>
</template>

<script setup lang="ts">
import { searchDefault } from '@/service/interface/search';
import { createBEM } from '@/utils/bem';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps<{ routePath: string }>();

const bem = createBEM('search-button');
const router = useRouter();
const showText = ref('');
const realKeyword = ref('');

function onClick() {
  console.log(realKeyword.value);
  router.push({ path: props.routePath, query: { keyword: realKeyword.value } });
}

searchDefault().then(({ data }) => {
  showText.value = data.showKeyword;
  realKeyword.value = data.realkeyword;
});
</script>

<style lang="scss" scoped>
.search-button {
  display: block;
  box-sizing: border-box;
  font-size: 18px;
  width: 100%;
  height: 34px;
  outline: none;
  background-color: #fff;
  border-radius: 34px;
  border: 1px solid rgb(245, 245, 245);
  color: rgb(226, 226, 226);
  overflow: hidden;
  line-height: 34px;

  span {
    width: 90%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
    height: 100%;
  }
}
</style>
