import Vue from 'vue'
import VueRouter from 'vue-router'
import ToDoPage from '../views/ToDoPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'todo',
    component: ToDoPage
  },
  {
    path: '/crud',
    name: 'crud',
    component: () => import(/* webpackChunkName: "about" */ '../views/CrudPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
