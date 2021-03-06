module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "airbnb",
    "plugin:jsx-a11y/recommended",
    "plugin:jest/recommended"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "linebreak-style": [0, "error", "windows"],
    "react/jsx-one-expression-per-line": "off"
  }
};
