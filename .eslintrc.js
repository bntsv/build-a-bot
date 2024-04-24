module.exports = {
  root: true,
  env: {
    node: true,
    "vue/setup-compiler-macros": true,
  },
  extends: ["plugin:vue/vue3-essential", "@vue/airbnb"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "linebreak-style": 0,
    "operator-linebreak": 0,
    quotes: [2, "double", { avoidEscape: true }],
    "import/no-extraneous-dependencies": ["error", { devDependencies: false, optionalDependencies: false, peerDependencies: false }],
  },
};
