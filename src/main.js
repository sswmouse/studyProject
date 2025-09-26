import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';
import './elementImport';
import request from '@/utils/http';
import registerCommonComponents from '@/utils/registration'; // 自动注册公共组件

Vue.config.productionTip = false;

// 自动注册公共组件
registerCommonComponents(Vue);

// 将请求方法绑定到 Vue 原型上，方便在组件中使用
Vue.prototype.$request = request;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
