/*
 * @Author: yerun sswmouse@163.com
 * @Date: 2025-09-25 18:08:16
 * @LastEditors: yerun sswmouse@163.com
 * @LastEditTime: 2025-09-26 14:36:34
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
 * @param {Boolean} isGrade 是否一二级菜单模式(一级菜单下有多个子菜单时使用此参数，默认为false)
 * @param {Boolean} meta.hideSide 是否隐藏侧边栏
 * @param {Boolean} meta.hideNavHead 是否隐藏顶部导航栏
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
        icon: 'el-icon-s-platform',
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
                    hideNavHead: false,
                    sideNotShow: false,
                    keepAlive: false,
                    
                }
            }
        ],
    },
    {
        path: '/class',
        name: 'class',
        label: '职业',
        icon: 'el-icon-s-home',
        component: () => import('@/components/layouts/layout.vue'),
        redirect: '/home/index',
        isGrade: true,
        children: [
            {
                path: '/class/list',
                name: 'classList',
                label: '职业列表',
                component: () => import('@/views/occupation/index.vue'),
                meta: {
                    hideSide: false,
                    hideNavHead: false,
                    sideNotShow: false,
                    keepAlive: false,
                }
            },
            {
                path: '/class/add',
                name: 'classAdd',
                label: '职业添加',
                component: () => import('@/views/home.vue'),
                meta: {
                    hideSide: true,
                    hideNavHead: false,
                    sideNotShow: true,
                    keepAlive: false,
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
            hideNavHead: true,
            sideNotShow: true,
            keepAlive: true,
        }
    }
];
