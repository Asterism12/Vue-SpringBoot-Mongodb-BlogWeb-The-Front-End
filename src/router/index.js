import Vue from 'vue'
import Router from 'vue-router'
import UserMain from "../components/UserMain";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/UserMain',
      name: 'UserMain',
      component: UserMain
    }
  ]
})
