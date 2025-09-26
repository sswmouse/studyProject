import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user'; // 引入权限模块

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user // 注册权限模块
    }
});