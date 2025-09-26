<template>
    <div class="sidebar">
        <el-menu
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            :unique-opened="true"
            :default-active="activePath"
            router
        >
            <template v-for="item in filteredMenu">
                <el-submenu
                    v-if="item.children && item.children.length > 0"
                    :index="item.path"
                    :key="item.name"
                >
                    <template #title>
                        <i :class="item.icon"></i>
                        {{ item?.label || '' }}
                    </template>
                    <el-menu-item
                        v-for="child in item.children"
                        active
                        :key="child.name"
                        :index="child.path"
                    >
                        {{ child?.label || '' }}
                    </el-menu-item>
                </el-submenu>
                <el-menu-item
                    v-else
                    :index="item.path"
                    :key="item.id"
                >
                    {{ item.title }}
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import router from '@/router';

export default {
    name: 'Sidebar',
    data() {
        return {
            isCollapse: false, // 侧边栏是否折叠
        };
    },
    computed: {
        ...mapState({
            permissions: state => state.user.permissions, // Vuex 权限数组
        }),
        // 根据权限过滤路由
        filteredMenu() {
            const allRoutes = router.options.routes || [];
            console.log('All Routes:', allRoutes, this.filterRoutes(allRoutes));
            return this.filterRoutes(allRoutes);
        },
        // 当前激活路径
        activePath() {
            const route = this?.$route || {};
            return route.meta.active || route.path;
        },
    },
    methods: {
        /**
         * @description: 递归过滤路由
         * @param {*} routes
         * @return {*}
         */
        filterRoutes(routes) {
            if (!this.permissions || !Array.isArray(this.permissions) || this.permissions.length === 0) {
                return [];
            }
            return routes
                .map(route => {
                    if (route.children) {
                        const filteredChildren = this.filterRoutes(route.children);
                        if (filteredChildren.length > 0) {
                            return { ...route, children: filteredChildren };
                        }
                    }
                    if (this.permissions.some(item => item.pageName?.toLowerCase() === route.name?.toLowerCase())) {
                        return route.meta && route.meta.sideNotShow === false ? route : null;
                    } else {
                        return null;
                    }
                })
                .filter(route => route !== null); // 去掉不显示的路由
        }
    },
};
</script>

<style scoped>
.sidebar {
    width: 250px;
    height: calc(100vh - 61x);
    position: absolute;
    left: 0;
    top: 60px;
    background-color: #FFFFFF;
    border-top: 1px solid #F1F2F5;
}
</style>