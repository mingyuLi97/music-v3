<!--
 * @Description: "songRcmdFromComment"
 * @Author: 李明宇
 * @Date: 2022-03-08 22:56:09
-->
<template>
  <mark class="rcmd-tag" v-if="content">{{ content }}</mark>
</template>

<script setup lang="ts">
const props = defineProps<{ content?: string }>();
</script>

<style lang="scss" scoped>
.rcmd-tag {
  background-color: #fef9f6;
  color: #f08f5b;
  padding: 0.1rem;
  font-size: 10px;
}
</style>
