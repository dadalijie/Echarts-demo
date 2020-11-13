import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('@/views/home/index.vue')
const pageBar = () => import('@/views/pageBar/index.vue')
const pageLine = () => import('@/views/pageLine/index.vue')
const pagePie = () => import('@/views/pagePie/index.vue')
const showEchart = () => import('@/views/showEchart/index.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      redirect: '/pageBar',
      children: [
        {
          path: '/pageBar',
          name: 'pageBar',
          component: pageBar
        },
        {
          path: '/pageLine',
          name: 'pageLine',
          component: pageLine
        },
        {
          path: '/pagePie',
          name: 'pagePie',
          component: pagePie
        },
        {
          path: '/showEchart',
          name: 'showEchart',
          component: showEchart
        },
      ]
    }
  ]
})


const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}