import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    LoginState: false,
    Classification:0,
    SearchKeyword:'',
    UserInfo:{
      UserName:'',
      RegisterDate:new Date().toLocaleString(),
      Blogs:[],
      Avatar:{},
      Age:233,
      Sex:'男',
      Sign:'Sign'
    }
  }
})

export default store
