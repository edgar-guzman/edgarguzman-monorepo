import { nextJsConfig } from "@edgarguzman/eslint/next";

/** @type {import("eslint").Linter.Config} */
export default [
    ...nextJsConfig,
    {
        rules: {
            // Eslint
            "prefer-const": "off",
        },
    },
];
