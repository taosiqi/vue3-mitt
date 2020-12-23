import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mitt from './assets/mitt' //引入mitt库
const emitter =new mitt(); //实例化mitt
const app = createApp(App);
app.config.globalProperties.$emitter = emitter; //挂载到全局
app.use(store).use(router).mount('#app')
