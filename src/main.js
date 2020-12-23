import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mitt from './assets/js/mitt'
const emitter =new mitt();
const app = createApp(App);
app.config.globalProperties.$emitter = emitter;
app.use(store).use(router).mount('#app')
