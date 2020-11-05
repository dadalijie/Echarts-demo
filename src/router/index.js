import Vue from 'vue'
import Router from 'vue-router'

const Test = () => import('@/views/test/index.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test',
      component: Test
    }
  ]
})


const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}