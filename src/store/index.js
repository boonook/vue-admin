import Vue from 'vue'
import Vuex from 'vuex'
import { setCookie,getCookie,flatter } from '../utils'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        //共享数据 变更时会更新UI
        isLogin:getCookie('_islogin') === '1',
    },
    mutations: {
        // 同步方法 只能在这更新state
        setLogin(state,value){
            state.isLogin = value
            setCookie('_islogin',value?'1':'0')
        }
    },
    actions: {
        // 异步方法
        login({commit,dispatch,rootState}){
            commit('setLogin',true);
            return Promise.resolve(true)
        },
        logout({commit}){
            commit('setLogin',false)
            return Promise.resolve(true)
        }
    },
    modules: {
        // 共享数据的模块
    }
})
export default store;