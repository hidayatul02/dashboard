import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import axios from 'axios';
import store from './store';
import Vuex from 'vuex';


//import css
import './assets/css/app.css'

///import router
import router from './router'

axios.defaults.baseURL = 'http://localhost:8000/api/';

const app = createApp(App, {
    Vuex
})
app.use(router)
app.use(store)
app.mount('#app')
