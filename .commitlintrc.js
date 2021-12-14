/**
 * @Author: topazur
 * @Date: 2021-12-13 16:23:42
 * @LastEditTime: 2021-12-13 16:25:23
 * @LastEditors: topazur
 * @FilePath: ./.commitlintrc.js
 *
 * @url [commitlint官网教程](https://commitlint.js.org/#/guides-local-setup)
 */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  // 覆盖继承插件的规则
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "chore",
        "feat",
        "fix",
        "perf",
        "docs",
        "style",
        "test",
        "build",
        "ci",
        "refactor",
        "revert",
        "review",
        "workflow",
      ],
    ],
  },
};
