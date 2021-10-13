import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios';

axios.defaults.baseURL = 'http://jsonbase.com/demo_bucket/hello';

axios.defaults.withCredentials = true; 
axios.defaults.headers = {"Content-Type": "application/json"};

createApp(App).use(store).use(router).mount('#app')
