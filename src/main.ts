import { createApp } from 'vue';
import App from './App.vue';
import Vant from 'vant';
import router from './router';
import { createPinia } from 'pinia';

import 'swiper/css';
import 'vant/lib/index.css';
import './styles/index.scss';

createApp(App).use(createPinia()).use(Vant).use(router).mount('#app');
