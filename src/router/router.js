import Vue from "vue";
import Router from "vue-router";
import DashboardLayout from "../layout/DashboardLayout.vue";
import AuthLayout from "../layout/AuthLayout";
Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'login',
      component: DashboardLayout,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('../views/private/Dashboard.vue')
        },
        {
          path: '/icons',
          name: 'icons',
          component: () => import('../views/private/Icons.vue')
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import('../views/private/UserProfile.vue')
        },
        {
          path: '/maps',
          name: 'maps',
          component: () => import('../views/private/Maps.vue')
        },
        {
          path: '/tables',
          name: 'tables',
          component: () => import('../views/private/Tables.vue')
        }
      ]
    },
    {
      path: '/auth',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('../views/public/Login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('../views/public/Register.vue')
        }
      ]
    }
  ]
})