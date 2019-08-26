import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/Home"
import Login from '@/components/Login'
import Blog from "@/components/Blog";
import Register from "../components/Register";
import UserMain from "../components/UserMain";
import BlogEditor from "../components/BlogEditor";
import Background from "../components/Background";

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path:'/blog/edit',
      component: BlogEditor
    },
    {
      path:'/register',
      component: Register
    },
    {
      path: '/blog/:id',
      name:'blog',
      component: Blog
    },
    {
      path: '/blog/edit',
      component: BlogEditor
    },
    {
      path: 'register',
      component: Register
    }
  ]
})
