import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../views/Home'
import User from '../views/User'
import Main from '../views/Main'

export default new VueRouter({
    routes: [{
            path: '/',
            component: Main,
            children: [{
                    path: 'home',
                    component: Home
                },
                {
                    path: 'user',
                    component: User
                },
            ]
        },

    ]
})