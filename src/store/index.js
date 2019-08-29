import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    LoginState: true,
    UserName:'nwzhr',
    AvatarUrl:'../assets/logo.png',
    Sex:'男',
    ReadingBlog:0,
    Classification:'',
    SearchKeyword:'ddd',}
})

export default store
