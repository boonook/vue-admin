import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'
Vue.use(Router);
import store from '../store'
import routes from './routes'


const router = new Router({
    routes,
    mode: 'history'
});

router.beforeEach((to,from,next)=>{
    const isLogin = store.state.isLogin;
    if(!isLogin && to.name !== 'login') return next({name:'login'});
    if(isLogin && to.name === 'login') return next({name:'index'});
    if(to.meta) document.title = to.meta.title || 'vue3.0';
    next()
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

export default router