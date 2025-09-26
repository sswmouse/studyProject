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
                    v-if="showType(item)"
                    :key="item.name"
                    :index="item.path"
                >
                    <template #title>
                        <i :class="item.icon"></i>
                        {{ item?.label || '' }}
                    </template>
                    <el-menu-item
                        v-for="child in item.children"
                        :key="child.name"
                        active
                        :index="child.path"
                    >
                        {{ child?.label || '' }}
                    </el-menu-item>
                </el-submenu>
                <el-menu-item
                    v-else
                    :key="item.id"
                    :index="item.path"
                >
                    <i :class="item.icon"></i>
                    {{ showLabel(item) }}
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
        },
        /**
         * @description: 是否显示一二级菜单模式
         * @return {*}
         */
        showType(item) {
            if (!item.children || item.children.length === 0) {
                return false;
            } else if (item.isGrade && item.children.length > 0) {
                return true;
            } else {
                return false;
            }
        },
        /**
         * @description: 仅存在一级菜单或子菜单数量为1时显示标签
         * @return {*}
         */
        showLabel(item) {
            if (item.children && item.children.length === 1) {
                return item.children[0]?.label || '';
            } else {
                return item?.label || '';
            }
        },
    },
};
</script>

<style lang="less" scoped>
.sidebar {
    width: 250px;
    height: calc(100vh - 62px);
    position: absolute;
    left: 0;
    top: 60px;
    background: linear-gradient(to bottom, #0b1e42 0%, #4b0f7f 100%);
    border-top: 2px solid #d4af37;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.25);
    overflow: hidden;

    .el-menu-vertical-demo {
        background: transparent;
        border-right: none;
        color: #ffd700;

        // 一级菜单（无子菜单）
        >.el-menu-item {
            color: #ffd700;
            font-weight: 500;
            transition: all 0.3s;

            i {
                margin-right: 8px;
            }

            &:hover {
                background: rgba(255, 215, 0, 0.1);
                box-shadow: inset 0 0 10px rgba(255, 215, 0, 0.3);
            }

            &.is-active {
                background: rgba(255, 215, 0, 0.25);
                color: #fff;
                box-shadow: inset 0 0 12px rgba(255, 215, 0, 0.5);
                font-weight: bold;
            }
        }

        // 一级菜单（包含子菜单）
        >.el-submenu {
            .el-submenu__title {
                color: #ffd700;
                font-weight: 500;
                transition: all 0.3s;

                i {
                    margin-right: 8px;
                }

                &:hover {
                    background: rgba(255, 215, 0, 0.1);
                    box-shadow: inset 0 0 10px rgba(255, 215, 0, 0.3);
                }
            }

            &.is-active>.el-submenu__title {
                background: rgba(255, 215, 0, 0.25);
                color: #fff;
                box-shadow: inset 0 0 12px rgba(255, 215, 0, 0.5);
                font-weight: bold;
            }

            // 子菜单
            .el-submenu__children {
                background: rgba(0, 0, 0, 0.1);

                .el-menu-item {
                    color: #ffe680;
                    padding-left: 40px; // 缩进显示层级

                    &:hover {
                        background: rgba(255, 215, 0, 0.15);
                        box-shadow: inset 0 0 8px rgba(255, 215, 0, 0.3);
                    }

                    &.is-active {
                        background: rgba(255, 215, 0, 0.25);
                        color: #fff;
                        box-shadow: inset 0 0 10px rgba(255, 215, 0, 0.5);
                        font-weight: bold;
                    }
                }
            }
        }
    }
}
</style>