import '@/styles/reset.css';
import '@/styles/default.css';

import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

createApp(App).use(store).mount('#app');
