/*
 * @Author: yerun sswmouse@163.com
 * @Date: 2025-09-25 18:08:16
 * @LastEditors: yerun sswmouse@163.com
 * @LastEditTime: 2025-09-26 11:13:05
 * @FilePath: /studyProject/baidu/src/router/routers.js
 * @Description: 基础路由
 */
/**
 * @description: 路由参数说明
 * @param {String} path 路径
 * @param {String} name 名称
 * @param {Component} component 组件
 * @param {Object} meta 路由元信息
 * @param {String} label 菜单名称
 * @param {String} icon 菜单图标
 * @param {Boolean} meta.hideSide 是否隐藏侧边栏
 * @param {Boolean} meta.hideNabHead 是否隐藏顶部导航栏
 * @param {Boolean} meta.sideNotShow 侧边栏不显示在菜单中
 * @param {Boolean} meta.keepAlive 是否缓存组件
 * @param {Boolean} meta.active 高亮菜单
 */
export default [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        label: '首页',
        icon: 'el-icon-s-home',
        component: () => import('@/components/layouts/layout.vue'),
        redirect: '/home/index',
        children: [
            {
                path: '/home/index',
                name: 'homeIndex',
                label: '首页',
                component: () => import('@/views/home.vue'),
                meta: {
                    hideSide: false,
                    hideNabHead: true,
                    sideNotShow: false,
                    keepAlive: true,
                    
                }
            }
        ],
    },
    {
        path: '/class',
        name: 'class',
        label: '分类',
        icon: 'el-icon-s-home',
        component: () => import('@/components/layouts/layout.vue'),
        redirect: '/home/index',
        children: [
            {
                path: '/class/list',
                name: 'classList',
                label: '分类列表',
                component: () => import('@/views/home.vue'),
                meta: {
                    hideSide: false,
                    hideNabHead: true,
                    sideNotShow: false,
                    keepAlive: true,
                }
            },
            {
                path: '/class/add',
                name: 'classAdd',
                label: '分类添加',
                component: () => import('@/views/home.vue'),
                meta: {
                    hideSide: true,
                    hideNabHead: true,
                    sideNotShow: true,
                    keepAlive: true,
                    active: '/class/list' // 高亮分类列表菜单
                }
            }
        ],
    },
    {
        path: '/nopermission', // 无权限页面
        name: 'nopermission',
        label: '无权限页面',
        icon: 'el-icon-s-home',
        component: () => import('@/views/nopermission.vue'),
        meta: {
            hideSide: true,
            hideNabHead: true,
            sideNotShow: false,
            keepAlive: true,
        }
    }
];
