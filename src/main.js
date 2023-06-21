import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import store from './store';
import "./api/mock"
import Cookie from 'js-cookie'

Vue.config.productionTip = false

Vue.use(ElementUI);

router.beforeEach((to, from, next) => {
    // 判断token是否存在
    const token = Cookie.get('token')
    if (!token && to.name !== 'login') {
        next({ name: 'login' })
    } else if (token && to.name === 'login') {
        next({ name: 'home' })
    } else {
        next()
    }
})

new Vue({
    render: h => h(App),
    router,
    store,
    created() {
        store.commit('addMenu', router)
    }
}).$mount('#app')