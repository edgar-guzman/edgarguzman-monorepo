// A shared ESLint configuration for the repository.

import { includeIgnoreFile } from "@eslint/compat";
import js from "@eslint/js";
import configPrettier from "eslint-config-prettier/flat";
import onlyWarn from "eslint-plugin-only-warn";
import turboPlugin from "eslint-plugin-turbo";
import path from "node:path";
import { fileURLToPath } from "node:url";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, "../../../.gitignore");

/** @type {import("eslint").Linter.Config} */
export const eslintConfig = [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        plugins: {
            turbo: turboPlugin,
        },
        rules: {
            // Eslint
            semi: "error",
            quotes: ["error", "single"],

            "prefer-const": "off",
            "prefer-template": "error",
            "prefer-arrow-callback": "error",

            "arrow-body-style": "error",

            // Turbo
            "turbo/no-undeclared-env-vars": "warn",

            // Typescript Eslint
            "@typescript-eslint/no-empty-object-type": "error"
        },
    },
    {
        plugins: {
            onlyWarn,
        },
    },
    configPrettier,
    includeIgnoreFile(gitignorePath),
];
