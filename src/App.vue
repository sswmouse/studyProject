<!--
 * @Author: yerun sswmouse@163.com
 * @Date: 2025-09-24 11:01:01
 * @LastEditors: yerun sswmouse@163.com
 * @LastEditTime: 2025-09-25 17:58:06
 * @FilePath: /studyProject/baidu/src/App.vue
 * @Description: app
-->
<template>
    <div id="app" class="nihao">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
