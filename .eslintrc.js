module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
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
        'semi': ['error', 'never'],
        'quotes': ['error', 'single'],
        "indent": ["error", 2],
        "keyword-spacing": ["error", { "before": true, "after": true }]
    }
};
