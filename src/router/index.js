import Vue from 'vue'
import Router from 'vue-router'
import UserMain from "../components/UserMain"
import HomePage from "../components/HomePage"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/UserMain',
      name: 'UserMain',
      component: UserMain
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    }
  ], mode: 'history'
})
