import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../views/Home'
import User from '../views/User'
import Main from '../views/Main'
import Mall from '../views/Mall'
import PageOne from '../views/PageOne'
import PageTwo from '../views/PageTwo'

export default new VueRouter({
    routes: [{
            path: '/',
            component: Main,
            redirect: '/home',
            children: [{
                    path: 'home',
                    name: 'home',
                    component: Home
                },
                {
                    path: 'user',
                    name: 'user',
                    component: User
                },
                {
                    path: 'mall',
                    name: 'mall',
                    component: Mall
                },
                {
                    path: 'page1',
                    name: 'page1',
                    component: PageOne
                },
                {
                    path: 'page2',
                    name: 'page2',
                    component: PageTwo
                }
            ]
        },

    ]
})