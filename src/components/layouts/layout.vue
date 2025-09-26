<template>
    <div class="layout-container">
        <!-- 顶部导航 -->
        <header class="layout-header">
            <Header />
        </header>

        <div class="layout-main">
            <!-- 左侧导航栏 -->
            <aside class="layout-sidebar">
                <Sidebar />
            </aside>

            <!-- 主内容区 -->
            <main class="layout-content">
                <slot></slot>
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
    }
};
</script>

<style scoped>
.layout-container {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100vh;
}

.layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.layout-main {
    display: flex;
    flex: 1;
    overflow: hidden;
}

.layout-sidebar {
    width: 250px;
    transition: width 0.2s;
}

.layout-content {
    flex: 1;
    padding: 20px;
    overflow: auto;
    background: #f0f2f5;
}
</style>
