import Vue from 'vue'
import App from './App.vue'
import store from './store'
import config from './config'
import VueAxios from './libs/axios'
// 安装iview
import iView from 'iview';
import router from './router'
import 'iview/dist/styles/iview.css';
Vue.use(iView);
Vue.use(VueAxios,config);
Vue.config.productionTip = false;

new Vue({
  store:store,
  router,
  render: h => h(App),
}).$mount('#app');
