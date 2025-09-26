/*
 * @Author: yerun
 * @Date: 2025-09-25
 * @Description: 权限 Vuex 模块
 */

const state = {
    permissions: [
        {
            pageName: 'homeIndex', // 页面名称（路由 name）
            permission: [], // 页面权限列表,用于控制页面按钮权限等
        },
        {
            pageName: 'classList', // 页面名称（路由 name）
            permission: [], // 页面权限列表,用于控制页面按钮权限等
        },
        {
            pageName: 'classAdd', // 页面名称（路由 name）
            permission: [], // 页面权限列表,用于控制页面按钮权限等
        },
    ] // 用户权限列表
};

const mutations = {
    // 设置权限列表
    SET_PERMISSIONS(state, permissions) {
        state.permissions = permissions;
    }
};

const actions = {
    // 可选：通过接口更新权限
    updatePermissions({ commit }, permissions) {
        commit('SET_PERMISSIONS', permissions);
    }
};

const getters = {
    // 获取权限列表
    getPermissions: (state) => state.permissions
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};