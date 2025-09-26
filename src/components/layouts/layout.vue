<template>
    <div class="layout-container">
        <!-- 顶部导航 -->
        <header
            v-if="!hideNavHead"
            class="layout-header"
        >
            <Header />
        </header>

        <div class="layout-main">
            <!-- 左侧导航栏 -->
            <aside
                v-if="!hideNavHead"
                class="layout-sidebar"
            >
                <Sidebar />
            </aside>

            <!-- 主内容区 -->
            <main class="layout-content">
                <router-view v-if="!KeepAlive" />
                <keep-Alive v-else>
                    <router-view :key="$route.fullPath" />
                </keep-Alive>
            </main>
        </div>
    </div>
</template>

<script>
import Header from './header.vue';
import Sidebar from './sidebar.vue';

export default {
    name: 'Layout',
    components: {
        Header,
        Sidebar
    },
    computed: {
        // 通过路由元信息决定是否隐藏顶部导航栏
        hideNavHead() {
            return this.$route.meta.hideNavHead || false;
        },
        // 通过路由元信息决定是否隐藏侧边栏
        hideSide() {
            return this.$route.meta.hideSide || false;
        },
        // 通过路由元信息决定是否缓存组件
        KeepAlive() {
            return this.$route.meta.KeepAlive || false;
        }
    }
};
</script>

<style lang="less" scoped>
.layout-container {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100vh;

    .layout-header {
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    }

    .layout-main {
        display: flex;
        flex: 1;
        overflow: hidden;
        background: #f0f2f5;

        .layout-sidebar {
            width: 250px;
            transition: width 0.2s;
            background: #ffffff;
            box-shadow: 0 1px 4px rgba(0, 21, 41, 0.12);
        }

        .layout-content {
            flex: 1;
            margin: 20px;
            background: #ffffff;
            overflow: auto;
        }
    }
}
</style>
