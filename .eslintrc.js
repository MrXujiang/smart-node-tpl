module.exports = {
    "env": {
        "browser": true,
        "node": true,  // 启用node环境
        "es6": true    // 启用es6语法
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "semi": [2, "never"],  // 结尾不能有分号
        "eqeqeq": "warn",  // 要求使用 === 和 !==
        "no-irregular-whitespace": "warn",  // 禁止不规则的空白
        "no-empty-pattern": "warn",  // 禁止使用空解构模式
        "no-redeclare": "warn", // 禁止多次声明同一变量
        "quotes": ["error", "single"],  // 代码中使用单引号包裹字符串
        "indent": ["warn", 2],  // 代码缩进为2个空格
        "no-class-assign": "error",  // 禁止修改类声明的变量
        "no-const-assign": "error",  // 禁止修改 const 声明的变量
    }
};