module.exports = {
    "parserOptions": {
            "ecmaVersion": "latest"
    },
    "env": {
        "browser": true,
        "es2021": true,
        "es6": true,
        "jest/globals": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error"
    }
}
