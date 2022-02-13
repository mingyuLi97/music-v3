<template>
  <div class="login-view">
    <img src="@/assets/logo.jpeg" alt="logo" />
    <van-form @submit="login" validate-trigger="onSubmit">
      <van-field
        v-model="phone"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        type="tel"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-button
        class="login-view__submit"
        :loading="isSubmit"
        round
        block
        type="default"
        native-type="submit"
      >
        登录
      </van-button>
    </van-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const phone = ref('');
const password = ref('');

const isSubmit = ref(false);

function login() {
  console.log(phone.value + password.value);
}
</script>

<style lang="scss" scoped>
.login-view {
  margin: 0 0.3rem;
  img {
    width: 50%;
  }

  button {
    margin-top: 0.3rem;
  }
}
</style>
