<template>
    <div class="admin-home">
        <el-container>
            <el-header>
                <h1>后台管理系统</h1>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu
                        default-active="1"
                        class="el-menu-vertical-demo"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                    >
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>导航一</span>
                            </template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航二</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <el-card class="box-card">
                        <div
                            slot="header"
                            class="clearfix"
                        >
                            <span>欢迎使用</span>
                        </div>
                        <div class="text item">
                            这里是后台管理系统的首页内容区域
                        </div>
                    </el-card>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'AdminHome'
};
</script>

<style scoped>
.admin-home {
    height: 100vh;
}

.el-header {
    background-color: #409EFF;
    color: white;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #545c64;
    height: calc(100vh - 60px);
}

.el-main {
    padding: 20px;
    background-color: #f0f2f5;
    height: calc(100vh - 60px);
}

.box-card {
    height: 100%;
}
</style>
