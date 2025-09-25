import Vue from 'vue';
import Vuex from 'vuex';
import permissions from './modules/permissions'; // 引入权限模块

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        permissions
    }
});