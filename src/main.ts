import { createApp } from 'vue';
import App from './App.vue';
import Vant from 'vant';
import router from './router';

import 'swiper/css';
import 'vant/lib/index.css';
import './styles/index.scss';

createApp(App).use(Vant).use(router).mount('#app');
