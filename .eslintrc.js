module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended'
    ],
    plugins: [
        'vue'
    ],
    rules: {
        // 关闭不必要的规则
        'no-console': 'off',
        'no-debugger': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'any',
                    normal: 'any',
                    component: 'any'
                },
                svg: 'always',
                math: 'always'
            }
        ],
        // 其它自定义规则
        'vue/html-indent': ['error', 4],
        'quotes': ['error', 'single'], // JS 字符串单引号
        'semi': ['error', 'always'],   // 语句必须分号结尾
        'no-console': 'off',           // 允许 console
    }
};