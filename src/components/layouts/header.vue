<template>
    <div class="top-bar">
        <!-- 左侧：平台logo和名称 -->
        <div class="left-section">
            <img
                src="@/assets/img/logo.png"
                alt="平台Logo"
                class="logo"
            />
            <span class="platform-name">平台名称</span>
        </div>

        <!-- 右侧：用户信息 -->
        <div class="right-section">
            <el-dropdown>
                <div class="user-info">
                    <img
                        src="@/assets/avatar.png"
                        alt="用户头像"
                        class="avatar"
                    >
                    <span class="username">用户名</span>
                    <i class="el-icon-arrow-down"></i>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>权限名称</el-dropdown-item>
                    <el-dropdown-item
                        divided
                        @click.native="handleLogout"
                    >
                        登出
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handleLogout() {
            // 登出逻辑
            this.$message.success('已登出');
            // 实际项目中这里应该有登出API调用和路由跳转
        }
    }
};
</script>

<style scoped>
.top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 20px;
    background-color: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.left-section {
    display: flex;
    align-items: center;
}

.logo {
    height: 36px;
    margin-right: 10px;
}

.platform-name {
    font-size: 18px;
    font-weight: bold;
    color: #333;
}

.right-section {
    display: flex;
    align-items: center;
}

.user-info {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 8px;
}

.username {
    margin-right: 5px;
}
</style>
