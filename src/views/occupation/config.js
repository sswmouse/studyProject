/*
 * @Author: yerun sswmouse@163.com
 * @Date: 2025-09-26 17:39:20
 * @LastEditors: yerun sswmouse@163.com
 * @LastEditTime: 2025-09-26 17:40:50
 * @FilePath: /studyProject/baidu/src/views/occupation/config.js
 * @Description: 职业菜单常用配置项
 */
const searchConfig = [
    {
        type: 'input',
        label: '姓名',
        engName: 'name',
        placeholder: '请输入姓名',
        span: 8 // 每行占 8/24
    },
    {
        type: 'select',
        label: '性别',
        engName: 'gender',
        placeholder: '请选择性别',
        span: 8,
        options: [
            { label: '男', value: 'male' },
            { label: '女', value: 'female' },
            { label: '其他', value: 'other' }
        ]
    },
    {
        type: 'date',
        label: '出生日期',
        engName: 'birthday',
        placeholder: '请选择出生日期',
        span: 8,
        dateType: 'date'
    },
    {
        type: 'number',
        label: '年龄',
        engName: 'age',
        placeholder: '请输入年龄',
        span: 8,
        min: 0,
        max: 120
    },
    {
        type: 'select',
        label: '城市',
        engName: 'city',
        placeholder: '请选择城市',
        span: 8,
        options: [
            { label: '北京', value: 'beijing' },
            { label: '上海', value: 'shanghai' },
            { label: '广州', value: 'guangzhou' },
            { label: '深圳', value: 'shenzhen' }
        ]
    },
    {
        type: 'input',
        label: '邮箱',
        engName: 'email',
        placeholder: '请输入邮箱',
        span: 8
    }
];

export { searchConfig };