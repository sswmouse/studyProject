<template>
    <div class="no-permission">
        <h1>403</h1>
        <p>抱歉，您没有权限访问此页面</p>
        <el-button
            type="primary"
            @click="goBack"
        >
            返回上一页
        </el-button>
    </div>
</template>

<script>
export default {
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }
};
</script>

<style scoped>
.no-permission {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
}

.no-permission h1 {
    font-size: 120px;
    color: #f56c6c;
    margin-bottom: 20px;
}

.no-permission p {
    font-size: 18px;
    color: #909399;
    margin-bottom: 30px;
}
</style>
