import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import store from './store';
import "./api/mock"

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')