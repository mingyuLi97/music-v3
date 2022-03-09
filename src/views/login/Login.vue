<template>
  <div :class="bem()">
    <img src="@/assets/logo.jpeg" alt="logo" />
    <van-form validate-trigger="onSubmit" ref="formRef">
      <van-field
        v-model="(phone as number)"
        name="phone"
        label="手机号"
        placeholder="手机号"
        type="tel"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-if="loginType === 'password'"
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />

      <van-field
        v-else
        v-model="captcha"
        type="password"
        label="验证码"
        placeholder="请输入验证码"
      >
        <template #button>
          <SendCaptchaButton ref="SendCaptchaButtonRef" @click="sendCaptcha" />
        </template>
      </van-field>

      <button :class="bem('change-type')" @click="changeLoginType">
        {{ loginTypeText }}
      </button>

      <van-button
        :class="bem('submit')"
        :loading="isSubmit"
        round
        block
        type="default"
        native-type="submit"
        @click="login"
      >
        登录
      </van-button>
    </van-form>
  </div>
</template>

<script setup lang="ts">
import SendCaptchaButton from './SendCaptchaButton.vue';
import { loginByCellphone } from '@/service/interface/user/login';
import { computed, ref } from 'vue';
import { FormInstance } from 'vant';
import { createBEM } from '@/utils/bem';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/User';
const bem = createBEM('login-view');
const router = useRouter();
const userStore = useUserStore();

const phone = ref<number | null>(null);
let password = ref('');
let captcha = ref('');
const SendCaptchaButtonRef = ref<InstanceType<typeof SendCaptchaButton> | null>(
  null
);
const formRef = ref<FormInstance | null>(null);

let loginType = ref<'password' | 'captcha'>('captcha');

const isSubmit = ref(false);

const loginTypeText = computed(() => {
  return loginType.value === 'captcha' ? '密码登录' : '短信登录';
});

// 切换登录类型
function changeLoginType() {
  console.log('changeLoginType');
  if (loginType.value === 'password') {
    loginType.value = 'captcha';
    password.value = '';
    return;
  }

  if (loginType.value === 'captcha') {
    loginType.value = 'password';
    captcha.value = '';
    return;
  }
}

// 点击发送验证码
function sendCaptcha() {
  formRef.value
    ?.validate('phone')
    .then(() => {
      console.log('sendCaptcha:', phone.value);
      SendCaptchaButtonRef.value?.send(phone.value as number);
    })
    .catch(console.error);
}

async function login() {
  console.log('login', phone.value, password.value, captcha.value);
  const res = await loginByCellphone({
    phone: phone.value as number,
    password: password.value,
    captcha: captcha.value
  });
  if (res.code === 200) {
    userStore.initProfile(res.profile);
    router.push('/Home');
  }
  console.log('login res:', res);
}
</script>

<style lang="scss" scoped>
.login-view {
  margin: 0 0.3rem;
  img {
    width: 50%;
  }

  &__change-type {
    color: #666;
    display: block;
    background-color: white;
    margin: 10px 0 0 0;
    padding: 0 20px;
    border: none; //去除边框
    outline: none; //消除默认点击蓝色边框效果
  }

  &__submit {
    margin-top: 0.3rem;
  }
}
</style>
