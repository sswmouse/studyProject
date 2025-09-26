<template>
    <div class="top-bar">
        <!-- 左侧：平台logo和名称 -->
        <div class="left-section">
            <img
                src="@/assets/img/DNF.png"
                alt="平台Logo"
                class="logo"
            />
            <span class="platform-name">数据蛋</span>
        </div>

        <!-- 右侧：用户信息 -->
        <div class="right-section">
            <el-dropdown>
                <div class="user-info">
                    <img
                        src="@/assets/img/user.jpg"
                        alt="用户头像"
                        class="avatar"
                    >
                    <span class="username">用户名</span>
                    <i class="el-icon-arrow-down"></i>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>平台管理员</el-dropdown-item>
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

<style lang="less" scoped>
.top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 20px;
    /* 渐变背景 */
    background: linear-gradient(90deg, #0b1e42 0%, #4b0f7f 60%, #d4af37 100%);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    color: #fff;

    .left-section {
        display: flex;
        align-items: center;

        .logo {
            height: 36px;
            margin-right: 10px;
        }

        .platform-name {
            font-size: 18px;
            font-weight: bold;
            color: #fff; // 渐变背景下用白色文字更清晰
        }
    }

    .right-section {
        display: flex;
        align-items: center;

        .user-info {
            display: flex;
            align-items: center;
            cursor: pointer;

            .avatar {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                margin-right: 8px;
                border: 1px solid rgba(255, 255, 255, 0.3); // 渐变背景下加边框更美观
            }

            .username {
                margin-right: 5px;
                color: #fff; // 渐变背景下用白色文字
            }

            i {
                color: #fff;
            }
        }
    }
}
</style>
