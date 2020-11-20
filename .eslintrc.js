module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-console": "off",
        "quotes": [
            "error",
            "double"
          ]
    },
    "overrides": [
        {
          "files": ["bin/*.js", "lib/*.js"],
          "excludedFiles": "*.test.js",
          "rules": {
            "quotes": ["error", "single"]
          }
        }
      ]
};
