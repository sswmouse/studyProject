/*
 * @Author: yerun sswmouse@163.com
 * @Date: 2025-09-25 18:08:16
 * @LastEditors: yerun sswmouse@163.com
 * @LastEditTime: 2025-09-26 11:04:04
 * @FilePath: /studyProject/baidu/src/router/index.js
 * @Description: 路由注册及全局守卫
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import routers from './routers'; // 路由列表
import store from '@/store'; // Vuex store，用于存储权限信息
import userApi from '@/api/user'; // 假设这是你的获取权限接口
import request from '@/utils/http'; // 假设这是你的请求封装

Vue.use(VueRouter);

// 创建路由实例
const router = new VueRouter({
    mode: 'hash', // 使用history的时候需要配合服务器配置
    routes: routers
});

// 白名单（无需登录或无需权限即可访问的页面）
const whiteList = ['/login', '/nopermission'];

// ===================== 全局路由守卫 =====================
router.beforeEach(async (to, from, next) => {
    // 白名单页面直接放行
    if (whiteList.includes(to.path)) {
        return next();
    }

    // 获取用户权限（可从 Vuex 或接口获取）
    let permissions = store.state.user.permissions;
    if (!permissions || permissions.length === 0) {
        try {
            const res = await request({
                url: userApi.getUser,
                method: 'get',
            });
            permissions = res.data || [];
            store.commit('SET_PERMISSIONS', permissions); // 保存到 Vuex
        } catch (err) {
            console.error('获取权限失败', err);
            return next('/nopermission'); // 获取权限失败也直接去无权限页
        }
    }
    
    // 判断目标路由是否在权限列表中
    if (permissions.some(item => item.pageName?.toLowerCase() === to.name?.toLowerCase())) {
        return next();
    } else {
        return next('/nopermission');
    }
});

export default router;