<template>
    <div class="admin-home">
        欢迎,来到阿拉德大陆！
    </div>
</template>

<script>
export default {
    name: 'AdminHome'
};
</script>

<style lang="less" scoped>
.admin-home {
    height: 100%;
    background-image: url('@/assets/img/ald.png');
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
