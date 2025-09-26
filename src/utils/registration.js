/*
 * @Author: yerun sswmouse@163.com
 * @Date: 2025-09-26 17:43:00
 * @LastEditors: yerun sswmouse@163.com
 * @LastEditTime: 2025-09-26 17:45:21
 * @FilePath: /studyProject/baidu/src/utils/registration.js
 * @Description: 自动组册组件
 */
export default function registerCommonComponents(Vue) {
    // 自动注册 components 文件夹下的所有 .vue 组件
    const requireComponent = require.context(
        '@/components/common', // 组件目录
        true, // 是否查询子目录
        /\.vue$/ // 匹配 .vue 文件
    );

    requireComponent.keys().forEach(fileName => {
        // 获取组件配置
        const componentConfig = requireComponent(fileName);
        let componentName = '';
        const filePathArr = fileName.split('/');
        if (fileName.includes('index.vue')) {
            componentName = filePathArr[filePathArr.length - 2];
        } else {
            componentName = filePathArr.pop().replace(/\.\w+$/, '');
        }

        // 全局注册组件
        Vue.component(
            componentName,
            componentConfig.default || componentConfig
        );
    });
}