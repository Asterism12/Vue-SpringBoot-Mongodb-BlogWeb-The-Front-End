import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    LoginState: false,
    UserName:'',
    AvatarUrl:'../assets/logo.png',
    Sex:'男',
    ReadingBlog:0,
    Classification:'',
    SearchKeyword:'',}
})

export default store
