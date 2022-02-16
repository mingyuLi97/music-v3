<template>
  <button :class="{ disabled: inCountdown }">{{ text }}</button>
</template>

<script setup lang="ts">
import { sentCaptcha } from '@/service/interface/user/login';
import { computed, ref, defineExpose } from 'vue';

const TIME = 60;
let countdownNum = ref(TIME);

let inCountdown = ref(false);

let timer: NodeJS.Timer;

const text = computed(() =>
  inCountdown.value ? countdownNum.value : '发送验证码'
);

function send(phone: number) {
  if (!inCountdown.value) {
    sentCaptcha(phone);
    inCountdown.value = true;
    timer = setInterval(() => {
      if (--countdownNum.value === 0) {
        timer && clearInterval(timer);
        inCountdown.value = false;
        countdownNum.value = TIME;
      }
    }, 1000);
  }
}

defineExpose({
  send
});
</script>

<style lang="scss" scoped>
button {
  box-sizing: border-box;
  min-width: 90px;
  color: white;
  background: red;
  padding: 5px 10px;
  border-radius: 3px;
  // border-color: red;
  border: none; //去除边框
  outline: none; //消除默认点击蓝色边框效果
}
.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
